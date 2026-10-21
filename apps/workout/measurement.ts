import { z } from 'zod'

/**
 * The MCP measurement contract (EF-1447, app plan "Imperial accounts" §1 and §6).
 *
 * Every weight and body measurement the card reads is a measurement object, `{ value, unit }`, already in
 * the resolved exercise unit (account units for body/aggregates). The card renders `value` with `unit` exactly as given and never converts it:
 * `presentation.unitSystem` is only a hint for the unit of a value the user types into an empty field.
 *
 * - Loads retain exact converted precision, displayed with at most two decimals in either unit.
 * - Totals and estimates (volume, estimated one-rep maximum) are whole units, rendered whole.
 * - Body metrics use unit-free identifiers and one unit dimension each, rendered unsnapped at one decimal;
 *   bpm is whole.
 *
 * A dated point (a chart point or a body-metric observation) carries its measurement object as `value`.
 * Bare numbers are never accepted where a measurement is expected.
 */

const weightUnit = z.enum(['lb', 'kg'])
const nonNegative = z.number().nonnegative()

/** An exact converted load; human presentation alone rounds to two decimals. */
export const loadSchema = z.object({ value: nonNegative, unit: weightUnit })
export const distanceSchema = z.object({ value: nonNegative, unit: z.enum(['m', 'km', 'mi', 'ft', 'yd']) })
export const paceSchema = z.object({ value: nonNegative, unit: z.enum(['s/km', 's/mi', 's/500m', 's/100m', 's/100yd']) })
export const speedSchema = z.object({ value: nonNegative, unit: z.enum(['km/h', 'mph']) })
export const elevationSchema = z.object({ value: nonNegative, unit: z.enum(['m', 'ft']) })
export const exerciseUnitsSchema = z.object({ load: weightUnit, distance: distanceSchema.shape.unit, pace: paceSchema.shape.unit, speed: speedSchema.shape.unit, elevation: elevationSchema.shape.unit })
export type Distance = z.infer<typeof distanceSchema>
export type ExerciseUnits = z.infer<typeof exerciseUnitsSchema>
/** A total or an estimate (volume, estimated one-rep maximum): whole units. */
export const totalSchema = z.object({ value: z.number().int().nonnegative(), unit: weightUnit })

export const circumferenceIds = ['neck', 'shoulders', 'chest', 'waist', 'hips', 'biceps', 'forearms', 'thighs', 'calves'] as const
/** Unit-free body-metric identifiers, in the application's order. */
export const bodyMetricIds = ['weight', ...circumferenceIds, 'body_fat', 'resting_heart_rate'] as const
export const circumferenceIdSchema = z.enum(circumferenceIds)
export const bodyMetricIdSchema = z.enum(bodyMetricIds)
export type BodyMetricId = typeof bodyMetricIds[number]

export const bodyWeightSchema = z.object({ value: nonNegative, unit: weightUnit })
export const circumferenceSchema = z.object({ value: nonNegative, unit: z.enum(['cm', 'in']) })
export const bodyFatSchema = z.object({ value: nonNegative, unit: z.literal('percent') })
export const heartRateSchema = z.object({ value: z.number().int().nonnegative(), unit: z.literal('bpm') })

const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
/** One observation of one body metric; its unit must belong to that metric's dimension. */
export const bodyMetricObservationSchema = z.union([
  z.object({ key: z.literal('weight'), date: day, value: bodyWeightSchema }),
  z.object({ key: circumferenceIdSchema, date: day, value: circumferenceSchema }),
  z.object({ key: z.literal('body_fat'), date: day, value: bodyFatSchema }),
  z.object({ key: z.literal('resting_heart_rate'), date: day, value: heartRateSchema })
])
/** Dated chart points: a day and its measurement object; `isPr` marks a record-setting session. */
export const estimatePointSchema = z.object({ date: day, value: totalSchema, isPr: z.boolean().optional() })
export const bodyWeightPointSchema = z.object({ date: day, value: bodyWeightSchema })
export const circumferencePointSchema = z.object({ date: day, value: circumferenceSchema })
export const bodyFatPointSchema = z.object({ date: day, value: bodyFatSchema })
export const heartRatePointSchema = z.object({ date: day, value: heartRateSchema })

export type Load = z.infer<typeof loadSchema>
export type Total = z.infer<typeof totalSchema>
export type LoadUnit = z.infer<typeof weightUnit>
export interface Measurement { value: number, unit: string }

const intlUnit: Record<string, string> = { lb: 'pound', kg: 'kilogram', cm: 'centimeter', in: 'inch', m: 'meter', km: 'kilometer', mi: 'mile', ft: 'foot', yd: 'yard' }
const withUnit = (value: number, unit: string, locale: string, digits: number) => new Intl.NumberFormat(locale, { maximumFractionDigits: digits, style: 'unit', unit: intlUnit[unit] ?? unit, unitDisplay: 'short' }).format(value)

/** A load as given: "187.5 lb", "85.25 kg". */
export const formatLoad = (load: Measurement, locale: string) => withUnit(load.value, load.unit, locale, 2)
/** A total or an estimate as given, in whole units: "12,346 lb". */
export const formatTotal = (total: Measurement, locale: string) => withUnit(total.value, total.unit, locale, 0)
/**
 * A body measurement as given, unsnapped at one decimal; heart rate is whole. `bpm` renders the localized
 * beats-per-minute phrase from the already formatted number.
 */
export const formatBodyMetric = (measurement: Measurement, locale: string, bpm: (value: string) => string) => {
  if (measurement.unit === 'percent') return new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 1 }).format(measurement.value / 100)
  if (measurement.unit === 'bpm') return bpm(new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(measurement.value))
  return withUnit(measurement.value, measurement.unit, locale, 1)
}
/** The Intl unit behind a measurement unit, for input labels. */
export const intlUnitOf = (unit: string) => intlUnit[unit] ?? unit
/** The unit a value typed into an empty weight field is sent in: the account's, from the presentation hint. */
export const accountLoadUnit = (system: 'metric' | 'imperial'): LoadUnit => system === 'imperial' ? 'lb' : 'kg'

/** The message key naming a body metric (`progressUi.*`). */
export const bodyMetricLabelKey = (key: BodyMetricId) => key === 'weight' ? 'progressUi.weight' : key === 'body_fat' ? 'progressUi.fat' : key === 'resting_heart_rate' ? 'progressUi.restingHr' : `progressUi.measurement.${key}`
/** The application's page for a metric is addressed by its storage key; only links use it. */
export const bodyMetricPageKey = (key: BodyMetricId) => key === 'weight' ? 'weight_kg' : key === 'body_fat' ? 'body_fat_percent' : key === 'resting_heart_rate' ? 'resting_heart_rate_bpm' : `${key}_cm`

/**
 * Sum `value × reps` over loads that share one unit. Loads in mixed units have no single total without a
 * conversion the card never makes, so the result is undefined.
 */
export const sumLoads = (entries: Array<{ load: Measurement, reps: number }>): Total | undefined => {
  const units = new Set(entries.map(entry => entry.load.unit))
  if (units.size !== 1) return undefined
  const unit = [...units][0] as LoadUnit
  return { value: Math.round(entries.reduce((sum, entry) => sum + entry.load.value * entry.reps, 0)), unit }
}

/** The unit a chart series is drawn in: its points' own unit (a series is published in one unit). */
export const seriesUnit = (points: ReadonlyArray<{ value: Measurement }>, fallback: string) => points[0]?.value.unit ?? fallback
/** Dated measurements as the chart draws them: the day and the number, in the series' unit. */
export const chartPoints = (points: ReadonlyArray<{ date: string, value: Measurement }>) => points.map(point => ({ date: point.date, value: point.value.value }))
/** The unit the account reads a body metric in; only an empty series is labelled with it. */
export const accountBodyMetricUnit = (key: BodyMetricId, system: 'metric' | 'imperial') => key === 'weight' ? accountLoadUnit(system) : key === 'body_fat' ? 'percent' : key === 'resting_heart_rate' ? 'bpm' : system === 'imperial' ? 'in' : 'cm'

/** Render an exercise measurement literally; the server already resolved its category. */
export const formatExerciseMeasurement = (measurement: Measurement, locale: string): string => {
  if (measurement.unit.startsWith('s/')) {
    const seconds = Math.round(measurement.value)
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}/${measurement.unit.slice(2)}`
  }
  if (measurement.unit === 'km/h' || measurement.unit === 'mph') return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(measurement.value)} ${measurement.unit}`
  return withUnit(measurement.value, measurement.unit, locale, 2)
}

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { createWorkoutConnection } from './workoutConnection'
import type { ProgressView } from './progressModel'
import { resolveDisplayUnitSystem, formatMeasure } from './presentation'
import { accountLoadUnit, formatExerciseMeasurement, chartPoints, formatBodyMetric, seriesUnit, type BodyMetricId, type Measurement } from './measurement'
import { formatDay } from './planningModel'
import ProgressChart from './ProgressChart.vue'
const { progress, disabled, navigate } = defineProps<{ progress: ProgressView, disabled: boolean, navigate: ReturnType<typeof createWorkoutConnection>['navigate'] }>()
const open = (key: BodyMetricId) => navigate({ name: 'open_body_metric', arguments: { key, from: progress.record.rangeStart, to: progress.record.asOf } })
const { t, locale } = useI18n()
// Body measurements render as given, unsnapped at one decimal and never converted (measurement.ts).
const body = (measurement: Measurement) => formatBodyMetric(measurement, locale.value, value => t('progressUi.bpm', { value }))
const accountUnit = () => accountLoadUnit(resolveDisplayUnitSystem(progress.presentation.unitSystem, locale.value))
/** A chart's formatter in its series' unit; the account unit only labels an empty series. */
const bodyIn = (points: ReadonlyArray<{ value: Measurement }>, fallback: string) => {
  const unit = seriesUnit(points, fallback)
  return (value: number) => body({ value, unit })
}
</script>
<template>
  <section
    v-if="progress.related.section === 'body'"
    class="mb-6"
    aria-labelledby="body-title"
  >
    <h2
      id="body-title"
      class="font-serif text-2xl"
    >
      {{ t('progressUi.body') }}
    </h2>
    <p class="mt-2 text-sm text-muted">
      {{ t('progressUi.neutral') }}
    </p>
    <dl class="mt-4 grid grid-cols-2 gap-4 rounded bg-surface p-4">
      <div>
        <dt class="text-sm text-muted">
          {{ t('progressUi.weight') }}
        </dt><dd class="mt-1 text-xl">
          {{ progress.record.body.weight === null ? t('progressUi.unavailable') : body(progress.record.body.weight) }}
        </dd>
      </div>
      <div>
        <dt class="text-sm text-muted">
          {{ t('progressUi.targetWeight') }}
        </dt><dd class="mt-1 text-xl">
          {{ progress.record.body.goalWeight === null ? t('progressUi.unavailable') : body(progress.record.body.goalWeight) }}
        </dd>
      </div>
      <div>
        <dt class="text-sm text-muted">
          {{ t('progressUi.fat') }}
        </dt><dd class="mt-1 text-xl">
          {{ progress.record.body.bodyFat === null ? t('progressUi.unavailable') : body(progress.record.body.bodyFat) }}
        </dd>
      </div>
    </dl>
    <button
      class="secondary mt-4"
      :disabled
      @click="open('weight')"
    >
      {{ t('progressUi.viewWeight') }}
    </button>
    <button
      class="secondary mt-4"
      :disabled
      @click="open('body_fat')"
    >
      {{ t('progressUi.viewFat') }}
    </button>
    <progress-chart
      :title="t('progressUi.weight')"
      :points="chartPoints(progress.record.body.weightSeries)"
      :format="bodyIn(progress.record.body.weightSeries, accountUnit())"
    />
    <progress-chart
      :title="t('progressUi.fat')"
      :points="chartPoints(progress.record.body.bodyFatSeries)"
      :format="bodyIn(progress.record.body.bodyFatSeries, 'percent')"
    />
    <section
      v-for="measurement in progress.record.body.measurements"
      :key="measurement.key"
      class="mt-5"
    >
      <h3 class="font-semibold">
        {{ t(`progressUi.measurement.${measurement.key}`) }}
      </h3>
      <p class="mt-1 text-sm">
        {{ t('progressUi.current', { value: body(measurement.value) }) }}
      </p>
      <button
        class="secondary mt-3"
        :disabled
        @click="open(measurement.key)"
      >
        {{ t('progressUi.viewMetric') }}
      </button>
      <progress-chart
        :title="t(`progressUi.measurement.${measurement.key}`)"
        :points="chartPoints(measurement.series)"
        :format="bodyIn(measurement.series, measurement.value.unit)"
      />
    </section>
  </section>
  <section
    v-else
    class="mb-6"
    aria-labelledby="cardio-title"
  >
    <h2
      id="cardio-title"
      class="font-serif text-2xl"
    >
      {{ t('progressUi.cardio') }}
    </h2>
    <dl class="mt-4 grid grid-cols-2 gap-4 rounded bg-surface p-4">
      <div>
        <dt class="text-sm text-muted">
          {{ t('progressUi.zone2') }}
        </dt><dd class="mt-1 text-xl">
          {{ formatMeasure('duration', progress.record.cardio.zone2Minutes * 60, (resolveDisplayUnitSystem(progress.presentation.unitSystem, locale)), locale) }}
        </dd>
      </div>
      <div>
        <dt class="text-sm text-muted">
          {{ t('progressUi.restingHr') }}
        </dt><dd class="mt-1 text-xl">
          {{ progress.record.cardio.restingHr === null ? t('progressUi.unavailable') : body(progress.record.cardio.restingHr) }}
        </dd>
      </div>
    </dl>
    <p class="mt-2 text-sm text-muted">
      {{ t('progressUi.zone2Note') }}
    </p>
    <button
      class="secondary mt-4"
      :disabled
      @click="open('resting_heart_rate')"
    >
      {{ t('progressUi.viewMetric') }}
    </button>
    <progress-chart
      :title="t('progressUi.restingHr')"
      :points="chartPoints(progress.record.cardio.restingHrSeries)"
      :format="bodyIn(progress.record.cardio.restingHrSeries, 'bpm')"
    />
    <p class="mt-4 text-sm text-muted">
      {{ t('progressUi.cardioRange', { from: formatDay(progress.record.cardio.rangeStart, locale), to: formatDay(progress.record.asOf, locale), weekday: t(`progressUi.weekDays.${progress.record.cardio.weekStart}`) }) }}
    </p>
    <p
      v-if="!progress.record.cardio.activities.length"
      class="mt-4 text-sm"
    >
      {{ t('progressUi.cardioEmpty') }}
    </p>
    <section
      v-for="activity in progress.record.cardio.activities"
      :key="activity.activity"
      class="mt-4 rounded border border-surface-dark p-4"
      :aria-labelledby="`cardio-${activity.activity}`"
    >
      <h3
        :id="`cardio-${activity.activity}`"
        class="font-serif text-xl"
      >
        {{ t(`progressUi.cardioActivities.${activity.activity}`) }}
      </h3>
      <dl
        v-for="week in activity.weekly"
        :key="week.weekStart"
        class="mt-3 border-t border-surface-dark pt-3 text-sm"
      >
        <div class="flex flex-wrap justify-between gap-2">
          <dt>{{ t('progressUi.cardioWeek') }}</dt><dd><time :datetime="week.weekStart">{{ formatDay(week.weekStart, locale) }}</time></dd>
        </div>
        <div
          v-if="week.durationSeconds !== undefined"
          class="mt-1 flex flex-wrap justify-between gap-2"
        >
          <dt>{{ t('progressUi.cardioDuration') }}</dt><dd>{{ formatMeasure('duration', week.durationSeconds, resolveDisplayUnitSystem(progress.presentation.unitSystem, locale), locale) }}</dd>
        </div>
        <div
          v-if="week.distance !== undefined"
          class="mt-1 flex flex-wrap justify-between gap-2"
        >
          <dt>{{ t('progressUi.cardioDistance') }}</dt><dd>{{ formatExerciseMeasurement(week.distance, locale) }}</dd>
        </div>
        <div
          v-if="week.inProgress"
          class="mt-1 text-xs text-muted"
        >
          <dt class="sr-only">
            {{ t('progressUi.cardioWeekStatus') }}
          </dt><dd>{{ t('progressUi.currentWeek') }}</dd>
        </div>
      </dl>
      <p
        v-if="activity.longestDistance"
        class="mt-3 text-sm"
      >
        {{ t('progressUi.cardioLongest', { value: formatExerciseMeasurement(activity.longestDistance.distance, locale) }) }} · <time :datetime="activity.longestDistance.date">{{ formatDay(activity.longestDistance.date, locale) }}</time>
      </p>
      <p
        v-if="activity.longestDistance"
        class="mt-1 text-xs text-muted"
      >
        {{ t('progressUi.cardioLongestNote') }}
      </p>
    </section>
  </section>
</template>

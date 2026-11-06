<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { MUSCLE_MAP_ART_FEMALE } from './lib/muscleMapArt.female'
import { MUSCLE_MAP_ART_MALE } from './lib/muscleMapArt.male'
import type { MuscleMap } from './model'

/**
 * The thumbnail-size front and back figure of what a workout works (app
 * EF-2464). The large diagram stays in the app, so this is a picture, not a
 * control: its accessible name states the muscles in words. The secondary fill
 * cannot clear 3:1 against idle, so its primary-coloured stroke carries the boundary.
 */
const NAMED_MUSCLES = 3
const VIEWS = ['front', 'back'] as const
const ROLE_CLASS = {
  primary: 'fill-muscle-primary',
  secondary: 'fill-muscle-secondary stroke-muscle-primary stroke-[0.75] [stroke-linejoin:round]'
}

const { map } = defineProps<{ map: MuscleMap }>()
const { t, te, locale } = useI18n()

const figures = computed(() => {
  const art = map.body === 'male' ? MUSCLE_MAP_ART_MALE : MUSCLE_MAP_ART_FEMALE
  return VIEWS.map(view => ({
    view,
    viewBox: art.viewBox[view],
    base: art.base[view],
    shapes: Object.entries(art.regions[view]).map(([region, paths]) => {
      const role = map.regions[region]
      return { region, paths, roleClass: role ? ROLE_CLASS[role] : 'fill-muscle-idle' }
    })
  }))
})

const label = computed(() => {
  const known = map.muscles.filter(muscle => te(`compact.muscle.${muscle.slug}`))
  const names = known.slice(0, NAMED_MUSCLES).map(muscle => t(`compact.muscle.${muscle.slug}`))
  const others = known.length - names.length
  if (others > 0) names.push(t('compact.musclesMore', { count: new Intl.NumberFormat(locale.value).format(others) }))
  return t('compact.musclesWorked', { names: new Intl.ListFormat(locale.value, { type: 'conjunction' }).format(names) })
})
</script>

<template>
  <div
    role="img"
    :aria-label="label"
    class="flex gap-0.5"
    data-muscle-map
  >
    <svg
      v-for="figure in figures"
      :key="figure.view"
      :viewBox="figure.viewBox"
      aria-hidden="true"
      class="block h-14 w-7"
    >
      <path
        v-for="(d, index) in figure.base"
        :key="index"
        :d
        class="fill-muscle-idle"
      />
      <g
        v-for="shape in figure.shapes"
        :key="shape.region"
        :class="shape.roleClass"
      >
        <path
          v-for="(d, index) in shape.paths"
          :key="index"
          :d
        />
      </g>
    </svg>
  </div>
</template>

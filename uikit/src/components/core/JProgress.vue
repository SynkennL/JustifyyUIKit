<script setup lang="ts">
import type { ProgressVariant } from '@/types/components'

const props = withDefaults(defineProps<{
  value?: number
  variant?: ProgressVariant
}>(), {
  value: 0,
  variant: 'default'
})

const percentage = Math.min(100, Math.max(0, props.value))

const variants: Record<ProgressVariant, string> = {
  default: 'bg-slate-900',
  success: 'bg-emerald-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500'
}
</script>

<template>
  <div class="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
    <div :class="['h-full rounded-full transition-all', variants[variant]]" :style="{ width: `${percentage}%` }" />
  </div>
</template>

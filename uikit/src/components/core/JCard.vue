<script setup lang="ts">
import type { CardVariant } from '@/types/components'

const props = withDefaults(defineProps<{
  variant?: CardVariant
}>(), {
  variant: 'default'
})

const variants: Record<CardVariant, string> = {
  default: 'bg-white border border-slate-200',
  bordered: 'bg-white border-2 border-slate-900',
  elevated: 'bg-white shadow-xl shadow-slate-200/50',
  glass: 'bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg'
}
</script>

<template>
  <div :class="variants[variant]" class="rounded-xl overflow-hidden transition-all">
    <slot />
  </div>
</template>

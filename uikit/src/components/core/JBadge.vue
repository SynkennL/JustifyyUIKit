<script setup lang="ts">
import type { BadgeVariant } from '@/types/components'

const props = withDefaults(defineProps<{
  variant?: BadgeVariant
}>(), {
  variant: 'solid'
})

const variants: Record<BadgeVariant, string> = {
  solid: 'bg-slate-900 text-white',
  outline: 'bg-transparent border border-slate-300 text-slate-600',
  soft: 'bg-slate-100 text-slate-700',
  dot: 'bg-transparent text-slate-600 before:content-[""] before:w-1.5 before:h-1.5 before:rounded-full before:bg-current before:mr-1.5',
  gradient: 'bg-gradient-to-r from-slate-800 to-slate-600 text-white',
  glass: 'bg-white/20 backdrop-blur-sm text-slate-800 border border-white/30'
}
</script>

<template>
  <span :class="variants[variant]" class="inline-flex items-center transition-all">
    <slot />
  </span>
</template>

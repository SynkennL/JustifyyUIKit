<script setup lang="ts">
import type { ButtonVariant, ButtonSize } from '@/types/components'

const props = withDefaults(defineProps<{
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  rounded?: boolean
}>(), {
  variant: 'solid',
  size: 'md',
  disabled: false,
  rounded: false
})

const sizes: Record<ButtonSize, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
  xl: 'px-6 py-3 text-lg'
}

const variants: Record<ButtonVariant, string> = {
  solid: 'bg-slate-800 text-white hover:bg-slate-700',
  outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
  ghost: 'text-slate-600 hover:bg-slate-100',
  soft: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  link: 'text-slate-600 hover:underline !p-0'
}
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center font-medium transition-all cursor-pointer',
      sizes[size],
      variants[variant],
      rounded ? 'rounded-full' : 'rounded-lg',
      disabled && 'opacity-50 cursor-not-allowed'
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonVariant, ButtonSize } from '@/types/components'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  size: 'md',
  disabled: false,
  loading: false,
  rounded: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const variantClasses: Record<ButtonVariant, string> = {
  // Temel
  solid: 'bg-slate-900 text-white border-transparent hover:bg-slate-800 active:bg-slate-950',
  outline: 'bg-transparent text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400',
  ghost: 'bg-transparent text-slate-600 border-transparent hover:bg-slate-100',
  soft: 'bg-slate-100 text-slate-700 border-transparent hover:bg-slate-200',
  link: 'bg-transparent text-slate-600 border-transparent hover:text-slate-900 underline-offset-4 hover:underline !p-0',

  // Yaratıcı - CSS class kullanarak
  gradient: 'btn-gradient text-white border-transparent',
  glow: 'btn-glow text-white border-transparent',
  glass: 'btn-glass text-slate-800 backdrop-blur-md',
  neu: 'btn-neu text-slate-700 border-transparent',

  // Semantik
  primary: 'bg-blue-500 text-white border-transparent hover:bg-blue-600 active:bg-blue-700',
  secondary: 'bg-slate-500 text-white border-transparent hover:bg-slate-600 active:bg-slate-700',
  danger: 'bg-red-500 text-white border-transparent hover:bg-red-600 active:bg-red-700',
  success: 'bg-emerald-500 text-white border-transparent hover:bg-emerald-600 active:bg-emerald-700',
  warning: 'bg-amber-500 text-white border-transparent hover:bg-amber-600 active:bg-amber-700',
  info: 'bg-cyan-500 text-white border-transparent hover:bg-cyan-600 active:bg-cyan-700',
  icon: 'bg-transparent text-slate-500 border-transparent hover:bg-slate-100 hover:text-slate-700 !p-2',
  '3d': 'btn-3d text-white border-transparent'
}

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-2.5 py-1 text-xs gap-1',
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-5 py-2.5 text-base gap-2',
  xl: 'px-6 py-3 text-lg gap-2.5'
}

const handleClick = (e: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>

<template>
  <button :class="[
    'inline-flex items-center justify-center font-medium border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-offset-2',
    rounded ? 'rounded-full' : 'rounded-lg',
    variantClasses[variant],
    sizeClasses[size],
    (disabled || loading) ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  ]" :disabled="disabled || loading" @click="handleClick">
    <svg v-if="loading" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
    <slot />
  </button>
</template>

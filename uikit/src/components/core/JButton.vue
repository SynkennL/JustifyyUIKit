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

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-2 py-1 text-xs gap-1',
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-5 py-2.5 text-base gap-2',
  xl: 'px-6 py-3 text-lg gap-2.5'
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-slate-800 text-white hover:bg-slate-700 active:bg-slate-900',
  outline: 'bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
  soft: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  link: 'bg-transparent text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline !p-0'
}

function onClick(event: MouseEvent): void {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center font-medium border border-transparent transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400/40 focus:ring-offset-1',
      sizeClasses[size],
      variantClasses[variant],
      rounded ? 'rounded-full' : 'rounded-lg',
      (disabled || loading) && 'opacity-50 cursor-not-allowed pointer-events-none'
    ]"
    :disabled="disabled || loading"
    @click="onClick"
  >
    <svg 
      v-if="loading" 
      class="w-4 h-4 animate-spin" 
      viewBox="0 0 24 24" 
      fill="none"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
    </svg>
    <slot />
  </button>
</template>

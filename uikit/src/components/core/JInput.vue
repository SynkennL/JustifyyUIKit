<script setup lang="ts">
import type { InputVariant } from '@/types/components'
import { useVariant } from '@/composables/useVariant'
import { computed } from 'vue'

interface Props {
  variant?: InputVariant
  placeholder?: string
  disabled?: boolean
  error?: string
  type?: string
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  placeholder: '',
  disabled: false,
  type: 'text',
  size: 'md',
  icon: false
})

const model = defineModel<string>()

const variantClasses: Record<InputVariant, string> = {
  default: 'bg-white border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20',
  filled: 'bg-slate-100 border border-transparent focus:bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-500/20',
  underline: 'bg-transparent border-b-2 border-slate-300 rounded-none focus:border-slate-500 px-0',
  ghost: 'bg-transparent border border-transparent hover:bg-slate-50 focus:bg-slate-50 focus:ring-2 focus:ring-slate-500/20'
}

const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base'
}

const inputClasses = useVariant({
  variant: props.variant,
  variantClasses,
  baseClasses: 'w-full rounded-lg text-slate-900 placeholder-slate-400 transition-all duration-200 focus:outline-none',
  disabled: props.disabled,
  disabledClasses: 'opacity-50 cursor-not-allowed bg-slate-50'
})

const hasError = computed(() => !!props.error)
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <div class="relative">
      <div v-if="icon" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        <slot name="icon" />
      </div>
      <input v-model="model" :type="type" :class="[
        inputClasses,
        sizeClasses[size],
        hasError ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : '',
        icon ? 'pl-10' : ''
      ]" :placeholder="placeholder" :disabled="disabled" />
    </div>
    <span v-if="error" class="text-red-500 text-xs flex items-center gap-1">
      {{ error }}
    </span>
  </div>
</template>

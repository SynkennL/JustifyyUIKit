<script setup lang="ts">
import type { InputVariant } from '@/types/components'

const props = withDefaults(defineProps<{
  variant?: InputVariant
  placeholder?: string
  type?: string
  disabled?: boolean
}>(), {
  variant: 'default',
  placeholder: '',
  type: 'text',
  disabled: false
})

const model = defineModel<string>()

const variants: Record<InputVariant, string> = {
  default: 'bg-white border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20',
  filled: 'bg-slate-100 border border-transparent focus:bg-white focus:border-slate-400',
  underline: 'bg-transparent border-b-2 border-slate-300 rounded-none focus:border-slate-500 px-0',
  ghost: 'bg-transparent border border-transparent hover:bg-slate-50 focus:bg-slate-50'
}
</script>

<template>
  <input v-model="model" :type="type" :placeholder="placeholder" :disabled="disabled" :class="[
    variants[variant],
    'text-slate-900 placeholder-slate-400 transition-all focus:outline-none',
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  ]" />
</template>

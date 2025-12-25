<script setup lang="ts">
const props = withDefaults(defineProps<{
  placeholder?: string
  disabled?: boolean
}>(), {
  placeholder: '',
  disabled: false
})

const model = defineModel<string>()
</script>

<template>
  <textarea v-model="model" :placeholder="placeholder" :disabled="disabled" :class="[
    'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 transition-all focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 resize-none',
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  ]" />
</template>

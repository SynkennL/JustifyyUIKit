<script setup lang="ts">
const props = withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false
})

const model = defineModel<boolean>({ default: false })

const toggle = () => {
  if (!props.disabled) {
    model.value = !model.value
  }
}
</script>

<template>
  <button type="button" role="switch" :aria-checked="model" :disabled="disabled" :class="[
    'relative inline-flex h-5 w-9 shrink-0 rounded-full transition-all cursor-pointer',
    model ? 'bg-slate-900' : 'bg-slate-200',
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  ]" @click="toggle">
    <span :class="[
      'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform',
      model ? 'translate-x-4' : 'translate-x-0.5',
      'mt-0.5'
    ]" />
  </button>
</template>

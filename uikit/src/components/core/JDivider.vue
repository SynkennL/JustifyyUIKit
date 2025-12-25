<script setup lang="ts">
const props = withDefaults(defineProps<{
  vertical?: boolean
  text?: string
}>(), {
  vertical: false
})
</script>

<template>
  <div :class="['flex items-center', vertical ? 'flex-col h-full' : 'w-full my-4']">
    <div :class="['bg-slate-200', vertical ? 'w-px flex-1' : 'h-px flex-1']" />
    <template v-if="text || $slots.default">
      <div :class="['text-slate-400 text-sm', vertical ? 'py-2' : 'px-3']">
        <span v-if="text">{{ text }}</span>
        <slot />
      </div>
      <div :class="['bg-slate-200', vertical ? 'w-px flex-1' : 'h-px flex-1']" />
    </template>
  </div>
</template>

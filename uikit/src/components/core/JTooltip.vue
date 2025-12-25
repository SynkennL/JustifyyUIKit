<script setup lang="ts">
const props = withDefaults(defineProps<{
  position?: 'top' | 'bottom' | 'left' | 'right'
}>(), {
  position: 'top'
})

const positionClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2'
}
</script>

<template>
  <div class="relative inline-block group">
    <slot />
    <div :class="[
      'absolute z-50 px-2 py-1 text-xs text-white bg-slate-900 rounded shadow-lg',
      'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap',
      positionClasses[position]
    ]">
      <slot name="content" />
    </div>
  </div>
</template>

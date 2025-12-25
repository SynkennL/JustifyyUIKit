<script setup lang="ts">
const props = defineProps<{
    name: string
}>()
</script>

<template>
    <img :src="`/icons/${name}.svg`" :alt="name" class="inline-block" />
</template>

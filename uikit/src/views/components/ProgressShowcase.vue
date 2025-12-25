<script setup lang="ts">
import { JProgress } from '@/components'
</script>

<template>
  <section id="progress" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Progress</h2>
      <span class="text-xs text-slate-400">4 varyant</span>
    </div>

    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <JProgress :value="25" variant="default" />
      <JProgress :value="50" variant="success" />
      <JProgress :value="75" variant="warning" />
      <JProgress :value="90" variant="error" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { JButton } from '@/components'
</script>

<template>
  <section id="buttons" class="space-y-8 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Buttons</h2>
      <span class="text-xs text-slate-400">5 variant • 5 boyut</span>
    </div>

    <!-- Varyantlar -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Varyantlar</p>
      <div class="flex flex-wrap gap-3">
        <JButton variant="solid">Solid</JButton>
        <JButton variant="outline">Outline</JButton>
        <JButton variant="ghost">Ghost</JButton>
        <JButton variant="soft">Soft</JButton>
        <JButton variant="link">Link</JButton>
      </div>
    </div>

    <!-- Boyutlar -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Boyutlar</p>
      <div class="flex flex-wrap items-center gap-3">
        <JButton size="xs">XS</JButton>
        <JButton size="sm">Small</JButton>
        <JButton size="md">Medium</JButton>
        <JButton size="lg">Large</JButton>
        <JButton size="xl">XL</JButton>
      </div>
    </div>

    <!-- Özellikler -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Özellikler</p>
      <div class="flex flex-wrap items-center gap-3">
        <JButton rounded>Rounded</JButton>
        <JButton loading>Loading</JButton>
        <JButton disabled>Disabled</JButton>
      </div>
    </div>

    <!-- Kombinasyonlar -->
    <div class="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Kombinasyonlar</p>
      <div class="flex flex-wrap gap-3">
        <JButton size="lg" rounded>Large Rounded</JButton>
        <JButton variant="outline" size="sm">Outline Small</JButton>
        <JButton variant="soft" size="lg">Soft Large</JButton>
        <JButton variant="ghost">Ghost</JButton>
        <JButton loading>Yükleniyor...</JButton>
      </div>
    </div>
  </section>
</template>

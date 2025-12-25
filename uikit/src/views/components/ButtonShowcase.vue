<script setup lang="ts">
import { JButton } from '@/components'
</script>

<template>
  <section id="buttons" class="space-y-8 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Buttons</h2>
      <span class="text-xs text-slate-400">Buton Komponenti</span>
    </div>

    <!-- Varyantlar -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Varyantlar</p>
      <div class="flex flex-wrap gap-3">
        <JButton variant="solid" class="px-4 py-2 rounded-lg">Solid</JButton>
        <JButton variant="outline" class="px-4 py-2 rounded-lg">Outline</JButton>
        <JButton variant="ghost" class="px-4 py-2 rounded-lg">Ghost</JButton>
        <JButton variant="link">Link</JButton>
      </div>
    </div>

    <!-- Boyutlar -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Boyutlar</p>
      <div class="flex flex-wrap items-center gap-3">
        <JButton class="px-2 py-1 text-xs rounded">Küçük</JButton>
        <JButton class="px-4 py-2 text-sm rounded-lg">Orta</JButton>
        <JButton class="px-6 py-3 text-base rounded-lg">Büyük</JButton>
      </div>
    </div>

    <!-- Rounded -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Rounded</p>
      <div class="flex flex-wrap items-center gap-3">
        <JButton class="px-4 py-2 rounded-full">Rounded</JButton>
        <JButton variant="outline" class="px-4 py-2 rounded-full">Outline</JButton>
      </div>
    </div>

    <!-- Kombinasyonlar -->
    <div class="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Kombinasyonlar</p>
      <div class="flex flex-wrap gap-3">
        <JButton class="px-6 py-3 rounded-full font-medium">Kaydet</JButton>
        <JButton variant="outline" class="px-4 py-2 rounded-lg">İptal</JButton>
        <JButton variant="ghost" class="px-4 py-2 rounded-lg">Detaylar</JButton>
      </div>
    </div>
  </section>
</template>

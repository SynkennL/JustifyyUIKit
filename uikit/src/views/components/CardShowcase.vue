<script setup lang="ts">
import { JCard, JButton, JBadge } from '@/components'
</script>

<template>
  <section id="cards" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Cards</h2>
      <span class="text-xs text-slate-400">4 varyant</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Default -->
      <JCard variant="default" class="p-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
        <div class="flex items-center justify-between mb-2">
          <span class="font-medium text-slate-900">Default</span>
          <JBadge variant="soft" class="px-2 py-0.5 text-xs rounded-full">Temel</JBadge>
        </div>
        <p class="text-slate-600 text-sm">Standart kart tasarımı.</p>
      </JCard>

      <!-- Bordered -->
      <JCard variant="bordered" class="p-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
        <div class="flex items-center justify-between mb-2">
          <span class="font-medium text-slate-900">Bordered</span>
          <JBadge variant="solid" class="px-2 py-0.5 text-xs rounded-full">Kalın</JBadge>
        </div>
        <p class="text-slate-600 text-sm">Kalın kenarlık.</p>
      </JCard>

      <!-- Elevated -->
      <JCard variant="elevated" class="p-4 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer">
        <div class="flex items-center justify-between mb-2">
          <span class="font-medium text-slate-900">Elevated</span>
          <JBadge variant="gradient" class="px-2 py-0.5 text-xs rounded-full">Gölgeli</JBadge>
        </div>
        <p class="text-slate-600 text-sm">Derin gölge.</p>
        <div class="flex gap-2 mt-4 pt-4 border-t border-slate-100">
          <JButton variant="solid" class="px-3 py-1.5 text-sm rounded-lg">Onayla</JButton>
          <JButton variant="ghost" class="px-3 py-1.5 text-sm rounded-lg">İptal</JButton>
        </div>
      </JCard>

      <!-- Glass -->
      <JCard variant="glass" class="p-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
        <div class="flex items-center justify-between mb-2">
          <span class="font-medium text-slate-900">Glass</span>
          <JBadge variant="glass" class="px-2 py-0.5 text-xs rounded-full">Modern</JBadge>
        </div>
        <p class="text-slate-600 text-sm">Cam efekti.</p>
      </JCard>
    </div>
  </section>
</template>

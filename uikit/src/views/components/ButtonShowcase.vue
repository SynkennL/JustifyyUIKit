<script setup lang="ts">
import { JButton } from '@/components'
</script>

<template>
  <section id="buttons" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Buttons</h2>
      <span class="text-xs text-slate-400">17 varyant • 5 boyut</span>
    </div>

    <!-- Temel Varyantlar -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Temel</p>
      <div class="flex flex-wrap gap-3">
        <JButton variant="solid">Solid</JButton>
        <JButton variant="outline">Outline</JButton>
        <JButton variant="ghost">Ghost</JButton>
        <JButton variant="soft">Soft</JButton>
        <JButton variant="link">Link</JButton>
      </div>
    </div>

    <!-- Yaratıcı Varyantlar -->
    <div class="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Yaratıcı</p>
      <div class="flex flex-wrap gap-3">
        <JButton variant="gradient">Gradient</JButton>
        <JButton variant="glow">Glow</JButton>
        <JButton variant="glass">Glass</JButton>
        <JButton variant="neu">Neumorphism</JButton>
        <JButton variant="3d">3D Button</JButton>
      </div>
    </div>

    <!-- Semantik -->
    <div class="p-6 bg-slate-50 rounded-xl space-y-4">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Semantik</p>
      <div class="flex flex-wrap gap-3">
        <JButton variant="primary">Primary</JButton>
        <JButton variant="secondary">Secondary</JButton>
        <JButton variant="success">Success</JButton>
        <JButton variant="danger">Danger</JButton>
        <JButton variant="warning">Warning</JButton>
        <JButton variant="info">Info</JButton>
        <JButton variant="icon">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </JButton>
      </div>
    </div>

    <!-- Boyutlar & Özellikler -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">Özellikler</p>
        <div class="flex flex-wrap items-center gap-3">
          <JButton :rounded="true">Rounded</JButton>
          <JButton :loading="true">Loading</JButton>
          <JButton disabled>Disabled</JButton>
        </div>
      </div>
    </div>
  </section>
</template>

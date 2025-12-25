<script setup lang="ts">
import { ref } from 'vue'
import { JBadge, JSwitch } from '@/components'

const switchOn = ref(true)
const switchOff = ref(false)
</script>

<template>
  <section id="extras" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Badges & Switches</h2>
      <span class="text-xs text-slate-400">Yardımcı componentler</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Badges Section -->
      <div class="p-6 bg-slate-50 rounded-xl space-y-5">
        <div>
          <h3 class="font-medium text-slate-800 text-sm">Badge Varyantları</h3>
        </div>

        <div class="flex flex-wrap gap-2">
          <JBadge variant="solid" class="px-2 py-0.5 text-xs rounded-full">Solid</JBadge>
          <JBadge variant="outline" class="px-2 py-0.5 text-xs rounded-full">Outline</JBadge>
          <JBadge variant="soft" class="px-2 py-0.5 text-xs rounded-full">Soft</JBadge>
          <JBadge variant="dot" class="px-2 py-0.5 text-xs rounded-full">Aktif</JBadge>
          <JBadge variant="gradient" class="px-2 py-0.5 text-xs rounded-full">Gradient</JBadge>
          <JBadge variant="glass" class="px-2 py-0.5 text-xs rounded-full">Glass</JBadge>
        </div>

        <div class="pt-4 border-t border-slate-200">
          <p class="text-xs text-slate-500 mb-3">Boyutlar</p>
          <div class="flex flex-wrap items-center gap-3">
            <JBadge variant="soft" class="px-1.5 py-0.5 text-[10px] rounded-full">Small</JBadge>
            <JBadge variant="soft" class="px-2 py-0.5 text-xs rounded-full">Medium</JBadge>
            <JBadge variant="soft" class="px-2.5 py-1 text-sm rounded-full">Large</JBadge>
          </div>
        </div>
      </div>

      <!-- Switches Section -->
      <div class="p-6 bg-slate-50 rounded-xl space-y-5">
        <div>
          <h3 class="font-medium text-slate-800 text-sm">Switch</h3>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-600">Açık</span>
            <JSwitch v-model="switchOn" />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-600">Kapalı</span>
            <JSwitch v-model="switchOff" />
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-600">Disabled</span>
            <JSwitch :disabled="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

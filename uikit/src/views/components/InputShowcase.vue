<script setup lang="ts">
import { ref } from 'vue'
import { JInput } from '@/components'

const inputValue = ref('')
</script>

<template>
  <section id="inputs" class="space-y-6 scroll-mt-20">
    <div class="flex items-center gap-3">
      <h2 class="text-xl font-semibold text-slate-900">Inputs</h2>
      <span class="text-xs text-slate-400">4 varyant</span>
    </div>

    <!-- Varyantlar -->
    <div class="p-6 bg-slate-50 rounded-xl">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Varyantlar</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label class="text-sm text-slate-600">Default</label>
          <JInput v-model="inputValue" variant="default" placeholder="Yazın..." class="w-full px-4 py-2.5 rounded-lg" />
        </div>
        <div class="space-y-2">
          <label class="text-sm text-slate-600">Filled</label>
          <JInput variant="filled" placeholder="Yazın..." class="w-full px-4 py-2.5 rounded-lg" />
        </div>
        <div class="space-y-2">
          <label class="text-sm text-slate-600">Underline</label>
          <JInput variant="underline" placeholder="Yazın..." class="w-full py-2.5" />
        </div>
        <div class="space-y-2">
          <label class="text-sm text-slate-600">Ghost</label>
          <JInput variant="ghost" placeholder="Yazın..." class="w-full px-4 py-2.5 rounded-lg" />
        </div>
      </div>
    </div>

    <!-- Boyutlar -->
    <div class="p-6 bg-slate-50 rounded-xl">
      <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Boyutlar</p>
      <div class="space-y-3">
        <JInput placeholder="Küçük" class="w-full px-3 py-1.5 text-sm rounded-md" />
        <JInput placeholder="Orta" class="w-full px-4 py-2.5 rounded-lg" />
        <JInput placeholder="Büyük" class="w-full px-4 py-3 text-base rounded-lg" />
      </div>
    </div>
  </section>
</template>

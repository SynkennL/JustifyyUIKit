<script setup lang="ts">
// Showcase Components
import ButtonShowcase from './components/ButtonShowcase.vue'
import InputShowcase from './components/InputShowcase.vue'
import CardShowcase from './components/CardShowcase.vue'
import ExtrasShowcase from './components/ExtrasShowcase.vue'
import ProgressShowcase from './components/ProgressShowcase.vue'
import MiscShowcase from './components/MiscShowcase.vue'
import LayoutShowcase from './components/LayoutShowcase.vue'
import SubLayoutShowcase from './components/SubLayoutShowcase.vue'
import IconShowcase from './components/IconShowcase.vue'
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-16">

    <!-- Hero -->
    <section class="text-center py-8">
      <h1 class="text-3xl font-bold text-slate-900 mb-2">Justify UI</h1>
      <p class="text-slate-500 mb-4">UI Kütüphanesi</p>
      <div class="flex justify-center gap-2 flex-wrap">
        <span class="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">UI Kit</span>
      </div>
    </section>

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <ButtonShowcase />

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <InputShowcase />

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <CardShowcase />

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <ExtrasShowcase />

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <ProgressShowcase />

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <MiscShowcase />

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <LayoutShowcase />

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <SubLayoutShowcase />

    <div class="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <IconShowcase />

  </div>
</template>

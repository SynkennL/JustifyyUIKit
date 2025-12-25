<script setup lang="ts">
import { JIcon } from '@/components'
</script>

<template>
    <section id="icons" class="space-y-6 scroll-mt-20">
        <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-slate-900">Icons</h2>
            <span class="text-xs text-slate-400">10 icon</span>
        </div>

        <div class="p-6 bg-slate-50 rounded-xl">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Mevcut İconlar</p>
            <div class="grid grid-cols-5 md:grid-cols-10 gap-4">
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="check" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">check</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="x" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">x</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="plus" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">plus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="minus" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">minus</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="search" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">search</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="heart" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">heart</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="star" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">star</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="user" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">user</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="home" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">home</span>
                </div>
                <div class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                    <JIcon name="settings" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">settings</span>
                </div>
            </div>
        </div>

        <div class="p-6 bg-slate-50 rounded-xl">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Boyutlar</p>
            <div class="flex items-end gap-6">
                <div class="flex flex-col items-center gap-2">
                    <JIcon name="star" class="w-4 h-4" />
                    <span class="text-xs text-slate-500">16px</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <JIcon name="star" class="w-6 h-6" />
                    <span class="text-xs text-slate-500">24px</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <JIcon name="star" class="w-8 h-8" />
                    <span class="text-xs text-slate-500">32px</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <JIcon name="star" class="w-12 h-12" />
                    <span class="text-xs text-slate-500">48px</span>
                </div>
            </div>
        </div>
    </section>
</template>

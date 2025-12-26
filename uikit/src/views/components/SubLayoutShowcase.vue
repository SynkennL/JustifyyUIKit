<script setup lang="ts">
import { ref } from 'vue'
import { JSubNavbar, JSubFooter } from '@/components'
import type { NavbarConfig, FooterConfig } from '@/types/layout'

// SubNavbar Configs
const simpleNavbarConfig = ref<NavbarConfig>({
    brand: {
        text: 'UI Kit',
        href: '/'
    },
    items: [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Hakkımızda', href: '/about' },
        { label: 'Hizmetler', href: '/services' }
    ],
    socialLinks: [
        { icon: 'github', href: 'https://github.com/SynkennL/JustifyyUIKit', label: 'GitHub' }
    ]
})

const dropdownNavbarConfig = ref<NavbarConfig>({
    brand: {
        text: 'Dropdown Demo'
    },
    items: [
        { label: 'Ana Sayfa', href: '/' },
        {
            label: 'Ürünler',
            children: [
                { label: 'Web Uygulamaları', href: '/products/web' },
                { label: 'Mobil Uygulamalar', href: '/products/mobile' },
                { label: 'API Hizmetleri', href: '/products/api' }
            ]
        },
        {
            label: 'Kaynaklar',
            children: [
                { label: 'Dokümantasyon', href: '/docs' },
                { label: 'Blog', href: '/blog' }
            ]
        },
        { label: 'İletişim', href: '/contact' }
    ]
})

// SubFooter Configs
const simpleFooterConfig = ref<FooterConfig>({
    brand: {
        text: 'UI Kit'
    },
    bottomLinks: [
        { label: 'Gizlilik', href: '/privacy' },
        { label: 'Koşullar', href: '/terms' },
        { label: 'İletişim', href: '/contact' }
    ],
    socialLinks: [
        { icon: 'github', href: 'https://github.com' }
    ],
    copyright: '© UI Kit'
})

const columnsFooterConfig = ref<FooterConfig>({
    brand: {
        text: 'UI Kit'
    },
    sections: [
        {
            title: 'Ürün',
            links: [
                { label: 'Özellikler', href: '/features' },
                { label: 'Fiyatlandırma', href: '/pricing' }
            ]
        },
        {
            title: 'Kaynaklar',
            links: [
                { label: 'Dokümantasyon', href: '/docs' },
                { label: 'Örnekler', href: '/examples' }
            ]
        },
        {
            title: 'Şirket',
            links: [
                { label: 'Hakkımızda', href: '/about' },
                { label: 'Blog', href: '/blog' }
            ]
        }
    ],
    socialLinks: [
        { icon: 'github', href: 'https://github.com' }
    ],
    copyright: '© UI Kit'
})
</script>

<template>
    <section class="space-y-8">
        <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold text-slate-900">Sub Layout</h2>
            <span class="text-xs text-slate-400">SubNavbar & SubFooter</span>
        </div>

        <!-- SubNavbar Examples -->
        <div class="space-y-6">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">SubNavbar</p>

            <!-- Simple Navbar -->
            <div class="space-y-2">
                <span class="text-sm text-slate-600">Default</span>
                <div class="rounded-xl border border-slate-200">
                    <JSubNavbar :config="simpleNavbarConfig" variant="default" :sticky="false" />
                </div>
            </div>

            <!-- Dropdown Navbar -->
            <div class="space-y-2">
                <span class="text-sm text-slate-600">Dropdown</span>
                <div class="rounded-xl border border-slate-200 overflow-visible">
                    <JSubNavbar :config="dropdownNavbarConfig" variant="default" :sticky="false" />
                </div>
            </div>

            <!-- Glass Variant -->
            <div class="space-y-2">
                <span class="text-sm text-slate-600">Glass</span>
                <div class="rounded-xl border border-slate-200 bg-slate-50">
                    <JSubNavbar :config="simpleNavbarConfig" variant="glass" :sticky="false" />
                </div>
            </div>

            <!-- Dark Variant -->
            <div class="space-y-2">
                <span class="text-sm text-slate-600">Dark</span>
                <div class="rounded-xl">
                    <JSubNavbar :config="simpleNavbarConfig" variant="dark" :sticky="false" />
                </div>
            </div>
        </div>

        <!-- SubFooter Examples -->
        <div class="space-y-6">
            <p class="text-xs font-medium text-slate-500 uppercase tracking-wider">SubFooter</p>

            <!-- Simple Layout -->
            <div class="space-y-2">
                <span class="text-sm text-slate-600">Simple</span>
                <div class="rounded-xl border border-slate-200">
                    <JSubFooter :config="simpleFooterConfig" layout="simple" variant="default" />
                </div>
            </div>

            <!-- Columns Layout -->
            <div class="space-y-2">
                <span class="text-sm text-slate-600">Columns</span>
                <div class="rounded-xl border border-slate-200">
                    <JSubFooter :config="columnsFooterConfig" layout="columns" variant="default" />
                </div>
            </div>

            <!-- Centered Layout -->
            <div class="space-y-2">
                <span class="text-sm text-slate-600">Centered</span>
                <div class="rounded-xl border border-slate-200">
                    <JSubFooter :config="simpleFooterConfig" layout="centered" variant="default" />
                </div>
            </div>

            <!-- Dark Variant -->
            <div class="space-y-2">
                <span class="text-sm text-slate-600">Dark</span>
                <div class="rounded-xl">
                    <JSubFooter :config="simpleFooterConfig" layout="simple" variant="dark" />
                </div>
            </div>
        </div>
    </section>
</template>

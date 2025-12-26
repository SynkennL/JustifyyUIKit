<script setup lang="ts">
import { computed } from 'vue'

// Types
export interface FooterLink {
    label: string
    href?: string
    external?: boolean
    onClick?: () => void
}

export interface FooterSection {
    title: string
    links: FooterLink[]
}

export interface FooterConfig {
    brand?: {
        text?: string
        logo?: string
        description?: string
    }
    sections?: FooterSection[]
    bottomLinks?: FooterLink[]
    socialLinks?: Array<{
        icon: 'github' | 'twitter' | 'linkedin' | 'discord' | 'youtube' | 'instagram' | 'facebook'
        href: string
        label?: string
    }>
    copyright?: string
    showYear?: boolean
}

type FooterVariant = 'default' | 'minimal' | 'bordered' | 'dark' | 'glass'
type FooterLayout = 'simple' | 'columns' | 'centered'
type ContentAlign = 'start' | 'center' | 'end'

const props = withDefaults(defineProps<{
    config?: FooterConfig
    variant?: FooterVariant
    layout?: FooterLayout
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
    contentAlign?: ContentAlign
    showDivider?: boolean
}>(), {
    variant: 'default',
    layout: 'simple',
    maxWidth: 'xl',
    contentAlign: 'center',
    showDivider: true
})

// Emits
const emit = defineEmits<{
    linkClick: [link: FooterLink]
}>()

// Computed
const currentYear = computed(() => new Date().getFullYear())

const variantClasses = computed(() => {
    const variants: Record<FooterVariant, string> = {
        default: 'bg-white border-t border-slate-200 text-slate-600',
        minimal: 'bg-transparent border-t border-slate-100 text-slate-500',
        bordered: 'bg-white border-t-2 border-slate-900 text-slate-600',
        dark: 'bg-slate-900 border-t border-slate-800 text-slate-400',
        glass: 'bg-white/80 backdrop-blur-md border-t border-slate-200/50 text-slate-600'
    }
    return variants[props.variant]
})

const maxWidthClasses = computed(() => {
    const widths: Record<string, string> = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-4xl',
        '2xl': 'max-w-6xl',
        full: 'max-w-full'
    }
    return widths[props.maxWidth]
})

const alignClasses = computed(() => {
    const aligns: Record<ContentAlign, string> = {
        start: 'text-left items-start',
        center: 'text-center items-center',
        end: 'text-right items-end'
    }
    return aligns[props.contentAlign]
})

const isDark = computed(() => props.variant === 'dark')

// Methods
const handleLinkClick = (link: FooterLink) => {
    if (link.onClick) {
        link.onClick()
    }
    emit('linkClick', link)
}

// Social Icons
const socialIcons: Record<string, string> = {
    github: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
    twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    discord: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z',
    youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    instagram: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
    facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
}
</script>

<template>
    <footer :class="['mt-auto transition-all', variantClasses]">
        <div :class="['mx-auto px-4 sm:px-6 py-8', maxWidthClasses]">

            <!-- Simple Layout -->
            <template v-if="layout === 'simple'">
                <div :class="['flex flex-col gap-6', alignClasses]">
                    <!-- Brand Section -->
                    <slot name="brand">
                        <div v-if="config?.brand" class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <img v-if="config.brand.logo" :src="config.brand.logo"
                                    :alt="config.brand.text || 'Logo'" class="h-8 w-auto" />
                                <span v-if="config.brand.text"
                                    :class="['font-semibold text-lg', isDark ? 'text-white' : 'text-slate-900']">
                                    {{ config.brand.text }}
                                </span>
                            </div>
                            <p v-if="config.brand.description" class="text-sm max-w-md">
                                {{ config.brand.description }}
                            </p>
                        </div>
                    </slot>

                    <!-- Navigation Links -->
                    <slot name="navigation">
                        <nav v-if="config?.bottomLinks?.length" class="flex flex-wrap gap-4 justify-center">
                            <a v-for="link in config.bottomLinks" :key="link.label" :href="link.href || '#'"
                                :target="link.external ? '_blank' : undefined"
                                :rel="link.external ? 'noopener noreferrer' : undefined" :class="[
                                    'text-sm transition-colors duration-200',
                                    isDark
                                        ? 'hover:text-white'
                                        : 'hover:text-slate-900'
                                ]" @click.prevent="handleLinkClick(link)">
                                {{ link.label }}
                            </a>
                        </nav>
                    </slot>

                    <!-- Divider -->
                    <div v-if="showDivider" :class="[
                        'w-full h-px',
                        isDark ? 'bg-slate-800' : 'bg-slate-200'
                    ]" />

                    <!-- Bottom Section -->
                    <div class="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                        <!-- Copyright -->
                        <slot name="copyright">
                            <span class="text-sm">
                                {{ config?.copyright || '© All rights reserved.' }}
                                <template v-if="config?.showYear !== false"> {{ currentYear }}</template>
                            </span>
                        </slot>

                        <!-- Social Links -->
                        <slot name="social">
                            <div v-if="config?.socialLinks?.length" class="flex items-center gap-3">
                                <a v-for="social in config.socialLinks" :key="social.icon" :href="social.href"
                                    target="_blank" rel="noopener noreferrer" :title="social.label || social.icon"
                                    :class="[
                                        'p-2 rounded-lg transition-all duration-200',
                                        isDark
                                            ? 'hover:text-white hover:bg-slate-800'
                                            : 'hover:text-slate-900 hover:bg-slate-100'
                                    ]">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path :d="socialIcons[social.icon]" />
                                    </svg>
                                </a>
                            </div>
                        </slot>
                    </div>
                </div>
            </template>

            <!-- Columns Layout -->
            <template v-else-if="layout === 'columns'">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
                    <!-- Brand Column -->
                    <div class="col-span-2 md:col-span-1">
                        <slot name="brand">
                            <div v-if="config?.brand" class="flex flex-col gap-3">
                                <div class="flex items-center gap-2">
                                    <img v-if="config.brand.logo" :src="config.brand.logo"
                                        :alt="config.brand.text || 'Logo'" class="h-8 w-auto" />
                                    <span v-if="config.brand.text"
                                        :class="['font-semibold text-lg', isDark ? 'text-white' : 'text-slate-900']">
                                        {{ config.brand.text }}
                                    </span>
                                </div>
                                <p v-if="config.brand.description" class="text-sm">
                                    {{ config.brand.description }}
                                </p>
                            </div>
                        </slot>
                    </div>

                    <!-- Section Columns -->
                    <slot name="sections">
                        <div v-for="section in config?.sections" :key="section.title" class="flex flex-col gap-3">
                            <h4 :class="['font-semibold text-sm', isDark ? 'text-white' : 'text-slate-900']">
                                {{ section.title }}
                            </h4>
                            <nav class="flex flex-col gap-2">
                                <a v-for="link in section.links" :key="link.label" :href="link.href || '#'"
                                    :target="link.external ? '_blank' : undefined"
                                    :rel="link.external ? 'noopener noreferrer' : undefined" :class="[
                                        'text-sm transition-colors duration-200',
                                        isDark
                                            ? 'hover:text-white'
                                            : 'hover:text-slate-900'
                                    ]" @click.prevent="handleLinkClick(link)">
                                    {{ link.label }}
                                </a>
                            </nav>
                        </div>
                    </slot>
                </div>

                <!-- Divider -->
                <div v-if="showDivider" :class="[
                    'w-full h-px mb-6',
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                ]" />

                <!-- Bottom Section -->
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <slot name="copyright">
                        <span class="text-sm">
                            {{ config?.copyright || '© All rights reserved.' }}
                            <template v-if="config?.showYear !== false"> {{ currentYear }}</template>
                        </span>
                    </slot>

                    <slot name="social">
                        <div v-if="config?.socialLinks?.length" class="flex items-center gap-3">
                            <a v-for="social in config.socialLinks" :key="social.icon" :href="social.href"
                                target="_blank" rel="noopener noreferrer" :title="social.label || social.icon" :class="[
                                    'p-2 rounded-lg transition-all duration-200',
                                    isDark
                                        ? 'hover:text-white hover:bg-slate-800'
                                        : 'hover:text-slate-900 hover:bg-slate-100'
                                ]">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path :d="socialIcons[social.icon]" />
                                </svg>
                            </a>
                        </div>
                    </slot>
                </div>
            </template>

            <!-- Centered Layout -->
            <template v-else-if="layout === 'centered'">
                <div class="flex flex-col items-center text-center gap-6">
                    <!-- Brand -->
                    <slot name="brand">
                        <div v-if="config?.brand" class="flex flex-col items-center gap-3">
                            <div class="flex items-center gap-2">
                                <img v-if="config.brand.logo" :src="config.brand.logo"
                                    :alt="config.brand.text || 'Logo'" class="h-10 w-auto" />
                                <span v-if="config.brand.text"
                                    :class="['font-bold text-xl', isDark ? 'text-white' : 'text-slate-900']">
                                    {{ config.brand.text }}
                                </span>
                            </div>
                            <p v-if="config.brand.description" class="text-sm max-w-md">
                                {{ config.brand.description }}
                            </p>
                        </div>
                    </slot>

                    <!-- Navigation -->
                    <slot name="navigation">
                        <nav v-if="config?.bottomLinks?.length" class="flex flex-wrap gap-6 justify-center">
                            <a v-for="link in config.bottomLinks" :key="link.label" :href="link.href || '#'"
                                :target="link.external ? '_blank' : undefined"
                                :rel="link.external ? 'noopener noreferrer' : undefined" :class="[
                                    'text-sm font-medium transition-colors duration-200',
                                    isDark
                                        ? 'hover:text-white'
                                        : 'hover:text-slate-900'
                                ]" @click.prevent="handleLinkClick(link)">
                                {{ link.label }}
                            </a>
                        </nav>
                    </slot>

                    <!-- Social Links -->
                    <slot name="social">
                        <div v-if="config?.socialLinks?.length" class="flex items-center gap-4">
                            <a v-for="social in config.socialLinks" :key="social.icon" :href="social.href"
                                target="_blank" rel="noopener noreferrer" :title="social.label || social.icon" :class="[
                                    'p-2.5 rounded-xl transition-all duration-200',
                                    isDark
                                        ? 'hover:text-white hover:bg-slate-800'
                                        : 'hover:text-slate-900 hover:bg-slate-100'
                                ]">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path :d="socialIcons[social.icon]" />
                                </svg>
                            </a>
                        </div>
                    </slot>

                    <!-- Divider -->
                    <div v-if="showDivider" :class="[
                        'w-24 h-px',
                        isDark ? 'bg-slate-700' : 'bg-slate-300'
                    ]" />

                    <!-- Copyright -->
                    <slot name="copyright">
                        <span class="text-sm">
                            {{ config?.copyright || '© All rights reserved.' }}
                            <template v-if="config?.showYear !== false"> {{ currentYear }}</template>
                        </span>
                    </slot>
                </div>
            </template>

        </div>
    </footer>
</template>

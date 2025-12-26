<script setup lang="ts">
import { ref, computed } from 'vue'

// Types
export interface NavMenuItem {
    label: string
    href?: string
    icon?: string
    badge?: string | number
    badgeVariant?: 'primary' | 'success' | 'warning' | 'danger'
    children?: NavMenuItem[]
    onClick?: () => void
}

export interface NavbarConfig {
    brand?: {
        text?: string
        logo?: string
        href?: string
    }
    items?: NavMenuItem[]
    rightItems?: NavMenuItem[]
    socialLinks?: Array<{
        icon: 'github' | 'twitter' | 'linkedin' | 'discord' | 'youtube'
        href: string
        label?: string
    }>
}

type NavbarVariant = 'default' | 'transparent' | 'bordered' | 'glass' | 'dark'
type NavbarSize = 'sm' | 'md' | 'lg'
type ContentAlign = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

const props = withDefaults(defineProps<{
    config?: NavbarConfig
    variant?: NavbarVariant
    size?: NavbarSize
    sticky?: boolean
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
    contentAlign?: ContentAlign
    showMobileMenu?: boolean
}>(), {
    variant: 'default',
    size: 'md',
    sticky: true,
    maxWidth: 'xl',
    contentAlign: 'between',
    showMobileMenu: true
})

// Emits
const emit = defineEmits<{
    itemClick: [item: NavMenuItem]
    brandClick: []
}>()

// State
const mobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)

// Computed Styles
const variantClasses = computed(() => {
    const variants: Record<NavbarVariant, string> = {
        default: 'bg-white border-b border-slate-200 text-slate-900',
        transparent: 'bg-transparent text-slate-900',
        bordered: 'bg-white border-b-2 border-slate-900 text-slate-900',
        glass: 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 text-slate-900',
        dark: 'bg-slate-900 border-b border-slate-800 text-white'
    }
    return variants[props.variant]
})

const sizeClasses = computed(() => {
    const sizes: Record<NavbarSize, string> = {
        sm: 'h-12',
        md: 'h-14',
        lg: 'h-16'
    }
    return sizes[props.size]
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
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly'
    }
    return aligns[props.contentAlign]
})

const isDark = computed(() => props.variant === 'dark')

// Methods
const toggleDropdown = (label: string) => {
    activeDropdown.value = activeDropdown.value === label ? null : label
}

const closeDropdowns = () => {
    activeDropdown.value = null
}

const handleItemClick = (item: NavMenuItem) => {
    if (item.onClick) {
        item.onClick()
    }
    emit('itemClick', item)
    closeDropdowns()
    mobileMenuOpen.value = false
}

const handleBrandClick = () => {
    emit('brandClick')
}

// Social Icons
const socialIcons: Record<string, string> = {
    github: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
    twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    discord: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z',
    youtube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
}

const getBadgeClass = (variant?: string) => {
    const variants: Record<string, string> = {
        primary: 'bg-indigo-500 text-white',
        success: 'bg-emerald-500 text-white',
        warning: 'bg-amber-500 text-white',
        danger: 'bg-red-500 text-white'
    }
    return variants[variant || 'primary']
}
</script>

<template>
    <header :class="[
        'w-full z-50 transition-all duration-300',
        sticky ? 'sticky top-0' : '',
        variantClasses
    ]" @mouseleave="closeDropdowns">
        <div :class="['mx-auto px-4 sm:px-6', maxWidthClasses]">
            <div :class="['flex items-center', sizeClasses, alignClasses]">
                <!-- Brand Slot or Config -->
                <div class="flex items-center gap-4">
                    <slot name="brand">
                        <a v-if="config?.brand" :href="config.brand.href || '/'"
                            class="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
                            @click.prevent="handleBrandClick">
                            <img v-if="config.brand.logo" :src="config.brand.logo" :alt="config.brand.text || 'Logo'"
                                class="h-8 w-auto" />
                            <span v-if="config.brand.text">{{ config.brand.text }}</span>
                        </a>
                    </slot>
                </div>

                <!-- Navigation Items (Desktop) -->
                <nav class="hidden md:flex items-center gap-1">
                    <slot name="navigation">
                        <template v-if="config?.items">
                            <div v-for="item in config.items" :key="item.label" class="relative">
                                <!-- Dropdown Item -->
                                <template v-if="item.children?.length">
                                    <button :class="[
                                        'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                                        isDark
                                            ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    ]" @click="toggleDropdown(item.label)">
                                        {{ item.label }}
                                        <!-- Badge -->
                                        <span v-if="item.badge"
                                            :class="['px-1.5 py-0.5 text-xs rounded-full ml-1', getBadgeClass(item.badgeVariant)]">
                                            {{ item.badge }}
                                        </span>
                                        <!-- Dropdown Arrow -->
                                        <svg :class="[
                                            'w-4 h-4 transition-transform duration-200',
                                            activeDropdown === item.label ? 'rotate-180' : ''
                                        ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <!-- Dropdown Menu -->
                                    <Transition enter-active-class="transition ease-out duration-200"
                                        enter-from-class="opacity-0 translate-y-1"
                                        enter-to-class="opacity-100 translate-y-0"
                                        leave-active-class="transition ease-in duration-150"
                                        leave-from-class="opacity-100 translate-y-0"
                                        leave-to-class="opacity-0 translate-y-1">
                                        <div v-if="activeDropdown === item.label" :class="[
                                            'absolute top-full left-0 mt-1 min-w-48 py-2 rounded-xl shadow-lg border z-50',
                                            isDark
                                                ? 'bg-slate-800 border-slate-700'
                                                : 'bg-white border-slate-200'
                                        ]">
                                            <a v-for="child in item.children" :key="child.label"
                                                :href="child.href || '#'" :class="[
                                                    'flex items-center gap-2 px-4 py-2 text-sm transition-colors duration-150',
                                                    isDark
                                                        ? 'text-slate-300 hover:text-white hover:bg-slate-700'
                                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                                ]" @click.prevent="handleItemClick(child)">
                                                {{ child.label }}
                                                <span v-if="child.badge"
                                                    :class="['px-1.5 py-0.5 text-xs rounded-full', getBadgeClass(child.badgeVariant)]">
                                                    {{ child.badge }}
                                                </span>
                                            </a>
                                        </div>
                                    </Transition>
                                </template>

                                <!-- Regular Link -->
                                <template v-else>
                                    <a :href="item.href || '#'" :class="[
                                        'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                                        isDark
                                            ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    ]" @click.prevent="handleItemClick(item)">
                                        {{ item.label }}
                                        <span v-if="item.badge"
                                            :class="['px-1.5 py-0.5 text-xs rounded-full', getBadgeClass(item.badgeVariant)]">
                                            {{ item.badge }}
                                        </span>
                                    </a>
                                </template>
                            </div>
                        </template>
                    </slot>
                </nav>

                <!-- Right Side -->
                <div class="flex items-center gap-2">
                    <slot name="right">
                        <!-- Right Items -->
                        <template v-if="config?.rightItems">
                            <a v-for="item in config.rightItems" :key="item.label" :href="item.href || '#'" :class="[
                                'hidden sm:flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                                isDark
                                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            ]" @click.prevent="handleItemClick(item)">
                                {{ item.label }}
                            </a>
                        </template>

                        <!-- Social Links -->
                        <template v-if="config?.socialLinks">
                            <a v-for="social in config.socialLinks" :key="social.icon" :href="social.href"
                                target="_blank" rel="noopener noreferrer" :title="social.label || social.icon" :class="[
                                    'p-2 rounded-lg transition-all duration-200',
                                    isDark
                                        ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                                ]">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path :d="socialIcons[social.icon]" />
                                </svg>
                            </a>
                        </template>
                    </slot>

                    <!-- Mobile Menu Button -->
                    <button v-if="showMobileMenu" :class="[
                        'md:hidden p-2 rounded-lg transition-all duration-200',
                        isDark
                            ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    ]" @click="mobileMenuOpen = !mobileMenuOpen">
                        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="mobileMenuOpen && showMobileMenu" :class="[
                'md:hidden border-t',
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            ]">
                <div :class="['mx-auto px-4 py-4', maxWidthClasses]">
                    <slot name="mobile-navigation">
                        <nav class="flex flex-col gap-1">
                            <template v-for="item in config?.items" :key="item.label">
                                <!-- Mobile Dropdown -->
                                <template v-if="item.children?.length">
                                    <button :class="[
                                        'flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                                        isDark
                                            ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    ]" @click="toggleDropdown(item.label)">
                                        <span class="flex items-center gap-2">
                                            {{ item.label }}
                                            <span v-if="item.badge"
                                                :class="['px-1.5 py-0.5 text-xs rounded-full', getBadgeClass(item.badgeVariant)]">
                                                {{ item.badge }}
                                            </span>
                                        </span>
                                        <svg :class="[
                                            'w-4 h-4 transition-transform duration-200',
                                            activeDropdown === item.label ? 'rotate-180' : ''
                                        ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <Transition enter-active-class="transition ease-out duration-200"
                                        enter-from-class="opacity-0" enter-to-class="opacity-100"
                                        leave-active-class="transition ease-in duration-150"
                                        leave-from-class="opacity-100" leave-to-class="opacity-0">
                                        <div v-if="activeDropdown === item.label" class="pl-4 flex flex-col gap-1">
                                            <a v-for="child in item.children" :key="child.label"
                                                :href="child.href || '#'" :class="[
                                                    'flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors duration-150',
                                                    isDark
                                                        ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                                                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                                ]" @click.prevent="handleItemClick(child)">
                                                {{ child.label }}
                                            </a>
                                        </div>
                                    </Transition>
                                </template>

                                <!-- Mobile Regular Link -->
                                <template v-else>
                                    <a :href="item.href || '#'" :class="[
                                        'flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                                        isDark
                                            ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    ]" @click.prevent="handleItemClick(item)">
                                        {{ item.label }}
                                        <span v-if="item.badge"
                                            :class="['px-1.5 py-0.5 text-xs rounded-full', getBadgeClass(item.badgeVariant)]">
                                            {{ item.badge }}
                                        </span>
                                    </a>
                                </template>
                            </template>
                        </nav>
                    </slot>
                </div>
            </div>
        </Transition>
    </header>
</template>

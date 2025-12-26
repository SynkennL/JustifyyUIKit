// JSubNavbar Types
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

export type NavbarVariant = 'default' | 'transparent' | 'bordered' | 'glass' | 'dark'
export type NavbarSize = 'sm' | 'md' | 'lg'
export type ContentAlign = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

// JSubFooter Types
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

export type FooterVariant = 'default' | 'minimal' | 'bordered' | 'dark' | 'glass'
export type FooterLayout = 'simple' | 'columns' | 'centered'
export type FooterContentAlign = 'start' | 'center' | 'end'

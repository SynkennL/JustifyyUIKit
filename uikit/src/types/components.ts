// Component Types for UI Kit

// Button
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft' | 'link'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Input
export type InputVariant = 'default' | 'filled' | 'underline' | 'ghost'

// Badge
export type BadgeVariant = 'solid' | 'outline' | 'soft' | 'dot' | 'gradient' | 'glass'

// Progress
export type ProgressVariant = 'default' | 'success' | 'warning' | 'error'

// Card
export type CardVariant = 'default' | 'bordered' | 'elevated' | 'glass'

export interface BaseComponentProps {
    disabled?: boolean
}

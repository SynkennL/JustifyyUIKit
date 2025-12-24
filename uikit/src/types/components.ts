// Component Types for UI Kit

// Button - 17 yaratıcı varyant
export type ButtonVariant =
    | 'solid'      // Dolgulu
    | 'outline'    // Kenarlıklı
    | 'ghost'      // Saydam
    | 'soft'       // Yumuşak arka plan
    | 'link'       // Link stili
    | 'gradient'   // Gradient arka plan
    | 'glow'       // Parıldayan efekt
    | 'glass'      // Cam efekti
    | 'neu'        // Neumorphism
    | 'primary'    // Ana aksiyon
    | 'secondary'  // İkincil aksiyon
    | 'danger'     // Tehlike
    | 'success'    // Başarı
    | 'warning'    // Uyarı
    | 'info'       // Bilgi
    | 'icon'       // Sadece ikon
    | '3d'         // 3D derinlik efekti

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Input - 4 varyant
export type InputVariant = 'default' | 'filled' | 'underline' | 'ghost'

// Badge - 6 varyant  
export type BadgeVariant = 'solid' | 'outline' | 'soft' | 'dot' | 'gradient' | 'glass'


// Progress - 4 varyant
export type ProgressVariant = 'default' | 'success' | 'warning' | 'error'

// Card - 4 varyant
export type CardVariant = 'default' | 'bordered' | 'elevated' | 'glass'

export interface BaseComponentProps {
    disabled?: boolean
}

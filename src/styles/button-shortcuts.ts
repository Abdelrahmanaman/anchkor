// import type { Shortcut } from 'unocss'

// type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'
// type ButtonSize = 'sm' | 'md' | 'lg'
// type IconSize = 'sm' | 'md' | 'lg'

// // Base button styles
// const baseButton = 'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer rounded-md'

// // Button sizes
// const buttonSizes = {
//   'btn-sm': 'gap-1.5 h-8 px-3 has-[>svg]:px-2.5',
//   'btn': 'gap-2 h-9 px-4 py-2 has-[>svg]:px-3',
//   'btn-lg': 'gap-2 h-10 px-6 has-[>svg]:px-4',
// }

// // Button variants
// const buttonVariants = {
//   'btn-primary': 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 active:bg-primary/90',
//   'btn-secondary': 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 active:bg-secondary/80',
//   'btn-outline': 'border bg-background shadow-xs dark:bg-input/30 dark:border-input hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:bg-accent/80',
//   'btn-ghost': 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:bg-accent/80',
//   'btn-link': 'text-primary underline-offset-4 hover:underline active:underline',
//   'btn-destructive': 'bg-destructive text-white shadow-xs focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:bg-destructive/90 dark:hover:bg-destructive/50 active:bg-destructive/80',
// }

// // Icon button sizes
// const iconButtonSizes = {
//   'btn-sm-icon': 'size-8',
//   'btn-icon': 'size-9',
//   'btn-lg-icon': 'size-10',
// }

// // Icon button variants
// const iconButtonVariants = {
//   'btn-icon-primary': 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 active:bg-primary/90',
//   'btn-icon-secondary': 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 active:bg-secondary/80',
//   'btn-icon-outline': 'border bg-background shadow-xs dark:bg-input/30 dark:border-input hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:bg-accent/80',
//   'btn-icon-ghost': 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:bg-accent/80',
//   'btn-icon-link': 'text-primary underline-offset-4 hover:underline active:underline',
//   'btn-icon-destructive': 'bg-destructive text-white shadow-xs focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:bg-destructive/90 dark:hover:bg-destructive/50 active:bg-destructive/80',
// }

// // Small icon button variants
// const smallIconButtonVariants = {
//   'btn-sm-icon-primary': 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 active:bg-primary/90',
//   'btn-sm-icon-secondary': 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 active:bg-secondary/80',
//   'btn-sm-icon-outline': 'border bg-background shadow-xs dark:bg-input/30 dark:border-input hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:bg-accent/80',
//   'btn-sm-icon-ghost': 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:bg-accent/80',
//   'btn-sm-icon-link': 'text-primary underline-offset-4 hover:underline active:underline',
//   'btn-sm-icon-destructive': 'bg-destructive text-white shadow-xs focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:bg-destructive/90 dark:hover:bg-destructive/50 active:bg-destructive/80',
// }

// // Large icon button variants
// const largeIconButtonVariants = {
//   'btn-lg-icon-primary': 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 active:bg-primary/90',
//   'btn-lg-icon-secondary': 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 active:bg-secondary/80',
//   'btn-lg-icon-outline': 'border bg-background shadow-xs dark:bg-input/30 dark:border-input hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:bg-accent/80',
//   'btn-lg-icon-ghost': 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:bg-accent/80',
//   'btn-lg-icon-link': 'text-primary underline-offset-4 hover:underline active:underline',
//   'btn-lg-icon-destructive': 'bg-destructive text-white shadow-xs focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:bg-destructive/90 dark:hover:bg-destructive/50 active:bg-destructive/80',
// }

// // Dynamic button variants using regex
// const dynamicButtonVariants: Shortcut[] = [
//   [
//     /^btn-(primary|secondary|outline|ghost|link|destructive)(?:-(sm|md|lg))?$/,
//     ([, variant, size = 'md']: [string, ButtonVariant, ButtonSize?]) => {
//       const sizes = {
//         sm: 'btn-sm',
//         md: 'btn',
//         lg: 'btn-lg',
//       } as const
//       return `${sizes[size as ButtonSize]} btn-${variant}`
//     },
//     { layer: 'components' },
//   ],
//   // Dynamic icon button variants using regex
//   [
//     /^btn-icon-(primary|secondary|outline|ghost|link|destructive)(?:-(sm|md|lg))?$/,
//     ([, variant, size = 'md']: [string, ButtonVariant, IconSize?]) => {
//       const sizes = {
//         sm: 'btn-sm-icon',
//         md: 'btn-icon',
//         lg: 'btn-lg-icon',
//       } as const
//       return `${sizes[size as IconSize]} btn-icon-${variant}`
//     },
//     { layer: 'components' },
//   ],
// ]

// export const buttonShortcuts: Shortcut[] = [
//   // Base button style
//   { btn: baseButton },
//   // Button sizes
//   buttonSizes,
//   // Button variants
//   buttonVariants,
//   // Icon button sizes
//   iconButtonSizes,
//   // Icon button variants
//   iconButtonVariants,
//   // Small icon button variants
//   smallIconButtonVariants,
//   // Large icon button variants
//   largeIconButtonVariants,
//   // Dynamic variants
//   ...dynamicButtonVariants,
// ]

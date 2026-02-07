/**
 * Atamai AI Design System - Design Tokens
 *
 * Core design tokens for colors, spacing, typography, and effects.
 * Exported as CSS custom properties and TypeScript constants.
 */

export const colors = {
  // Atamai AI Brand - Purple accent colors
  accent: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed', // Primary brand color
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    950: '#2e1065'
  },

  // Blue-tinted neutrals for dark-first design
  gray: {
    50: '#f8f8fc',
    100: '#ebebf0',
    200: '#dddde5',
    300: '#c4c4d0',
    400: '#9898aa',
    500: '#7a7a8e',
    600: '#606078',
    700: '#3a3a4e',
    800: '#1e1e2e',
    850: '#16161f',
    900: '#111118',
    950: '#0a0a0f'
  },

  // Gradient colors for CTAs
  gradient: {
    start: '#7c3aed', // Purple
    end: '#db2777' // Pink
  },

  // Semantic colors
  success: {
    light: '#34d399',
    dark: '#10b981'
  },
  warning: {
    light: '#fbbf24',
    dark: '#f59e0b'
  },
  error: {
    light: '#f87171',
    dark: '#ef4444'
  }
};

export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem' // 96px
};

export const typography = {
  fonts: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace'
  },
  sizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem' // 72px
  },
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  },
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75'
  }
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  glow: '0 0 20px rgba(124, 58, 237, 0.15)',
  glowLg: '0 0 40px rgba(124, 58, 237, 0.2)'
};

export const borderRadius = {
  sm: '0.25rem', // 4px
  base: '0.5rem', // 8px
  md: '0.75rem', // 12px
  lg: '1rem', // 16px
  xl: '1.5rem', // 24px
  '2xl': '2rem', // 32px
  '3xl': '3rem', // 48px
  full: '9999px'
};

export const glassmorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(255, 255, 255, 0.2)',
    blur: '12px'
  },
  dark: {
    background: 'rgba(22, 22, 31, 0.7)',
    border: 'rgba(255, 255, 255, 0.08)',
    blur: '12px'
  }
};

export const animation = {
  durations: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms'
  },
  easings: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

/**
 * Generate CSS custom properties from design tokens
 */
export function generateCSSVariables(): string {
  return `
    :root {
      /* Colors - Accent */
      --atamai-accent-50: ${colors.accent[50]};
      --atamai-accent-100: ${colors.accent[100]};
      --atamai-accent-200: ${colors.accent[200]};
      --atamai-accent-300: ${colors.accent[300]};
      --atamai-accent-400: ${colors.accent[400]};
      --atamai-accent-500: ${colors.accent[500]};
      --atamai-accent-600: ${colors.accent[600]};
      --atamai-accent-700: ${colors.accent[700]};
      --atamai-accent-800: ${colors.accent[800]};
      --atamai-accent-900: ${colors.accent[900]};
      --atamai-accent-950: ${colors.accent[950]};

      /* Colors - Gray */
      --atamai-gray-50: ${colors.gray[50]};
      --atamai-gray-100: ${colors.gray[100]};
      --atamai-gray-200: ${colors.gray[200]};
      --atamai-gray-300: ${colors.gray[300]};
      --atamai-gray-400: ${colors.gray[400]};
      --atamai-gray-500: ${colors.gray[500]};
      --atamai-gray-600: ${colors.gray[600]};
      --atamai-gray-700: ${colors.gray[700]};
      --atamai-gray-800: ${colors.gray[800]};
      --atamai-gray-850: ${colors.gray[850]};
      --atamai-gray-900: ${colors.gray[900]};
      --atamai-gray-950: ${colors.gray[950]};

      /* Gradient */
      --atamai-gradient-start: ${colors.gradient.start};
      --atamai-gradient-end: ${colors.gradient.end};

      /* Glass effects */
      --glass-bg-light: ${glassmorphism.light.background};
      --glass-border-light: ${glassmorphism.light.border};
      --glass-blur: ${glassmorphism.light.blur};
    }

    .dark {
      --glass-bg-dark: ${glassmorphism.dark.background};
      --glass-border-dark: ${glassmorphism.dark.border};
    }
  `;
}

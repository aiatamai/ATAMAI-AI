/**
 * Section Component - Atamai AI Design System
 *
 * A full-width section wrapper with vertical spacing.
 * Provides consistent spacing between major page sections.
 */

export interface SectionProps {
  /** Section content */
  children?: any;
  /** Vertical padding size */
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Background variant */
  background?: 'transparent' | 'light' | 'dark' | 'accent';
  /** Additional CSS classes */
  className?: string;
}

export default function Section(props: SectionProps) {
  const spacing = props.spacing || 'md';
  const background = props.background || 'transparent';

  // Base styles
  const baseClasses = 'w-full';

  // Spacing styles
  const spacingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32'
  };

  // Background styles
  const backgroundClasses = {
    transparent: 'bg-transparent',
    light: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 dark:bg-black',
    accent: 'bg-gradient-to-r from-accent-600 to-pink-600'
  };

  const classes = `${baseClasses} ${spacingClasses[spacing]} ${backgroundClasses[background]} ${props.className || ''}`;

  return (
    <section class={classes}>
      {props.children}
    </section>
  );
}

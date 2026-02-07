/**
 * Container Component - Atamai AI Design System
 *
 * A max-width wrapper component with responsive padding.
 * Centers content and provides consistent spacing across the site.
 */

export interface ContainerProps {
  /** Container content */
  children?: any;
  /** Max width variant */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

export default function Container(props: ContainerProps) {
  const maxWidth = props.maxWidth || 'xl';
  const padding = props.padding || 'md';

  // Base styles
  const baseClasses = 'w-full mx-auto';

  // Max width styles
  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
  };

  // Padding styles
  const paddingClasses = {
    none: '',
    sm: 'px-4',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  };

  const classes = `${baseClasses} ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${props.className || ''}`;

  return (
    <div class={classes}>
      {props.children}
    </div>
  );
}

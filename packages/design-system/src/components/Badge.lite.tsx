/**
 * Badge Component - Atamai AI Design System
 *
 * A small status label with semantic color variants.
 * Perfect for tags, status indicators, and labels.
 */

export interface BadgeProps {
  /** Badge content */
  children?: any;
  /** Semantic variant */
  variant?: 'info' | 'success' | 'warning' | 'error' | 'accent';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

export default function Badge(props: BadgeProps) {
  const variant = props.variant || 'info';
  const size = props.size || 'md';

  // Base styles
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';

  // Size styles
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  // Variant styles
  const variantClasses = {
    info: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    success: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    error: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    accent: 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-400'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${props.className || ''}`;

  return (
    <span class={classes}>
      {props.children}
    </span>
  );
}

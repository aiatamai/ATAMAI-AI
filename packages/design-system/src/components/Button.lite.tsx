/**
 * Button Component - Atamai AI Design System
 *
 * A versatile button component with multiple variants and sizes.
 * Supports primary, secondary, ghost, and gradient styles.
 */

export interface ButtonProps {
  /** Button content */
  children?: any;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
}

export default function Button(props: ButtonProps) {
  const variant = props.variant || 'primary';
  const size = props.size || 'md';
  const type = props.type || 'button';

  // Base styles
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Size styles
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  // Variant styles
  const variantClasses = {
    primary: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-500 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white focus:ring-gray-400',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-800 dark:text-gray-300 focus:ring-gray-400',
    gradient: 'bg-gradient-to-r from-accent-600 to-pink-600 hover:from-accent-700 hover:to-pink-700 text-white focus:ring-accent-500 shadow-glow hover:shadow-glow-lg'
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${props.className || ''}`;

  return (
    <button
      type={type}
      class={classes}
      disabled={props.disabled}
      onClick={() => props.onClick?.()}
    >
      {props.children}
    </button>
  );
}

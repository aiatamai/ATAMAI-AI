/**
 * Card Component - Atamai AI Design System
 *
 * A container component with optional glassmorphism effect.
 * Perfect for content grouping with subtle borders and shadows.
 */

export interface CardProps {
  /** Card content */
  children?: any;
  /** Enable glassmorphism effect */
  glass?: boolean;
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
  /** Click handler for interactive cards */
  onClick?: () => void;
  /** Hover effect */
  hover?: boolean;
}

export default function Card(props: CardProps) {
  const padding = props.padding || 'md';
  const glass = props.glass || false;
  const hover = props.hover || false;

  // Base styles
  const baseClasses = 'rounded-2xl transition-all duration-200';

  // Padding styles
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  // Glass vs solid styles
  const styleClasses = glass
    ? 'backdrop-blur-xl bg-white/70 dark:bg-gray-850/70 border border-white/20 dark:border-white/8'
    : 'bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 shadow-sm';

  // Hover styles
  const hoverClasses = hover
    ? 'hover:shadow-lg hover:shadow-glow hover:scale-[1.02] cursor-pointer'
    : '';

  const classes = `${baseClasses} ${paddingClasses[padding]} ${styleClasses} ${hoverClasses} ${props.className || ''}`;

  return (
    <div
      class={classes}
      onClick={() => props.onClick?.()}
    >
      {props.children}
    </div>
  );
}

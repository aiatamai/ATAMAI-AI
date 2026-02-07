/**
 * FeatureGrid Component - Atamai AI Design System
 *
 * A responsive grid layout for feature cards.
 * Automatically adjusts columns based on screen size (1/2/3 cols).
 */

export interface FeatureGridProps {
  /** Grid content (FeatureCard components) */
  children?: any;
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4;
  /** Additional CSS classes */
  className?: string;
}

export default function FeatureGrid(props: FeatureGridProps) {
  const columns = props.columns || 3;

  // Base grid styles
  const baseClasses = 'grid gap-6 md:gap-8';

  // Column styles based on prop
  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gridClasses = `${baseClasses} ${columnClasses[columns]} ${props.className || ''}`;

  return (
    <div class={gridClasses}>
      {props.children}
    </div>
  );
}

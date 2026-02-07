/**
 * FeatureCard Component - Atamai AI Design System
 *
 * A feature card with icon, title, and description.
 * Includes hover effects with glow and scale animation.
 */

export interface FeatureCardProps {
  /** Icon (emoji or SVG string) */
  icon: string;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for interactive cards */
  onClick?: () => void;
}

export default function FeatureCard(props: FeatureCardProps) {
  // Container styles
  const containerClasses = 'group relative p-6 rounded-2xl bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-glow';

  // Icon styles
  const iconClasses = 'text-5xl mb-4 transition-transform duration-300 group-hover:scale-110';

  // Title styles
  const titleClasses = 'text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2';

  // Description styles
  const descriptionClasses = 'text-gray-600 dark:text-gray-400 leading-relaxed';

  // Glow effect on hover
  const glowClasses = 'absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-600/0 to-pink-600/0 group-hover:from-accent-600/5 group-hover:to-pink-600/5 transition-all duration-300 pointer-events-none';

  return (
    <div
      class={`${containerClasses} ${props.onClick ? 'cursor-pointer' : ''} ${props.className || ''}`}
      onClick={() => props.onClick?.()}
    >
      {/* Glow effect */}
      <div class={glowClasses} />

      {/* Content */}
      <div class="relative z-10">
        {/* Icon */}
        <div class={iconClasses}>
          {props.icon}
        </div>

        {/* Title */}
        <h3 class={titleClasses}>
          {props.title}
        </h3>

        {/* Description */}
        <p class={descriptionClasses}>
          {props.description}
        </p>
      </div>
    </div>
  );
}

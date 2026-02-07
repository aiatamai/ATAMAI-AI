/**
 * Hero Component - Atamai AI Design System
 *
 * A full-width hero section with heading, subheading, and CTAs.
 * Features gradient text effects and responsive layout.
 */

export interface HeroButton {
  /** Button label */
  label: string;
  /** Click handler */
  onClick: () => void;
}

export interface HeroProps {
  /** Main heading */
  heading: string;
  /** Subheading text */
  subheading?: string;
  /** Primary CTA button */
  primaryCta?: HeroButton;
  /** Secondary CTA button */
  secondaryCta?: HeroButton;
  /** Additional CSS classes */
  className?: string;
}

export default function Hero(props: HeroProps) {
  // Container styles
  const containerClasses = 'relative w-full py-20 md:py-32 px-4 overflow-hidden';

  // Content wrapper
  const contentClasses = 'max-w-4xl mx-auto text-center flex flex-col items-center gap-8';

  // Heading styles with gradient
  const headingClasses = 'text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight';
  const gradientTextClasses = 'bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent';

  // Subheading styles
  const subheadingClasses = 'text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl';

  // CTA container
  const ctaContainerClasses = 'flex flex-col sm:flex-row gap-4 items-center justify-center';

  // Button base styles
  const buttonBaseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Primary button styles
  const primaryButtonClasses = `${buttonBaseClasses} bg-gradient-to-r from-accent-600 to-pink-600 hover:from-accent-700 hover:to-pink-700 text-white shadow-glow hover:shadow-glow-lg focus:ring-accent-500`;

  // Secondary button styles
  const secondaryButtonClasses = `${buttonBaseClasses} bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-700 focus:ring-gray-400`;

  return (
    <section class={`${containerClasses} ${props.className || ''}`}>
      {/* Background decoration - subtle dot pattern */}
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />

      <div class={contentClasses}>
        {/* Heading */}
        <h1 class={headingClasses}>
          <span class={gradientTextClasses}>
            {props.heading}
          </span>
        </h1>

        {/* Subheading */}
        {props.subheading && (
          <p class={subheadingClasses}>
            {props.subheading}
          </p>
        )}

        {/* CTAs */}
        {(props.primaryCta || props.secondaryCta) && (
          <div class={ctaContainerClasses}>
            {props.primaryCta && (
              <button
                type="button"
                class={primaryButtonClasses}
                onClick={() => props.primaryCta?.onClick()}
              >
                {props.primaryCta.label}
              </button>
            )}
            {props.secondaryCta && (
              <button
                type="button"
                class={secondaryButtonClasses}
                onClick={() => props.secondaryCta?.onClick()}
              >
                {props.secondaryCta.label}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

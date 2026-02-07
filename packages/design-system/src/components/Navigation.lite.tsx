/**
 * Navigation Component - Atamai AI Design System
 *
 * A fixed header navigation bar with glassmorphism effect.
 * Includes logo, optional nav links, and CTA buttons.
 */

export interface NavLink {
  /** Link label */
  label: string;
  /** Click handler */
  onClick: () => void;
}

export interface NavigationProps {
  /** Brand name/logo text */
  brand: string;
  /** Optional logo image URL */
  logoUrl?: string;
  /** Navigation links */
  links?: NavLink[];
  /** Primary CTA button */
  primaryCta?: NavLink;
  /** Secondary CTA button */
  secondaryCta?: NavLink;
  /** Additional CSS classes */
  className?: string;
}

export default function Navigation(props: NavigationProps) {
  // Container styles - fixed with glassmorphism
  const containerClasses = 'fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800';

  // Content wrapper
  const contentClasses = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between';

  // Brand/logo section
  const brandClasses = 'flex items-center gap-3';
  const logoTextClasses = 'text-xl font-bold text-gray-900 dark:text-white';

  // Links container
  const linksClasses = 'hidden md:flex items-center gap-6';
  const linkClasses = 'text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200';

  // CTA container
  const ctaClasses = 'flex items-center gap-3';

  // Button styles
  const buttonBaseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const ghostButtonClasses = `${buttonBaseClasses} text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`;
  const primaryButtonClasses = `${buttonBaseClasses} bg-gradient-to-r from-accent-600 to-pink-600 hover:from-accent-700 hover:to-pink-700 text-white shadow-sm hover:shadow-md focus:ring-accent-500`;

  return (
    <nav class={`${containerClasses} ${props.className || ''}`}>
      <div class={contentClasses}>
        {/* Brand/Logo */}
        <div class={brandClasses}>
          {props.logoUrl && (
            <img
              src={props.logoUrl}
              alt={props.brand}
              class="h-8 w-auto"
            />
          )}
          <span class={logoTextClasses}>
            {props.brand}
          </span>
        </div>

        {/* Navigation Links */}
        {props.links && props.links.length > 0 && (
          <div class={linksClasses}>
            {props.links.map((link) => (
              <button
                key={link.label}
                type="button"
                class={linkClasses}
                onClick={() => link.onClick()}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div class={ctaClasses}>
          {props.secondaryCta && (
            <button
              type="button"
              class={ghostButtonClasses}
              onClick={() => props.secondaryCta?.onClick()}
            >
              {props.secondaryCta.label}
            </button>
          )}
          {props.primaryCta && (
            <button
              type="button"
              class={primaryButtonClasses}
              onClick={() => props.primaryCta?.onClick()}
            >
              {props.primaryCta.label}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

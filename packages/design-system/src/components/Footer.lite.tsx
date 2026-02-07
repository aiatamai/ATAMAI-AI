/**
 * Footer Component - Atamai AI Design System
 *
 * A footer section with links, copyright, and optional social links.
 * Dark background styling optimized for Atamai brand.
 */

export interface FooterLink {
  /** Link label */
  label: string;
  /** Click handler */
  onClick: () => void;
}

export interface FooterSection {
  /** Section title */
  title: string;
  /** Section links */
  links: FooterLink[];
}

export interface FooterProps {
  /** Brand name */
  brand: string;
  /** Copyright year */
  year?: string;
  /** Footer sections with links */
  sections?: FooterSection[];
  /** Social media links */
  socialLinks?: FooterLink[];
  /** Additional CSS classes */
  className?: string;
}

export default function Footer(props: FooterProps) {
  const year = props.year || new Date().getFullYear().toString();

  // Container styles
  const containerClasses = 'w-full bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-900';

  // Content wrapper
  const contentClasses = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12';

  // Grid layout for sections
  const gridClasses = 'grid grid-cols-2 md:grid-cols-4 gap-8 mb-8';

  // Section styles
  const sectionTitleClasses = 'text-sm font-semibold text-white mb-4';
  const linkClasses = 'text-sm text-gray-400 hover:text-white transition-colors duration-200 block mb-2';

  // Bottom section
  const bottomClasses = 'pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4';
  const copyrightClasses = 'text-sm text-gray-400';
  const socialContainerClasses = 'flex items-center gap-4';

  return (
    <footer class={`${containerClasses} ${props.className || ''}`}>
      <div class={contentClasses}>
        {/* Links sections */}
        {props.sections && props.sections.length > 0 && (
          <div class={gridClasses}>
            {props.sections.map((section) => (
              <div key={section.title}>
                <h3 class={sectionTitleClasses}>
                  {section.title}
                </h3>
                <nav>
                  {section.links.map((link) => (
                    <button
                      key={link.label}
                      type="button"
                      class={linkClasses}
                      onClick={() => link.onClick()}
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        )}

        {/* Bottom section - Copyright & Social */}
        <div class={bottomClasses}>
          <p class={copyrightClasses}>
            © {year} {props.brand}. All rights reserved.
          </p>

          {props.socialLinks && props.socialLinks.length > 0 && (
            <div class={socialContainerClasses}>
              {props.socialLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  class="text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => link.onClick()}
                  aria-label={link.label}
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

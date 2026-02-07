/**
 * Modal Component - Atamai AI Design System
 *
 * A dialog modal with backdrop, glassmorphism, and animations.
 * Includes close button and customizable content.
 */

import { useStore } from '@builder.io/mitosis';

export interface ModalProps {
  /** Whether modal is open */
  open?: boolean;
  /** Modal title */
  title?: string;
  /** Modal content */
  children?: any;
  /** Close handler */
  onClose?: () => void;
  /** Additional CSS classes for modal content */
  className?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Modal(props: ModalProps) {
  const size = props.size || 'md';

  // Backdrop styles
  const backdropClasses = 'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4';

  // Modal size styles
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  // Modal content styles
  const modalClasses = `w-full ${sizeClasses[size]} bg-white dark:bg-gray-850 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden ${props.className || ''}`;

  // Header styles
  const headerClasses = 'flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800';

  // Close button styles
  const closeButtonClasses = 'p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200';

  if (!props.open) {
    return null;
  }

  return (
    <div
      class={backdropClasses}
      onClick={() => props.onClose?.()}
    >
      <div
        class={modalClasses}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div class={headerClasses}>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {props.title}
          </h2>
          <button
            type="button"
            class={closeButtonClasses}
            onClick={() => props.onClose?.()}
            aria-label="Close modal"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div class="px-6 py-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

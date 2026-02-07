/**
 * Input Component - Atamai AI Design System
 *
 * A text input component with label, error states, and focus effects.
 * Features purple accent glow on focus.
 */

import { useStore } from '@builder.io/mitosis';

export interface InputProps {
  /** Input label */
  label?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  /** Error message */
  error?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is required */
  required?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Additional CSS classes */
  className?: string;
}

export default function Input(props: InputProps) {
  const state = useStore({
    value: props.value || '',
    handleChange(event: any) {
      state.value = event.target.value;
      props.onChange?.(event.target.value);
    }
  });

  const type = props.type || 'text';
  const hasError = !!props.error;

  // Base input styles
  const baseClasses = 'w-full px-4 py-2 rounded-lg border transition-all duration-200 outline-none';

  // State-dependent styles
  const stateClasses = hasError
    ? 'border-error-light dark:border-error-dark focus:ring-2 focus:ring-error-light dark:focus:ring-error-dark'
    : 'border-gray-300 dark:border-gray-700 focus:border-accent-600 focus:ring-2 focus:ring-accent-500/20';

  // Background and text
  const colorClasses = 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600';

  // Disabled styles
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : '';

  const inputClasses = `${baseClasses} ${stateClasses} ${colorClasses} ${disabledClasses}`;

  return (
    <div class={`flex flex-col gap-1.5 ${props.className || ''}`}>
      {props.label && (
        <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
          {props.label}
          {props.required && <span class="text-error-light dark:text-error-dark ml-1">*</span>}
        </label>
      )}

      <input
        type={type}
        class={inputClasses}
        placeholder={props.placeholder}
        value={state.value}
        disabled={props.disabled}
        required={props.required}
        onInput={(event) => state.handleChange(event)}
      />

      {hasError && (
        <span class="text-sm text-error-light dark:text-error-dark">
          {props.error}
        </span>
      )}
    </div>
  );
}

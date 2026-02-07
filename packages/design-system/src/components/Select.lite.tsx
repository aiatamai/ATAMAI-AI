/**
 * Select Component - Atamai AI Design System
 *
 * A dropdown select component with label, options, and error states.
 * Styled to match the Input component aesthetic.
 */

import { useStore } from '@builder.io/mitosis';

export interface SelectOption {
  /** Option value */
  value: string;
  /** Option display label */
  label: string;
}

export interface SelectProps {
  /** Select label */
  label?: string;
  /** Array of options */
  options: SelectOption[];
  /** Selected value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Error message */
  error?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Whether the select is required */
  required?: boolean;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Additional CSS classes */
  className?: string;
}

export default function Select(props: SelectProps) {
  const state = useStore({
    value: props.value || '',
    handleChange(event: any) {
      state.value = event.target.value;
      props.onChange?.(event.target.value);
    }
  });

  const hasError = !!props.error;

  // Base select styles
  const baseClasses = 'w-full px-4 py-2 rounded-lg border transition-all duration-200 outline-none appearance-none bg-no-repeat';

  // State-dependent styles
  const stateClasses = hasError
    ? 'border-error-light dark:border-error-dark focus:ring-2 focus:ring-error-light dark:focus:ring-error-dark'
    : 'border-gray-300 dark:border-gray-700 focus:border-accent-600 focus:ring-2 focus:ring-accent-500/20';

  // Background and text
  const colorClasses = 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100';

  // Disabled styles
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  // Dropdown arrow styling
  const arrowStyles = `background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e"); background-position: right 0.5rem center; background-size: 1.5em 1.5em; padding-right: 2.5rem;`;

  const selectClasses = `${baseClasses} ${stateClasses} ${colorClasses} ${disabledClasses}`;

  return (
    <div class={`flex flex-col gap-1.5 ${props.className || ''}`}>
      {props.label && (
        <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
          {props.label}
          {props.required && <span class="text-error-light dark:text-error-dark ml-1">*</span>}
        </label>
      )}

      <select
        class={selectClasses}
        style={arrowStyles}
        value={state.value}
        disabled={props.disabled}
        required={props.required}
        onChange={(event) => state.handleChange(event)}
      >
        {props.placeholder && (
          <option value="" disabled>
            {props.placeholder}
          </option>
        )}
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {hasError && (
        <span class="text-sm text-error-light dark:text-error-dark">
          {props.error}
        </span>
      )}
    </div>
  );
}

/**
 * Checkbox Component - Atamai AI Design System
 *
 * A styled checkbox with label and purple accent when checked.
 * Includes focus states and disabled support.
 */

import { useStore } from '@builder.io/mitosis';

export interface CheckboxProps {
  /** Checkbox label */
  label?: string;
  /** Whether checkbox is checked */
  checked?: boolean;
  /** Whether checkbox is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Additional CSS classes */
  className?: string;
}

export default function Checkbox(props: CheckboxProps) {
  const state = useStore({
    checked: props.checked || false,
    handleChange(event: any) {
      state.checked = event.target.checked;
      props.onChange?.(event.target.checked);
    }
  });

  // Container styles
  const containerClasses = 'flex items-center gap-2';

  // Checkbox styles
  const baseClasses = 'w-5 h-5 rounded border-2 transition-all duration-200 cursor-pointer';
  const stateClasses = state.checked
    ? 'bg-accent-600 border-accent-600 focus:ring-2 focus:ring-accent-500/20'
    : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-400/20';
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : '';

  const checkboxClasses = `${baseClasses} ${stateClasses} ${disabledClasses}`;

  // Label styles
  const labelClasses = `text-sm text-gray-700 dark:text-gray-300 ${props.disabled ? 'opacity-50' : 'cursor-pointer'}`;

  return (
    <div class={`${containerClasses} ${props.className || ''}`}>
      <input
        type="checkbox"
        class={checkboxClasses}
        checked={state.checked}
        disabled={props.disabled}
        onChange={(event) => state.handleChange(event)}
      />
      {props.label && (
        <label class={labelClasses}>
          {props.label}
        </label>
      )}
    </div>
  );
}

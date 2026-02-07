/**
 * GradientText Component - Atamai AI Design System
 *
 * Text with gradient color effect using background-clip.
 * Perfect for headings and emphasis with Atamai purple-to-pink gradient.
 */

export interface GradientTextProps {
  /** Text content */
  children?: any;
  /** Gradient direction */
  direction?: 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-l';
  /** Gradient variant */
  variant?: 'accent' | 'primary' | 'custom';
  /** Custom gradient (for variant='custom') */
  customGradient?: string;
  /** Text element type */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  /** Additional CSS classes */
  className?: string;
}

export default function GradientText(props: GradientTextProps) {
  const direction = props.direction || 'to-r';
  const variant = props.variant || 'accent';
  const as = props.as || 'span';

  // Base gradient text styles
  const baseClasses = 'bg-clip-text text-transparent';

  // Gradient variant styles
  const variantClasses = {
    accent: `bg-gradient-${direction} from-accent-600 to-pink-600`,
    primary: `bg-gradient-${direction} from-accent-600 to-accent-400`,
    custom: ''
  };

  const classes = `${baseClasses} ${variant === 'custom' ? '' : variantClasses[variant]} ${props.className || ''}`;

  // Custom gradient styles
  const customStyle = variant === 'custom' && props.customGradient
    ? `background-image: ${props.customGradient};`
    : '';

  // Render based on 'as' prop
  if (as === 'h1') {
    return (
      <h1 class={classes} style={customStyle}>
        {props.children}
      </h1>
    );
  }

  if (as === 'h2') {
    return (
      <h2 class={classes} style={customStyle}>
        {props.children}
      </h2>
    );
  }

  if (as === 'h3') {
    return (
      <h3 class={classes} style={customStyle}>
        {props.children}
      </h3>
    );
  }

  if (as === 'h4') {
    return (
      <h4 class={classes} style={customStyle}>
        {props.children}
      </h4>
    );
  }

  if (as === 'h5') {
    return (
      <h5 class={classes} style={customStyle}>
        {props.children}
      </h5>
    );
  }

  if (as === 'h6') {
    return (
      <h6 class={classes} style={customStyle}>
        {props.children}
      </h6>
    );
  }

  if (as === 'p') {
    return (
      <p class={classes} style={customStyle}>
        {props.children}
      </p>
    );
  }

  // Default to span
  return (
    <span class={classes} style={customStyle}>
      {props.children}
    </span>
  );
}

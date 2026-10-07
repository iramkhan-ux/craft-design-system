import type { ComponentPropsWithRef } from 'react';
import './Spinner.css';

export const spinnerSizes = ['medium', 'large', 'xlarge'] as const;
export const spinnerColors = ['neutral', 'primary', 'white', 'onNeutral'] as const;
export const spinnerLabelPositions = ['right', 'bottom'] as const;

export type SpinnerSize = (typeof spinnerSizes)[number];
export type SpinnerColor = (typeof spinnerColors)[number];
export type SpinnerLabelPosition = (typeof spinnerLabelPositions)[number];

export type SpinnerProps = Omit<ComponentPropsWithRef<'div'>, 'color' | 'children'> & {
  /** 16px, 20px or 24px. These are the medium, large and xlarge icon sizes. Defaults to medium. */
  size?: SpinnerSize;
  /** Defaults to neutral. Use white on a dark or colored surface, and onNeutral on a filled neutral surface. */
  color?: SpinnerColor;
  /** Optional text next to the spinner. */
  label?: string;
  /** Where the label sits. Defaults to right. */
  labelPosition?: SpinnerLabelPosition;
  /** What screen readers announce. Defaults to the label, then to "Loading". */
  'aria-label'?: string;
};

const sizeVars: Record<SpinnerSize, string> = {
  medium: '--craft-icon-size-medium',
  large: '--craft-icon-size-large',
  xlarge: '--craft-icon-size-xlarge',
};

const colorVars: Record<SpinnerColor, string> = {
  neutral: '--craft-color-interactive-icon-gray-muted',
  primary: '--craft-color-interactive-icon-primary-subtle',
  white: '--craft-color-interactive-icon-static-white-subtle',
  onNeutral: '--craft-color-interactive-icon-on-neutral-normal',
};

/** A loading indicator. Static ring plus two arcs, turned by CSS. Drawing is Blade's, on a 24 by 24 grid. */
export function Spinner({
  size = 'medium',
  color = 'neutral',
  label,
  labelPosition = 'right',
  'aria-label': ariaLabel,
  style,
  ...rest
}: SpinnerProps) {
  const text = label && label.trim().length > 0 ? label : undefined;
  return (
    <div
      role="progressbar"
      aria-label={ariaLabel ?? text ?? 'Loading'}
      {...rest}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: labelPosition === 'right' ? 'row' : 'column',
        ...style,
      }}
    >
      <span className="craft-spinner-turn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          style={{ width: `var(${sizeVars[size]})`, height: `var(${sizeVars[size]})`, color: `var(${colorVars[color]})` }}
        >
          <path
            fillOpacity={0.2}
            fill="currentColor"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
          />
          <path
            fill="currentColor"
            d="M24 12C24 13.8937 23.5518 15.7606 22.6921 17.4479C21.8324 19.1352 20.5855 20.5951 19.0534 21.7082C17.5214 22.8213 15.7476 23.556 13.8772 23.8523C12.0068 24.1485 10.0928 23.9979 8.29181 23.4127L9.21886 20.5595C10.5696 20.9984 12.0051 21.1114 13.4079 20.8892C14.8107 20.667 16.141 20.116 17.2901 19.2812C18.4391 18.4463 19.3743 17.3514 20.0191 16.0859C20.6639 14.8204 21 13.4203 21 12H24Z"
          />
          <path
            fill="currentColor"
            d="M-1.33514e-05 12C-1.33514e-05 10.1063 0.448176 8.23944 1.30791 6.55211C2.16764 4.86479 3.41451 3.4049 4.94656 2.2918C6.47862 1.17869 8.25236 0.443983 10.1228 0.147739C11.9932 -0.148504 13.9072 0.00212896 15.7082 0.587322L14.7811 3.44049C13.4304 3.0016 11.9949 2.88862 10.5921 3.11081C9.18927 3.33299 7.85896 3.88402 6.70992 4.71885C5.56088 5.55367 4.62573 6.64859 3.98093 7.91409C3.33613 9.17958 2.99999 10.5797 2.99999 12H-1.33514e-05Z"
          />
        </svg>
      </span>
      {text ? (
        <span
          className="craft-text-body-small-regular"
          style={{
            color: 'var(--craft-color-surface-text-gray-muted)',
            ...(labelPosition === 'right' ? { marginLeft: 'var(--craft-spacing-3)' } : { marginTop: 'var(--craft-spacing-3)' }),
          }}
        >
          {text}
        </span>
      ) : null}
    </div>
  );
}
Spinner.displayName = 'Spinner';

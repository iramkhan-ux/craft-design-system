import type { ReactNode, SVGProps } from 'react';
import { iconColorVars, iconSizeVars } from './generated/meta';
import type { IconColor, IconSize } from './generated/meta';

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'color' | 'width' | 'height' | 'viewBox' | 'children'> & {
  /** One of the six icon sizes. Defaults to medium (16px). */
  size?: IconSize;
  /** An icon color token, or currentColor to inherit the surrounding text color. Defaults to surface.icon.gray.normal. */
  color?: IconColor;
  /** Gives the icon a meaning for screen readers. Without it the icon is treated as decoration and hidden from them. */
  'aria-label'?: string;
};
export type IconComponent = ((props: IconProps) => React.JSX.Element) & { displayName?: string };

/** Wraps a drawing in the shared icon frame: 24 by 24 drawing, sized and colored from tokens. */
export function createIcon(displayName: string, drawing: ReactNode): IconComponent {
  const Icon: IconComponent = ({ size = 'medium', color = 'surface.icon.gray.normal', style, 'aria-label': label, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
      {...rest}
      style={{
        width: `var(${iconSizeVars[size]})`,
        height: `var(${iconSizeVars[size]})`,
        flexShrink: 0,
        ...(color === 'currentColor' ? {} : { color: `var(${iconColorVars[color]})` }),
        ...style,
      }}
    >
      {drawing}
    </svg>
  );
  Icon.displayName = displayName;
  return Icon;
}

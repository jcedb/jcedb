import { CSSProperties, ReactNode } from 'react';

export interface IBaseProps {
  children?: ReactNode;
  style?: CSSProperties;
  id?: string;
  className?: string;
  isVisible?: boolean;
  isDisabled?: boolean;

  onClick?: (...args: any) => void | undefined;
}

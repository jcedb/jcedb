import { CSSProperties, ReactNode } from 'react';

export interface IBaseProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;

  onClick?: (...args: any) => void | undefined;
}

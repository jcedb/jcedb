import { CSSProperties, ReactNode } from 'react';

export interface IBaseProps {
  children?: ReactNode;
  style?: CSSProperties;
  id?: string;
  className?: string;

  onClick?: (...args: any) => void | undefined;
}

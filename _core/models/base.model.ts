import { CSSProperties, ReactNode } from 'react';

export interface IBaseProps {
  children?: ReactNode;
  style?: CSSProperties;

  onClick?: (...args: any) => void | undefined;
}

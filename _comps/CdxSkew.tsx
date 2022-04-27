import React from 'react';
import styles from '../styles/_comps/skew.module.scss';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {
  color?: string;
}

function CdxSkew({ id, color }: Props) {
  return (
    <div
      id={id}
      style={{ backgroundColor: color }}
      className={'js-skew ' + styles['cdx-skew']}
    ></div>
  );
}

export default CdxSkew;

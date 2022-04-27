import React from 'react';
import styles from '../styles/_comps/button.module.scss';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {}

function CdxButton({ children, style, className = '', onClick }: Props) {
  return (
    <button
      style={style}
      className={styles['cdx-button'] + ' ' + styles[className]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CdxButton;

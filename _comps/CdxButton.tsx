import React from 'react';
import styles from '../styles/_comps/button.module.scss';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
}

function CdxButton({
  children,
  style,
  className = '',
  type = 'button',
  isDisabled,
  onClick
}: Props) {
  return (
    <button
      type={type}
      style={style}
      className={`${styles['cdx-button']} ${styles[className]} ${
        styles[isDisabled ? 'is-disabled' : '']
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CdxButton;

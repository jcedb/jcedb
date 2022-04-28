import React from 'react';
import styles from '../styles/_comps/input.module.scss';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {
  placeholder?: string;
}

function CdxInput({ placeholder }: Props) {
  return (
    <div className={styles['cdx-input']}>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default CdxInput;

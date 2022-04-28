import React from 'react';
import styles from '../styles/_comps/textarea.module.scss';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {
  placeholder?: string;
}

function CdxTextarea({ placeholder }: Props) {
  return (
    <div className={styles['cdx-textarea']}>
      <textarea placeholder={placeholder}></textarea>
    </div>
  );
}

export default CdxTextarea;

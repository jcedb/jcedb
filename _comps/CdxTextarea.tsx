import React from 'react';
import styles from '../styles/_comps/textarea.module.scss';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

function CdxTextarea({ value, placeholder, onChange }: Props) {
  return (
    <div className={styles['cdx-textarea']}>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={e => {
          if (onChange) onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default CdxTextarea;

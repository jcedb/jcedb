import React from 'react';
import styles from '../styles/_comps/input.module.scss';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string) => void;
}

function CdxInput({ value, placeholder, onChange }: Props) {
  return (
    <div className={styles['cdx-input']}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={e => {
          if (onChange) onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default CdxInput;

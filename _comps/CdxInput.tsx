import React, { HTMLInputTypeAttribute, useEffect, useState } from 'react';
import styles from '../styles/_comps/input.module.scss';
import { IBaseProps } from '../_core/models/base.model';
import _ from 'lodash';
import { RxIf } from '../_core/components/RxIf';
import { validate } from '../_core/utils/validationRules';

interface Props extends IBaseProps {
  type?: HTMLInputTypeAttribute;
  value?: string | number;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  minLength?: number;
  maxLength?: number;
  isRequired?: boolean;
  showTextCounter?: boolean;
  onChange?: (value: string) => void;
  onValidate?: (isValid: boolean) => void;
  checkDirty?: (isDirty: boolean) => void;
}

function CdxInput({
  type,
  value,
  placeholder,
  helperText,
  errorMessage,
  minLength = 5,
  maxLength = 30,
  isRequired = false,
  showTextCounter = false,
  onChange,
  onValidate,
  checkDirty
}: Props) {
  const [dirty, setDirty] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (dirty > 0) {
      const [status, error] = validate(value?.toString() ?? '', {
        isRequired,
        minLength,
        maxLength
      });

      setError(error);

      if (onValidate) onValidate(_.isEmpty(status));
    }
  }, [dirty]);

  return (
    <div className={styles['cdx-input']}>
      <input
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        onChange={e => {
          setDirty(dirty + 1);

          if (onChange) onChange(e.target.value);
          if (checkDirty) checkDirty(true);
        }}
      />

      <div className={styles['cdx-input__subtext']}>
        <RxIf condition={!_.isEmpty(errorMessage ?? error)}>
          <p className={styles['is-error']}>{errorMessage ?? error}</p>
        </RxIf>

        <RxIf condition={!_.isEmpty(helperText) && _.isEmpty(errorMessage)}>
          <p>{helperText}</p>
        </RxIf>

        <RxIf
          condition={
            showTextCounter && _.isEmpty(errorMessage) && _.isEmpty(helperText)
          }
        >
          <p className={styles['is-counter']}>
            {value?.toString().length} / {maxLength}
          </p>
        </RxIf>
      </div>
    </div>
  );
}

export default CdxInput;

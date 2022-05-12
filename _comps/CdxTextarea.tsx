import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import styles from '../styles/_comps/textarea.module.scss';
import { RxIf } from '../_core/components/RxIf';
import { IBaseProps } from '../_core/models/base.model';
import { ICustomRule } from '../_core/models/validation.model';
import { validate } from '../_core/utils/validationRules';

interface Props extends IBaseProps {
  value?: string;
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
  validationRules?: ICustomRule[];
}

function CdxTextarea({
  value,
  placeholder,
  helperText,
  errorMessage,
  minLength = 49,
  maxLength = 200,
  isRequired = false,
  showTextCounter = true,
  onChange,
  onValidate,
  checkDirty,
  validationRules
}: Props) {
  const [dirty, setDirty] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (dirty > 0) {
      const [status, error] = validate(
        value?.toString() ?? '',
        {
          isRequired,
          minLength,
          maxLength
        },
        validationRules
      );

      setError(error);

      if (onValidate) onValidate(_.isEmpty(status));
    }
  }, [dirty]);

  return (
    <div className={styles['cdx-textarea']}>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={e => {
          setDirty(dirty + 1);

          if (onChange) onChange(e.target.value);
          if (checkDirty) checkDirty(true);
        }}
      />

      <div className={styles['cdx-textarea__subtext']}>
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

export default CdxTextarea;

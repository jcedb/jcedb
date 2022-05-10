import React from 'react';
import styles from '../styles/_comps/loader.module.scss';
import { RxIf } from '../_core/components/RxIf';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {
  text?: string;
}

function CdxLoader({ text }: Props) {
  return (
    <div id="js-loader" className={styles['cdx-loader']}>
      <div>
        <span />
        <span />
        <span />
        <span />
      </div>

      <RxIf condition={text !== undefined}>
        <p>{text}</p>
      </RxIf>
    </div>
  );
}

export default CdxLoader;

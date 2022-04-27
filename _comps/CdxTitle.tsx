import React from 'react';
import styles from '../styles/_comps/title.module.scss';
import { IBaseProps } from '../_core/models/base.model';

interface Props extends IBaseProps {}

function CdxTitle({ children, id }: Props) {
  return (
    <div id={id} className={styles['cdx-title']}>
      <div></div>
      <h2>{children}</h2>
    </div>
  );
}

export default CdxTitle;

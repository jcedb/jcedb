import { IBaseProps } from '../models/base.model';

interface Props extends IBaseProps {
  condition: boolean | (() => boolean);
  outputIf?: any;
  outputElse?: any;
}

export const RxIf = ({ condition, children, outputIf, outputElse }: Props) => {
  if (children) return condition ? children : null;

  return condition ? outputIf : outputElse ?? null;
};

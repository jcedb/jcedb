import { IBaseProps } from '../models/base.model';

interface Props extends IBaseProps {
  data: any[];
  component: (props: any) => any;
}

export const RxLoop = ({ data, component }: Props) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>{component(item)}</div>
      ))}
    </>
  );
};

import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.3333 19.3333L14 14M8.66667 16.6667C4.24839 16.6667 0.666667 13.0849 0.666667 8.66667C0.666667 4.24839 4.24839 0.666667 8.66667 0.666667C13.0849 0.666667 16.6667 4.24839 16.6667 8.66667C16.6667 13.0849 13.0849 16.6667 8.66667 16.6667Z'
      stroke='#8AA0BC'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };

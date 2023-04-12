import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.8 10.8H4.8V13.2H16.8V10.8ZM19.2 2.4H18V0H15.6V2.4H6V0H3.6V2.4H2.4C1.068 2.4 0.012 3.48 0.012 4.8L0 21.6C0 22.92 1.068 24 2.4 24H19.2C20.52 24 21.6 22.92 21.6 21.6V4.8C21.6 3.48 20.52 2.4 19.2 2.4ZM19.2 21.6H2.4V8.4H19.2V21.6ZM13.2 15.6H4.8V18H13.2V15.6Z'
      fill='#7B8D9E'
    />
  </svg>
);
const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };

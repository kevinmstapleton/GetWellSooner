import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M23.2133 7.21333L16.7733 0.773333C16.28 0.28 15.6 0 14.8933 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V9.10667C24 8.4 23.72 7.72 23.2133 7.21333ZM5.33333 5.33333H14.6667V8H5.33333V5.33333ZM18.6667 18.6667H5.33333V16H18.6667V18.6667ZM18.6667 13.3333H5.33333V10.6667H18.6667V13.3333Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
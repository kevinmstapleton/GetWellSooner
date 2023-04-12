import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.5206 0.192595C12.221 -0.0641982 11.779 -0.0641982 11.4794 0.192595L0 10.0321V21.6C0 22.9255 1.07452 24 2.4 24H8.8C9.24183 24 9.6 23.6418 9.6 23.2V18.4C9.6 17.0745 10.6745 16 12 16C13.3255 16 14.4 17.0745 14.4 18.4V23.2C14.4 23.6418 14.7582 24 15.2 24H21.6C22.9255 24 24 22.9255 24 21.6V10.0321L12.5206 0.192595Z'
      fill='#EF5DA8'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };

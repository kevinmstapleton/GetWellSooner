import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2 1C2 1.36819 1.70152 1.66667 1.33333 1.66667C0.965144 1.66667 0.666667 1.36819 0.666667 1C0.666667 0.63181 0.965144 0.333333 1.33333 0.333333C1.70152 0.333333 2 0.63181 2 1Z'
      stroke='white'
      strokeOpacity={0.62}
      strokeWidth={2}
    />
    <path
      d='M8.66667 1C8.66667 1.36819 8.36819 1.66667 8 1.66667C7.63181 1.66667 7.33333 1.36819 7.33333 1C7.33333 0.63181 7.63181 0.333333 8 0.333333C8.36819 0.333333 8.66667 0.63181 8.66667 1Z'
      stroke='white'
      strokeOpacity={0.62}
      strokeWidth={2}
    />
    <path
      d='M15.3333 1C15.3333 1.36819 15.0349 1.66667 14.6667 1.66667C14.2985 1.66667 14 1.36819 14 1C14 0.63181 14.2985 0.333333 14.6667 0.333333C15.0349 0.333333 15.3333 0.63181 15.3333 1Z'
      stroke='white'
      strokeOpacity={0.62}
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };

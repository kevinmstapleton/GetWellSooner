import { memo, SVGProps } from 'react';

const BatteryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect opacity={0.35} y={0.333333} width={22} height={11.3333} rx={2.66667} stroke='#141023' />
    <path
      opacity={0.4}
      d='M23 4V8C23.8047 7.66122 24.328 6.87313 24.328 6C24.328 5.12687 23.8047 4.33878 23 4'
      fill='#141023'
    />
    <rect x={2} y={2.33333} width={18} height={7.33333} rx={1.33333} fill='#141023' />
  </svg>
);
const Memo = memo(BatteryIcon);
export { Memo as BatteryIcon };

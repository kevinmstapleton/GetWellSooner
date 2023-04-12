import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M11.7214 3.14713e-05H22.3847V3.64681H11.7214V3.14713e-05Z' fill='black' />
    <path
      d='M1.10427 12.5558C-0.234374 13.8945 -0.372868 16.0642 0.781111 17.5413L6.08981 12.2326C4.6125 11.0786 2.44303 11.2171 1.1043 12.5558L1.10427 12.5558Z'
      fill='black'
    />
    <path
      d='M1.47342 18.2336C2.95056 19.3876 5.074 19.2491 6.45893 17.9105C7.79757 16.5718 7.93607 14.4021 6.78209 12.9249L1.47342 18.2336Z'
      fill='black'
    />
    <path
      d='M6.08951 2.03109C4.61237 0.877108 2.44289 1.0156 1.10442 2.35425C-0.234222 3.69289 -0.372716 5.86259 0.781266 7.33977L6.08951 2.03109Z'
      fill='black'
    />
    <path
      d='M1.47342 8.03192C2.95056 9.18591 5.074 9.04742 6.45893 7.70877C7.79757 6.37012 7.93607 4.20043 6.78209 2.72325L1.47342 8.03192Z'
      fill='black'
    />
    <path
      d='M17.7223 12.0942V10.1555H16.4298V12.1405C16.4298 12.4174 16.1991 12.6483 15.922 12.6483H13.937V13.9408H15.922C16.1989 13.9408 16.4298 14.1715 16.4298 14.4486V16.4336H17.7223V14.4486C17.7223 14.1717 17.953 13.9408 18.2301 13.9408H20.2151V12.6483H18.2301C17.953 12.6021 17.7223 12.3712 17.7223 12.0943V12.0942Z'
      fill='black'
    />
    <path
      d='M23.2153 7.20133C22.3383 6.60124 21.7382 5.72419 21.5073 4.6625H12.6443C12.4135 5.67799 11.7672 6.60124 10.9362 7.20133C10.4284 7.52449 10.1514 8.07837 10.1514 8.67847V18.5106C10.1514 19.5261 10.9823 20.3109 11.9517 20.3109H22.1996C23.2151 20.3109 23.9999 19.4801 23.9999 18.5106V8.67847C23.9999 8.07837 23.723 7.52448 23.2151 7.20133H23.2153ZM21.1843 14.4025C21.1843 14.6794 20.9536 14.9103 20.6764 14.9103H18.6914V16.8953C18.6914 17.1723 18.4607 17.4032 18.1836 17.4032H15.8754C15.5985 17.4032 15.3676 17.1725 15.3676 16.8953V14.9103H13.3826C13.1057 14.9103 12.8748 14.6796 12.8748 14.4025V12.0943C12.8748 11.8174 13.1055 11.5865 13.3826 11.5865H15.3676V9.6015C15.3676 9.32456 15.5983 9.09365 15.8754 9.09365H18.1836C18.4605 9.09365 18.6914 9.32438 18.6914 9.6015V11.5865H20.6764C20.9534 11.5865 21.1843 11.8172 21.1843 12.0943V14.4025Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };

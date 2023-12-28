import { SVGProps } from 'react';
export const IncorrectIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#FF5757"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="m4.375 4.375 9.25 9.25m0-9.25-9.25 9.25"
    />
  </svg>
);

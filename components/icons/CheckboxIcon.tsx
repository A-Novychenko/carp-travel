import { SVGProps } from 'react';

export const CheckboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
    <path stroke="#fff" d="M.5.5h21v21H.5z" />
    <path fill="#fff" opacity={props.opacity} d="M4 4h14v14H4z" />
  </svg>
);

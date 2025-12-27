import { HTMLAttributes } from 'react';

export interface IIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

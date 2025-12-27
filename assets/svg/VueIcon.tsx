import { IIconProps } from '@/types/common.types';
import { type FC } from 'react';

export const VueIcon: FC<IIconProps> = ({
  width = 48,
  height = 48,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" {...props}>
      <path
        d="M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z"
        fill={color}
      />
    </svg>
  );
};

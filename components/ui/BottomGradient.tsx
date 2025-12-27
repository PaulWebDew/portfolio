import React, { FC, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { cn } from '@/lib/utils';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  color?: string;
  shadowHeight?: string;
  shadowWidth?: string;
  withShadow?: boolean;
}
export const BottomGradient: FC<IProps> = ({
  width = '100%',
  height = '3px',
  color = 'rgba(20,217,245)',
  shadowHeight = '20px',
  shadowWidth = '80%',
  withShadow = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('absolute top-full left-1/2 transform -translate-x-1/2', className)}
      style={{
        height,
        width,
        backgroundImage: `linear-gradient(to right, transparent 0%, ${color} 50%, transparent 100%)`,
        borderRadius: height,
      }}
      {...props}
    >
      {withShadow && (
        <svg
          viewBox="0 0 800 50"
          className="w-4/5 h-12 absolute top-full -translate-y-1/2 left-1/2 transform -translate-x-1/2"
        >
          <defs>
            <radialGradient id="ovalGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              {/* Center (brightest) */}
              <stop offset="0%" stopColor="rgba(20,217,245)" stopOpacity="0.5" />
              {/* Outer edge (fades to transparent or darker) */}
              <stop offset="100%" stopColor="rgba(20,217,245)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="25" rx="400" ry="25" fill="url(#ovalGradient)" />
        </svg>
      )}
    </div>
  );
};

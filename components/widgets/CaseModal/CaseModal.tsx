'use client';

import GradientText from '@/components/GradientText';
import { ICase } from '@/lib/mok/gallery.config';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { FC, HTMLAttributes, useEffect } from 'react';

export interface ICaseModalProps extends HTMLAttributes<HTMLDivElement> {
  data: ICase | null;
  onClose: () => void;
}

export const CaseModal: FC<ICaseModalProps> = ({ data, onClose, ...props }) => {
  useGSAP(() => {
    gsap.to('#overflow', { opacity: 1, duration: 0.3 });
    gsap.to('#modal', { opacity: 1, scale: 1, duration: 1, ease: 'bounce.out' });
  }, [data]);

  const handleClose = () => {
    gsap.to('#overflow', { opacity: 0, duration: 0.3, delay: 0.2 });
    gsap.to('#modal', { opacity: 0, scale: 0, duration: 0.5 }).then(onClose);
  };

  useEffect(() => {
    const handleKeyTap = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyTap);
    return () => document.removeEventListener('keydown', handleKeyTap);
  }, []);

  return (
    <div
      onClick={handleClose}
      id="overflow"
      className="w-dvw h-dvh absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md bg-white/10 flex items-center justify-center z-50 opacity-0"
      {...props}
    >
      <div
        id="modal"
        className="w-[80dvw] h-[80dvh] max-w-frame rounded-2xl border-primary border-2 opacity-0 scale-0 relative bg-linear-to-br from-background/90 to-primary/90"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center p-12 gap-12 justify-around relative z-1">
          <div className="rounded-[68px] overflow-hidden w-[1040px]  bg-red-50 transition-transform  border-2 border-primary/50 hover:border-primary shadow-lg">
            <video
              width="1040"
              height="650"
              controls={false}
              muted={true}
              autoPlay={true}
              preload="true"
              loop={true}
            >
              <source src={data?.desktop} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="rounded-[45px] overflow-hidden w-[320px] bg-red-50 transition-transform  border-2 border-primary/50 hover:border-primary shadow-lg">
            <video
              width="320"
              height="840"
              controls={false}
              muted={true}
              autoPlay={true}
              preload="true"
              loop={true}
            >
              <source src={data?.mobile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="p-12 flex justify-center items-baseline gap-20">
          <GradientText showBorder>
            <Link
              className="py-2 px-8 block text-xl font-semibold"
              target="blank"
              href={data?.href || '#'}
            >
              Visit site
            </Link>
          </GradientText>
          <p className="text-3xl max-w-1/2 font-semibold text-white">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

'use client';

import { useRef } from 'react';

export const CasesScreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDeskRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="mx-auto max-w-frame pt-32">
      <div className="flex items-center justify-center gap-12">
        <div
          className="rounded-[68px] overflow-hidden w-[1040px]  bg-red-50 hover:scale-[1.05] transition-transform cursor-pointer border-2 border-primary/50 hover:border-primary shadow-lg"
          onMouseEnter={() => videoDeskRef.current?.play()}
          onMouseLeave={() => videoDeskRef.current?.pause()}
        >
          <video
            ref={videoDeskRef}
            width="1040"
            height="650"
            controls={false}
            muted={true}
            autoPlay={false}
            preload="true"
            loop={true}
          >
            <source src="/videos/case1_desk.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="rounded-[45px] overflow-hidden w-[320px] bg-red-50 hover:scale-[1.05] transition-transform cursor-pointer border-2 border-primary/50 hover:border-primary shadow-lg"
          onMouseEnter={() => videoRef.current?.play()}
          onMouseLeave={() => videoRef.current?.pause()}
        >
          <video
            ref={videoRef}
            width="320"
            height="840"
            controls={false}
            muted={true}
            autoPlay={false}
            preload="true"
            loop={true}
          >
            <source src="/videos/case1_mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

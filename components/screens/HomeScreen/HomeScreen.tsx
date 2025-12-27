'use client';

import BgImg from '@/assets/img/mainBg.png';
import LaserFlow from '@/components/LaserFlow';
import LiquidEther from '@/components/LiquidEther';
import HomeContent from '@/components/widgets/HomeContent/HomeContent';
import MainTitle from '@/components/widgets/MainTitle/MainTitle';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import cls from './HomeScreen.module.css';

export const HomeScreen = () => {
  const revealImgRef = useRef<HTMLImageElement>(null);
  const [verticalBeamOffset, setVerticalBeamOffset] = useState(0.1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const lgWidth = 1024;
      const offset = width < lgWidth ? 0.5 : 0.2;
      setVerticalBeamOffset(offset);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div
        className={'h-max min-h-dvh relative overflow-hidden bg-background my-0 mx-auto pb-16'}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.1}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        <div className={cls.titleWrapper}>
          <MainTitle />
        </div>
        <div className={'absolute inset-0 z-1 h-auto'}>
          <LiquidEther
            colors={['#0199ea', '#00dbff', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div className={cls.laserWrapper}>
          <LaserFlow horizontalBeamOffset={0.1} verticalBeamOffset={-0.5} color="#005965" />
        </div>
        <div className={cls.homeContentWrapper}>
          <div className={'relative w-full h-full p-2 sm:p-4 md:p-6 lg:p-8'}>
            <HomeContent />
          </div>
        </div>

        <Image
          ref={revealImgRef}
          src={BgImg}
          alt="Reveal effect"
          style={
            {
              position: 'absolute',
              width: '100%',
              top: '-10%',
              zIndex: 5,
              mixBlendMode: 'lighten',
              opacity: 0.2,
              pointerEvents: 'none',

              '--mx': '-9999px',
              '--my': '-9999px',
              WebkitMaskImage:
                'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 440px)',
              maskImage:
                'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 440px)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            } as React.CSSProperties
          }
        />
      </div>
    </>
  );
};

import PhotoImg from '@/assets/img/photo.png';
import { AiIcon, DashboardIcon, ThreeDIcon } from '@/assets/svg';
import { ShootingStars } from '@/components/ShootingStars';
import { StarsBackground } from '@/components/StarsBackground';
import { BaseBadge } from '@/components/ui/BaseBadge';
import { BottomGradient } from '@/components/ui/BottomGradient';
import { Comet } from '@/components/ui/Comet';
import Image from 'next/image';
import React from 'react';

import { technologiesData } from '@/lib/mok/technologies.config';
import cls from './HomeContent.module.css';

export default function HomeContent() {
  return (
    <div className={'w-full h-full'}>
      <div className={'relative w-full pb-4'}>
        <div className={cls.previewContainer}>
          <p className="w-6/8 sm:w-auto">
            I work across the entire development lifecycle — from API design and backend
            architecture to Ul implementation and deployment on cloud servers.
          </p>
          <p>I always aim to balance technical reliability with a high-quality user experience.</p>
          <p> I help turn ideas into production-ready products, delivered end-to-end.</p>
          <BottomGradient width={'60%'} />
          <Image
            draggable={false}
            src={PhotoImg}
            alt="Photo"
            className={cls.portraitMobile}
            width={1084}
            height={640}
          />
        </div>
        <div className={cls.experienceContainer}>
          <p className={'text-white'}>I have strong experience building:</p>
          <div
            className={
              'flex flex-col items-start tablet:flex-row relative sm:w-4/2 gap-4 tablet:gap-8 py-4 tablet:py-6'
            }
          >
            <BaseBadge>
              <div className={cls.experienceItem}>
                <DashboardIcon className={cls.icon} />
                <span className={cls.title}>CRM systems with dynamic forms</span>
              </div>
            </BaseBadge>
            <div className={'relative'}>
              <BaseBadge>
                <div className={cls.experienceItem}>
                  <ThreeDIcon className={cls.icon} />
                  <span className={cls.title}>Applications with interactive 3D scenes</span>
                </div>
              </BaseBadge>
              <svg
                viewBox="0 0 800 200"
                className="w-3/2 h-auto absolute z-[2] top-1/2  -translate-y-1/2  -right-60"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  <radialGradient id="elipsGradient" cx="50%" cy="50%" r="40%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="rgba(20,217,245)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgba(20,217,245)" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="400" cy="100" rx="400" ry="100" fill="url(#elipsGradient)" />
              </svg>
            </div>
          </div>
          <BaseBadge>
            <div className={cls.experienceItem}>
              <AiIcon className={cls.icon} />
              <span className={cls.title}>Al-powered applications using external Al APIs</span>
            </div>
          </BaseBadge>
        </div>
        <Image
          draggable={false}
          src={PhotoImg}
          alt="Photo"
          className={cls.portrait}
          width={1084}
          height={640}
        />
        <BottomGradient width={'90%'} />
      </div>
      <div
        className={
          'text-white px-4 md:px-8 lg:px-20 py-8 flex flex-col tablet:flex-row gap-4 sm:gap-8 lg:gap-4 2xl:gap-6'
        }
      >
        {technologiesData.map((technology, ind) => (
          <React.Fragment key={ind}>
            <div className={'flex flex-col w-full gap-4'}>
              <div className={cls.techContainer}>
                <Comet />
                <p className={'text-cyan-100  text-shadow-md text-shadow-cyan-700 '}>
                  {technology.title}
                </p>
              </div>
              <div className={'flex gap-4  flex-wrap text-nowrap'}>
                {technology.items.map((item, idx) => (
                  <BaseBadge className={'px-2'} key={`${ind}_${idx}`}>
                    <div className={'flex items-center gap-2'}>
                      {item.icon}
                      <span className={'text-xs'}>{item.label}</span>
                    </div>
                  </BaseBadge>
                ))}
              </div>
            </div>
            <div className={cls.divider} />
          </React.Fragment>
        ))}
      </div>
      <div className={'absolute inset-0 z-3'}>
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}

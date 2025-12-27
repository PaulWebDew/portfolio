'use client';

import { PageLogo } from '../PageLogo';
import cls from './PageTransition.module.css';

import { gsap } from 'gsap';

import { FC, Fragment, HTMLAttributes, useEffect, useRef } from 'react';

import { usePathname, useRouter } from 'next/navigation';

export const PageTransition: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoOverlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null!);
  const blocksRef = useRef<Array<HTMLDivElement>>([]);
  const isTransitioning = useRef(false);

  const revealPage = () => {
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: 'right' });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: 'power2.out',
      transformOrigin: 'right',
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = '';
      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement('div');
        block.className = cls.block;
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };
    createBlocks();

    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: 'left' });

    if (logoRef.current) {
      const path = logoRef.current.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: 'transparent',
        });
      }
    }
    revealPage();

    const coverPage = (url: string) => {
      const tl = gsap.timeline({
        onComplete: () => router.push(url),
      });

      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power2.out',
        transformOrigin: 'left',
      })
        .set(logoOverlayRef.current, { opacity: 1 }, '-=0.2')
        .set(
          logoRef.current.querySelector('path'),
          {
            strokeDashoffset: 500,
            fill: 'transparent',
          },
          '-=0.25'
        )
        .to(logoRef.current?.querySelector('path'), { strokeDashoffset: 0, duration: 1.5 }, '-=0.5')
        .to(
          logoRef.current?.querySelector('path'),
          { strokeDashoffset: -1095, duration: 1.5 },
          '-=0.5'
        )
        .to(logoOverlayRef.current, { opacity: 0, duration: 0.25, ease: 'power2.inOut' });
    };
    const handleRouteChange = (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = (e.currentTarget as HTMLAnchorElement).pathname;
        if (url !== pathname) {
          handleRouteChange(url);
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, [router, pathname, overlayRef]);
  return (
    <Fragment>
      <div ref={overlayRef} className={cls.transitionOverlay}></div>
      <div ref={logoOverlayRef} className={cls.logoOverlay}>
        <div className={cls.logoContainer}>
          <PageLogo ref={logoRef} />
        </div>
      </div>
      {children}
    </Fragment>
  );
};

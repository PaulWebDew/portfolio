export interface ICase {
  src: string;
  title: string;
  href: string;
  desktop?: string;
  mobile?: string;
  description?: string;
}

export const CasesData: ICase[] = [
  {
    src: '/cases/case_1.png',
    title: 'Forex Signals Provider',
    href: 'https://meltory.com/',
    desktop: '/videos/case1_desk.mp4',
    mobile: '/videos/case1_mobile.mp4',
    description:
      'A platform offering subscription-based access to copy trading signals from top Forex traders.',
  },
  {
    src: '/cases/case_2.webp',
    title: 'Vehicle import platform',
    href: 'https://senatcars.ru/',
    desktop: '/videos/case2_desk.mp4',
    mobile: '/videos/case2_mobile.mp4',
    description:
      'A platform that provides car import services from Korea and Japan, sourcing vehicles directly from local market listings.',
  },
  {
    src: '/cases/case_3.webp',
    title: 'Cadastral services company',
    href: 'https://1kadastr.ru/',
    desktop: '/videos/case3_desk.mp4',
    mobile: '/videos/case3_mobile.mp4',
    description: 'Landing page for a land surveying and cadastral registration company',
  },
  {
    src: '/cases/case_4.webp',
    title: 'IT Company',
    href: 'https://relabs.ru/',
    desktop: '/videos/case4_desk.mp4',
    mobile: '/videos/case4_mobile.mp4',
    description: 'Landing page for IT company',
  },
  {
    src: '/cases/case_5.jpg',
    title: 'IT-Offshore service',
    href: 'https://it-offshore.com/',
    desktop: '/videos/case5_desk.mp4',
    mobile: '/videos/case5_mobile.mp4',
    description:
      'The platform facilitates the acquisition of ready-made offshore companies or the incorporation of new entities in reputable low-tax jurisdictions. It also provides offshore banking services as part of a comprehensive international corporate setup',
  },
  {
    src: '/cases/case_6.webp',
    title: 'Dissertation help service',
    href: 'https://dissertatsia.ru/',
    desktop: '/videos/case6_desk.mp4',
    mobile: '/videos/case6_mobile.mp4',
    description: 'Dissertation coaching & editing service',
  },
  {
    src: '/cases/case_7.jpg',
    title: 'Dissertation help service',
    href: 'https://dissergrad.com/',
    desktop: '/videos/case7_desk.mp4',
    mobile: '/videos/case7_mobile.mp4',
    description: 'Dissertation coaching & editing service',
  },
  {
    src: '/cases/case_8.webp',
    title: 'Doctoral research support service',
    href: 'https://dissdal.com/',
    desktop: '/videos/case8_desk.mp4',
    mobile: '/videos/case8_mobile.mp4',
    description: 'Editing, structuring, and methodological support for doctoral dissertations',
  },
];

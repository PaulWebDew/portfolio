import {
  DashboardIcon,
  ThreeDIcon,
  AiIcon,
  NextJsIcon,
  NestJsIcon,
  MongoIcon,
  TailwindIcon,
  ReactIcon,
  VueIcon,
  SocketIcon,
  MuiIcon,
  AntdIcon,
  StorybookIcon,
  DockerIcon,
  NginxIcon,
  GitIcon,
  PrismaIcon,
  WebRtcIcon,
} from '@/assets/svg';

const iconClass = 'text-cyan-400/80 w-4 h-4';

export const technologiesData = [
  {
    title: 'Core Technologies',
    items: [
      { icon: <NestJsIcon className={iconClass} />, label: 'NestJs' },
      { label: 'Express' },
      { icon: <PrismaIcon className={iconClass} />, label: 'Prisma + PostgreSQL' },
      { icon: <MongoIcon className={iconClass} />, label: 'Mongoose + MongoDB' },
      { icon: <SocketIcon className={iconClass} />, label: 'Socket.IO' },
      { icon: <WebRtcIcon className={iconClass} />, label: 'WebRTC' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    items: [
      { icon: <NextJsIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'NextJS' },
      { icon: <ReactIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'ReactJs' },
      { icon: <VueIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'VueJs' },
      { icon: <ReactIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'React Native' },
      { label: 'Expo' },
      { icon: <TailwindIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'Tailwind CSS' },
      { label: 'Zustand/TanstackStore' },
      { label: 'Redux/TanstackQuery(RTKQuery)' },
      { label: 'NextAuth(AuthJs)/Auth0' },
      { label: 'React-Hook-forms' },
    ],
  },
  {
    title: 'UI & Design Systems',
    items: [
      { icon: <MuiIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'Material UI' },
      { icon: <AntdIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'Ant Design' },
      { label: 'Hero UI' },
      { icon: <StorybookIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'Storybook' },
      { label: 'ThreeJs/Fiber' },
      { label: 'Motion/GSAP' },
      { label: 'DnD-Core' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { icon: <DockerIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'Docker' },
      { icon: <NginxIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'Nginx' },
      { icon: <GitIcon className={'text-cyan-400/80 w-4 h-4'} />, label: 'Git' },
    ],
  },
];

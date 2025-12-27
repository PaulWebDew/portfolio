import GradientText from '@/components/GradientText';
import cls from './MainTitle.module.css';

export default function MainTitle() {
  return (
    <div className={'text-white flex flex-col '}>
      <GradientText
        colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
        animationSpeed={5}
        showBorder={false}
        className="w-max"
      >
        <h2 className={'font-semibold text-2xl sm:text-3xl lg:text-4xl w-full text-start px-0.5'}>
          Mikhuta Pavel
        </h2>
      </GradientText>

      <h1
        className={
          'font-semibold w-8/9 sm:font-bold text-2xl sm:text-3xl  md:text-4xl lg:text-5xl leading-[1.2] my-1 sm:my-3 md:my-6 opacity-780'
        }
      >
        I&apos;m a Full-Stack & Mobile <br /> JavaScript Developer
      </h1>
      <GradientText animationSpeed={8} showBorder={false} className="w-max">
        <h3 className={cls.subtitle}>3+ years of commercial experience,</h3>
      </GradientText>
      <GradientText animationSpeed={8} showBorder={false} className="w-max">
        <h3 className={cls.subtitle}>focused on building scalable web </h3>
      </GradientText>
      <GradientText animationSpeed={8} showBorder={false} className="w-max">
        <h3 className={cls.subtitle}>and cross-platform applications.</h3>
      </GradientText>
    </div>
  );
}

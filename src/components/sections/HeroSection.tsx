import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import HeroHeader from './HeroHeader';
import leftDecorationImage from './images/img_vector_white_a700.png';
import rightDecorationImage from './images/img_vector_white_a700_382x232.png';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full">
      <HeroHeader />
      <div className="relative flex w-full items-center rounded-[32px] bg-gradient-primary pb-[16px] pt-[165px] lg:rounded-[62px] lg:pb-[74px] lg:pt-[74px]">
        <div className="flex w-full flex-col items-center gap-[80px]">
          <div className="flex w-full max-w-[764px] flex-col items-center gap-[20px] px-[22px]">
            <h1 className="text-global-5 text-center text-[42px] font-bold leading-[1.1] tracking-tighter lg:text-[80px]">
              Tingli&nbsp;&mdash; изучать язык проще, чем&nbsp;кажется
            </h1>
            <p className="text-global-5 text-center text-[18px] lg:text-[24px]">
              Платформа для эффективного изучения языков, разработанная в рамках
              образовательного направления компании РВБ (Объединенная компания
              Wildberries & Russ)
            </p>
          </div>
          <Button as={'a'} href={'#download-app'} variant="secondary" size="lg">
            Скачать приложение
          </Button>
        </div>
        <Image
          src={leftDecorationImage}
          alt="Left decoration"
          width={256}
          height={440}
          className="absolute bottom-0 left-0 hidden lg:block"
        />
        <Image
          src={rightDecorationImage}
          alt="Right decoration"
          width={232}
          height={382}
          className="absolute right-[0px] top-[0px] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import logoWhiteImage from './images/logo-white.svg';
import infoWhiteImage from './images/info-white.svg';
import crossImage from './images/cross.svg';

const HeroHeader: React.FC = () => {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-[16px] pt-[16px] lg:hidden">
      <Image src={logoWhiteImage} alt="Tingli Logo" width={60} height={27} />
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="flex h-[28px] w-[28px] items-center justify-center bg-transparent"
            aria-label="Информация о платформе"
          >
            <Image
              src={infoWhiteImage}
              alt="Info Icon"
              width={28}
              height={28}
            />
          </button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="rounded-t-[32px] px-[32px] py-[16px] pt-[64px] text-left"
        >
          <SheetClose asChild>
            <button
              className="absolute right-[16px] top-[16px] flex h-[48px] w-[48px] items-center justify-center rounded-[16px] bg-gray-100 p-[16px]"
              aria-label="Закрыть"
            >
              <Image src={crossImage} alt="Закрыть" width={24} height={24} />
            </button>
          </SheetClose>

          <SheetHeader>
            <SheetTitle className="text-global-1 text-left text-[16px] font-medium">
              В основе нашей платформы
            </SheetTitle>
            <SheetDescription className="text-global-2 text-left text-[14px]">
              Технологии искусственного интеллекта (LLM), которые
              персонализируют обучение для ученика и помогут автоматизировать
              рутину преподавателей (в ближайших обновлениях)
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeroHeader;

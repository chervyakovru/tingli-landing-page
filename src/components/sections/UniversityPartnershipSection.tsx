import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ngeuImage from './images/ngeu.png';

const UniversityPartnershipSection: React.FC = () => {
  return (
    <div className="bg-global-4 w-full max-w-[1094px] rounded-[32px] p-[16px] py-[32px] lg:rounded-[52px] lg:p-[40px] lg:py-[40px]">
      <div className="flex flex-col items-start gap-[28px] lg:flex-row lg:gap-[86px]">
        <div className="flex w-full flex-shrink-0 flex-col items-center gap-[24px] lg:h-full lg:w-auto lg:items-start lg:gap-[28px]">
          <h2 className="text-left text-[36px] font-medium leading-[1.1] tracking-[-2px] lg:text-[42px]">
            Для вузов
          </h2>
          <p className="text-global-2 text-center text-[16px] font-normal lg:hidden lg:text-left">
            Работаем с&nbsp;вузами и&nbsp;преподавателями — вместе развиваем
            продукт и&nbsp;адаптируем его под цели учебных программ
            и&nbsp;потребности студентов
          </p>
          <div className="flex w-full items-center gap-[8px]">
            <div className="border-medium flex flex-1 flex-shrink-0 items-center justify-center rounded-[20px] border p-[24px] lg:flex-none">
              <Image src={ngeuImage} alt="НГЭУ" width={118} height={36} />
            </div>
            <div className="border-medium text-global-1 flex-1 whitespace-nowrap rounded-button border px-[22px] py-[34px] text-center font-inter text-[14px] font-medium lg:flex-none">
              будущий партнер
            </div>
            <div className="border-medium hidden items-center justify-center rounded-[20px] border p-[34px] lg:flex">
              <span className="text-global-1 text-left text-[14px] font-medium">
                +1
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-[28px] lg:w-auto">
          <p className="text-global-2 hidden text-left text-[16px] font-normal lg:block">
            Работаем с&nbsp;вузами и&nbsp;преподавателями — вместе развиваем
            продукт и&nbsp;адаптируем его под цели учебных программ
            и&nbsp;потребности студентов
          </p>
          <Button
            as={'a'}
            href={'mailto:tingli@rwb.ru'}
            variant="primary"
            size="lg"
            className="w-full lg:hidden"
          >
            Стать партнером
          </Button>
          <Button
            as={'a'}
            href={'mailto:tingli@rwb.ru'}
            variant="primary"
            size="md"
            className="hidden lg:block"
          >
            Стать партнером
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UniversityPartnershipSection;

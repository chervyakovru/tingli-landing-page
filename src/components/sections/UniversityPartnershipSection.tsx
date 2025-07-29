import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ngeuImage from './images/ngeu.png';

const UniversityPartnershipSection: React.FC = () => {
  return (
    <div className="bg-global-4 w-full max-w-[1094px] rounded-[32px] p-[16px] lg:rounded-[52px] lg:p-[38px]">
      <div className="flex flex-col items-start gap-[28px] lg:flex-row lg:gap-[86px]">
        <div className="flex w-full flex-shrink-0 flex-col gap-[28px] lg:w-auto">
          <h2 className="text-left text-[21px] font-medium lg:leading-[51px]">
            Для вузов
          </h2>
          <p className="text-global-2 text-left text-[16px] font-normal lg:hidden">
            Работаем с&nbsp;вузами и&nbsp;преподавателями — вместе развиваем
            продукт и&nbsp;адаптируем его под цели учебных программ
            и&nbsp;потребности студентов
          </p>
          <div className="flex items-center gap-[8px]">
            <div className="border-medium flex flex-shrink-0 items-center justify-center rounded-[20px] border p-[24px]">
              <Image src={ngeuImage} alt="НГЭУ" width={118} height={36} />
            </div>
            <div className="border-medium text-global-1 whitespace-nowrap rounded-button border px-[22px] py-[34px] text-left font-inter text-[14px] font-medium">
              будущий партнер
            </div>
            <div className="border-medium hidden items-center justify-center rounded-[20px] border p-[34px] lg:flex">
              <span className="text-global-1 text-left text-[14px] font-medium">
                +1
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[28px] lg:w-auto">
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
            className="w-full"
          >
            Стать партнером
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UniversityPartnershipSection;

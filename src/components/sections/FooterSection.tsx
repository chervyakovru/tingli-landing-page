import React from 'react';
import Image from 'next/image';
import logoImage from '../common/images/logo.svg';

const FooterSection: React.FC = () => {
  return (
    <div className="bg-global-4 flex w-full flex-col items-center rounded-[32px] px-[16px] py-[24px] lg:rounded-[52px] lg:p-[32px]">
      <Image
        src={logoImage}
        alt="Tingli Logo"
        width={80}
        height={37}
        style={{ height: 'auto' }}
        className="mb-[50px] block lg:mb-[36px]"
      />
      <div className="bg-global-1 mb-[40px] h-[1px] w-full rounded-[1px] lg:mb-[80px]"></div>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-[12px] text-center lg:mb-[8px] lg:flex-row lg:gap-[24px] lg:text-left">
        <div className="flex items-end">
          <p className="text-[14px] leading-[1.8] lg:text-[16px]">
            Если появились вопросы - напиши нам на почту{' '}
            <a
              href="mailto:help.tingli@rwb.ru"
              className="text-accent-purple font-semibold underline"
            >
              help.tingli@rwb.ru
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-end gap-[14px] lg:flex-row lg:gap-[28px]">
          <a
            href="https://legal.wildberries.ru/privacy-policy-education-services/country/ru/lang/ru/"
            target="_blank"
            className="text-[14px] hover:underline lg:text-[16px]"
          >
            Политика конфиденциальности
          </a>
          <a
            href="https://legal.wildberries.ru/polzovatelskoe-soglashenie/country/ru/lang/ru/#anchor-4"
            target="_blank"
            className="text-[14px] hover:underline lg:text-[16px]"
          >
            Пользовательское соглашение
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

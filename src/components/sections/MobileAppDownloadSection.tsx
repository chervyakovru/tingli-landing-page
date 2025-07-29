import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import logoIconImage from './images/logo-icon.svg';
import androidIconImage from './images/android-icon.svg';
import appleIconImage from './images/apple-icon.svg';
import phoneWithQrCodeImage from './images/phone-with-qr-code.png';
import phoneImage from './images/phone.png';

const MobileAppDownloadSection: React.FC = () => {
  return (
    <div
      id="download-app"
      className="flex w-full flex-col items-center gap-[40px] overflow-hidden rounded-[32px] bg-gradient-primary px-[16px] lg:flex-row lg:items-end lg:justify-between lg:gap-[86px] lg:rounded-[62px] lg:px-[40px]"
    >
      <div className="flex max-w-[580px] flex-col items-center pb-0 pt-[20px] lg:items-start lg:pb-[42px] lg:pt-[50px]">
        <Image
          src={logoIconImage}
          alt="Tingli"
          width={82}
          height={82}
          className="mb-[12px] block lg:mb-[28px]"
        />
        <h2 className="text-global-4 mb-[28px] text-center text-[36px] font-medium leading-[1.1] lg:text-left lg:text-[42px]">
          Скачайте приложение Tingli
        </h2>
        <p className="text-global-4 hidden text-[16px] lg:block">
          Отсканируйте QR-код, чтобы скачать приложение ученика
          <br />
          или перейдите в один из&nbsp;магазинов
        </p>
        <div className="flex w-full flex-col items-center gap-[6px] lg:mt-[40px] lg:flex-row lg:gap-[12px]">
          <Button
            as={'a'}
            href={
              'https://play.google.com/store/apps/details?id=com.yllstrom.tingli.student'
            }
            target="_blank"
            variant="primary"
            size="lg"
            className="w-full lg:w-[190px]"
          >
            <span className="flex items-center gap-[11px]">
              <Image
                src={androidIconImage}
                alt="Android"
                width={46}
                height={29}
                className="block"
              />
              <span className="text-global-5 flex text-[24px] font-semibold">
                android
              </span>
            </span>
          </Button>
          <Button
            as={'a'}
            href={'https://apps.apple.com/ru/app/tingli/id6746127518'}
            target="_blank"
            variant="primary"
            size="lg"
            className="w-full lg:w-[190px]"
          >
            <span className="flex items-center gap-[16px]">
              <Image
                src={appleIconImage}
                alt="iOS"
                width={32}
                height={32}
                className="block"
              />
              <span className="text-global-5 flex pt-[4px] text-[24px] font-semibold">
                IOS
              </span>
            </span>
          </Button>
        </div>
      </div>
      <Image
        src={phoneWithQrCodeImage}
        alt="QR Code"
        width={420}
        height={420}
        className="hidden lg:block"
      />
      <Image
        src={phoneImage}
        alt="QR Code"
        width={300}
        height={300}
        className="block lg:hidden"
      />
    </div>
  );
};

export default MobileAppDownloadSection;

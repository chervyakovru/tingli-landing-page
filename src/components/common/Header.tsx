import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import logoImage from './images/logo.svg';
import infoIconImage from './images/img_button_icon.svg';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <TooltipProvider>
      <header
        className={`flex w-full items-center justify-between ${className}`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 px-[31px] py-[10px]">
          <Image src={logoImage} alt="Tingli Logo" width={80} height={38} />
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          {/* Icon Button with Tooltip */}
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div
                className="bg-global-4 flex h-[56px] w-[56px] items-center justify-center rounded-button focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="Информация о платформе"
              >
                <Image
                  src={infoIconImage}
                  alt="Info Icon"
                  width={24}
                  height={24}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent
              className="text-global-2 max-w-[300px] rounded-[28px] border border-gray-100 bg-white p-4 shadow-lg"
              side="bottom"
              align="end"
            >
              <p className="text-global-2 text-[14px]">
                Платформа Tingli разработана в рамках образовательного
                направления компании РВБ (Объединенная компания Wildberries &
                Russ)
              </p>
            </TooltipContent>
          </Tooltip>

          {/* Download App Button */}
          <Button
            as={'a'}
            href={'#download-app'}
            className="text-global-5 bg-button-1 whitespace-nowrap rounded-button px-3 py-3 text-center font-inter text-[16px] font-semibold lg:leading-[20px]"
            variant="primary"
          >
            Скачать приложение
          </Button>
        </div>
      </header>
    </TooltipProvider>
  );
};

export default Header;

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { StaticImageData } from 'next/image';

interface ComingSoonCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'white' | 'gradient';
}

const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
  variant = 'white',
}) => {
  const bgClass =
    variant === 'gradient' ? 'bg-gradient-primary' : 'bg-global-4';
  const textColorClass =
    variant === 'gradient' ? 'text-global-5' : 'text-global-2';
  const descColorClass =
    variant === 'gradient' ? 'text-global-5' : 'text-global-3';
  const iconColorClass = variant === 'gradient' ? 'bg-global-4' : 'bg-global-2';

  return (
    <div
      className={`${bgClass} flex w-full flex-col gap-[36px] rounded-[32px] p-[20px] lg:gap-[24px] lg:rounded-[62px] lg:p-[28px]`}
    >
      <div className={`flex items-start gap-[16px] lg:flex-col lg:gap-[24px]`}>
        <div
          className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[20px] p-[14px] lg:h-[60px] lg:w-[60px] lg:p-[18px] ${iconColorClass}`}
        >
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <div className="flex flex-col gap-[8px] lg:gap-[12px]">
          <h3
            className={`text-left text-[18px] font-medium leading-[1.2] tracking-[-1px] lg:text-[20px] ${textColorClass}`}
          >
            {title}
          </h3>
          <p className={`text-left text-[16px] ${descColorClass}`}>
            {description}
          </p>
        </div>
      </div>
      {buttonText && (
        <Button as={'a'} href={buttonHref || '#'} variant="secondary" size="lg">
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default ComingSoonCard;

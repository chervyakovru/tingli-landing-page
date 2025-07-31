import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex w-full items-start gap-[16px] lg:max-w-[250px] lg:flex-col lg:items-center lg:gap-[24px]">
      <div className="bg-global-2 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] lg:h-[76px] lg:w-[76px] lg:rounded-[24px]">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]"
        />
      </div>
      <div className="flex flex-col items-start gap-[8px] lg:items-center lg:gap-[16px]">
        <h3 className="text-global-2 text-left text-[18px] font-medium leading-[1.2] tracking-[-1px] lg:text-center lg:text-[20px]">
          {title}
        </h3>
        <p
          className="text-global-3 text-left text-[16px] font-normal lg:text-center lg:text-[16px]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
};

export default FeatureCard;

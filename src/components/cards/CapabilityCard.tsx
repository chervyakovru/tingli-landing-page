import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CapabilityCardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="bg-global-4 flex w-full flex-col gap-[28px] overflow-hidden rounded-[32px] pt-[28px] lg:gap-[20px] lg:rounded-[52px]">
      <div className="flex w-full flex-col items-center gap-[8px] px-[20px] lg:items-start lg:gap-[12px] lg:px-[28px]">
        <div className="mb-[8px]">
          <h3 className="text-global-2 text-[20px] font-normal">{title}</h3>
        </div>
        <p
          className="text-global-3 text-left text-[16px] font-normal"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="relative flex h-[232px] w-full overflow-hidden">
        <div className="absolute left-[50%] h-full w-[316px] translate-x-[-50%] lg:left-auto lg:right-0 lg:translate-x-0">
          <Image src={image} alt="Background" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default CapabilityCard;

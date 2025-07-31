import React from 'react';
import Header from '@/components/common/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import ComingSoonSection from '@/components/sections/ComingSoonSection';
import UniversityPartnershipSection from '@/components/sections/UniversityPartnershipSection';
import MobileAppDownloadSection from '@/components/sections/MobileAppDownloadSection';
import FooterSection from '@/components/sections/FooterSection';

const TingliHomePage: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center gap-[80px] pb-[16px] lg:gap-[120px] lg:pb-[88px] lg:pt-[60px]">
      <div className="bg bg-global-2 fixed left-0 right-0 top-0 z-50 hidden w-full justify-center lg:flex">
        <div className="flex w-full max-w-[1440px] px-[0px] lg:px-[62px] lg:py-[16px]">
          <Header />
        </div>
      </div>
      <div className="flex w-full max-w-[1440px] px-[0px] lg:px-[62px] lg:pt-[8px]">
        <HeroSection />
      </div>

      <div className="flex w-full max-w-[1224px] flex-col items-center gap-[80px] px-[16px] lg:gap-[120px] lg:px-[62px]">
        <FeaturesSection />

        <CapabilitiesSection />

        <ComingSoonSection />
      </div>

      <div className="flex w-full max-w-[1224px] px-[0px] lg:px-[62px]">
        <UniversityPartnershipSection />
      </div>

      <div className="flex w-full max-w-[1224px] px-[0px] lg:px-[62px]">
        <MobileAppDownloadSection />
      </div>

      <div className="flex w-full max-w-[1440px] px-[16px] lg:px-[62px]">
        <FooterSection />
      </div>
    </div>
  );
};

export default TingliHomePage;

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
    <div className="flex w-full flex-col items-center gap-[80px] lg:gap-[120px]">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-[24px] px-[0px] lg:px-[62px] lg:pt-[16px]">
        <div className="hidden w-full lg:block">
          <Header />
        </div>
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

      <div className="flex w-full max-w-[1400px] px-[0px] lg:px-[62px]">
        <FooterSection />
      </div>
    </div>
  );
};

export default TingliHomePage;

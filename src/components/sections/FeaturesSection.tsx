import React from 'react';
import Image from 'next/image';
import FeatureCard from '@/components/cards/FeatureCard';
import Section from '@/components/common/Section';
import personalIconImage from './images/img_icon.svg';
import travelIconImage from './images/img_icon_black_900.svg';
import educationIconImage from './images/img_icon_black_900_32x32.svg';
import businessIconImage from './images/img_icon_32x32.svg';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: personalIconImage,
      title: 'Для себя',
      description:
        'Погрузитесь в&nbsp;культуру Китая и&nbsp;откройте для себя новый взгляд на&nbsp;мир',
    },
    {
      icon: travelIconImage,
      title: 'Для путешествий',
      description:
        'Проще общаться, понимать культуру и&nbsp;чувствовать уверенность в&nbsp;поездках',
    },
    {
      icon: educationIconImage,
      title: 'Для образования',
      description: 'поступление стипендии мобильность и&nbsp;навыки',
    },
    {
      icon: businessIconImage,
      title: 'Для бизнеса',
      description:
        'Упрощайте общение, открывайте доступ к&nbsp;инвестициям и&nbsp;карьере',
    },
  ];

  return (
    <Section>
      <Section.Header>Твои возможности с&nbsp;Tingli</Section.Header>
      <div className="bg-global-4 w-full rounded-[32px] p-[20px] lg:rounded-[52px] lg:p-[40px]">
        <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-4 lg:gap-[0px]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturesSection;

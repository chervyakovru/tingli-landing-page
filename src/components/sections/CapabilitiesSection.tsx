import React from 'react';
import Image from 'next/image';
import CapabilityCard from '@/components/cards/CapabilityCard';
import dialogsImage from './images/dialogs.png';
import lessonsImage from './images/lessons.png';
import repeatsImage from './images/repeats.png';
import dictionaryImage from './images/dictionary.png';

const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      title: 'ИИ-диалоги',
      description:
        'Практикуйте письменные диалоги с&nbsp;ИИ&nbsp;&mdash; свободно или по&nbsp;темам, в&nbsp;удобном для вас темпе',
      image: dialogsImage,
    },
    {
      title: 'Уроки и упражнения',
      description:
        'Изучайте языки с&nbsp;помощью коротких модулей и&nbsp;заданий на&nbsp;слух, чтение, произношение и&nbsp;говорение',
      image: lessonsImage,
    },
    {
      title: 'Интервальное повторение',
      description:
        'Закрепляйте лексику по&nbsp;умной системе, которая подскажет, что и&nbsp;когда повторить',
      image: repeatsImage,
    },
    {
      title: 'Словарь',
      description:
        'Сохраняйте нужные слова, изучайте переводы, тоны, примеры и&nbsp;повторяйте в&nbsp;удобное время',
      image: dictionaryImage,
    },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-[16px] lg:gap-[32px]">
      <h2 className="text-center text-[36px] lg:text-[48px]">Возможности</h2>
      <div className="grid w-full grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[40px]">
        {capabilities.map((capability, index) => (
          <CapabilityCard
            key={index}
            title={capability.title}
            description={capability.description}
            image={capability.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CapabilitiesSection;

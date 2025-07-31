import React from 'react';
import Image from 'next/image';
import ComingSoonCard from '@/components/cards/ComingSoonCard';
import Section from '../common/Section';
import teachersIconImage from './images/img_icon_black_900_60x60.svg';
import languagesIconImage from './images/img_icon_60x60.svg';
import contentIconImage from './images/img_icon_1.svg';
import aiIconImage from './images/img_icon_2.svg';
import coursesIconImage from './images/img_icon_3.svg';

const ComingSoonSection: React.FC = () => {
  const comingSoonItems = [
    {
      icon: teachersIconImage,
      title: 'Для преподавателей',
      description:
        'Конструктор уроков, ведение занятий, работа с группами и отслеживание прогресса учеников по статистике',
      buttonText: 'Хочу участвовать в тестировании',
      buttonHref: 'mailto:tingli@rwb.ru',
      variant: 'gradient' as const,
    },
    {
      icon: languagesIconImage,
      title: 'Новые языки',
      description:
        'Готовим поддержку новых языков — больше возможностей для обучения и практики',
    },
    {
      icon: contentIconImage,
      title: 'Больше контента',
      description:
        'Расширяем уроки, упражнения и темы — от базового до продвинутого уровня',
    },
    {
      icon: aiIconImage,
      title: 'AI-ассистент',
      description:
        'Персонифицированное обучение, голосовое общение и новые форматы взаимодействия с ИИ — ещё больше поддержки и мотивации',
    },
  ];

  return (
    <Section>
      <Section.Header>Скоро в&nbsp;Tingli</Section.Header>
      <div className="grid w-full grid-cols-1 gap-[16px] lg:grid-cols-2">
        {comingSoonItems.map((item, index) => (
          <ComingSoonCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
            buttonHref={item.buttonHref}
            variant={item.variant}
          />
        ))}
        <div className="lg:col-span-2">
          <div className="bg-global-4 flex w-full items-center gap-[16px] rounded-[32px] p-[20px] lg:p-[10px]">
            <div className="bg-global-2 flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[20px] p-[18px]">
              <Image
                src={coursesIconImage}
                alt="Courses"
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-1 flex-col gap-[8px] lg:flex-row lg:items-center lg:justify-between">
              <h3 className="text-global-2 text-left text-[18px] font-medium lg:text-[20px]">
                Курсы от профессионалов
              </h3>
              <p className="text-global-3 text-left text-[16px] font-normal lg:mr-[52px]">
                Авторские программы от опытных преподавателей
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ComingSoonSection;

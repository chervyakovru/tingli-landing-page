import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  className = 'text-center text-[36px] tracking-[-2px] lg:text-[48px] leading-[1.1]',
}) => {
  return <h2 className={className}>{children}</h2>;
};

const Section: React.FC<SectionProps> & {
  Header: React.FC<SectionHeaderProps>;
} = ({ children, className = '' }) => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-[32px] lg:gap-[40px] ${className}`}
    >
      {children}
    </div>
  );
};

Section.Header = SectionHeader;

export default Section;

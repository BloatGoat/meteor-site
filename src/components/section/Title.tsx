import React from 'react';

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white section-title">
      {title}
    </h2>
  );
};

export default SectionTitle;

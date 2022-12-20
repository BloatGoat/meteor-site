import React from 'react';
import { NewsType } from '@/types/News';

type NewsBadgeProps = {
  type: NewsType;
  label?: string;
};

const NewsBadge: React.FC<NewsBadgeProps> = ({ type }) => {
  const getBadgeColor = () => {
    switch (type) {
      case NewsType.Client:
        return `bg-persian-green-100 text-persian-green-800`;
      case NewsType.Other:
        return `bg-purple-100 text-purple-800`;
      case NewsType.Plugin:
        return `bg-yellow-100 text-yellow-800 `;
      default:
        `bg-persian-green-100 text-persian-green-800`;
    }
  };
  return (
    <span className={`${getBadgeColor()} text-sm mr-2 px-2.5 py-0.5 rounded`}>
      {type}
    </span>
  );
};

export default NewsBadge;

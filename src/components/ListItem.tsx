import React from 'react';

interface ListItemProps {
  item: string;
  index: number;
  isSelected: boolean;
  isLast: boolean;
  onItemClick: (item: string) => void;
  onItemDoubleClick: (item: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  item,
  index,
  isSelected,
  isLast,
  onItemClick,
  onItemDoubleClick,
}) => {
  return (
    <label
      key={index}
      className={`px-4 py-3 cursor-pointer transition-colors duration-200 flex items-center space-x-3 ${
        isSelected ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
      } ${!isLast ? 'border-b border-gray-200' : ''}`}
      onDoubleClick={() => onItemDoubleClick(item)}
    >
      {/* Checkbox real */}
      <input
        type='checkbox'
        checked={isSelected}
        onChange={() => onItemClick(item)}
        onClick={(e) => e.stopPropagation()}
        className={`w-5 h-5 rounded border-2 ${
          isSelected ? 'bg-white border-white' : 'border-gray-400'
        }`}
      />
      <span className='flex-1'>{item}</span>
    </label>
  );
};

export default ListItem;

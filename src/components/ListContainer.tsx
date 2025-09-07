import { ListItem, EmptyList } from './';

interface ListContainerProps {
  items: string[];
  selectedItems: string[];
  isListEmpty: boolean;
  onItemClick: (item: string) => void;
  onItemDoubleClick: (item: string) => void;
  onAddFirstItem: () => void;
}

export const ListContainer = ({
  items,
  selectedItems,
  isListEmpty,
  onItemClick,
  onItemDoubleClick,
  onAddFirstItem,
}: ListContainerProps) => {
  return (
    <div className='bg-gray-50 rounded-lg border border-gray-200 mb-6'>
      {isListEmpty ? (
        <EmptyList
          message='No hay elementos en la lista'
          actionText='Agregar primer elemento'
          onAction={onAddFirstItem}
        />
      ) : (
        items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            index={index}
            isSelected={selectedItems.includes(item)}
            isLast={index === items.length - 1}
            onItemClick={onItemClick}
            onItemDoubleClick={onItemDoubleClick}
          />
        ))
      )}
    </div>
  );
};

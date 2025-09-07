import { useState } from 'react';

export interface UseListReturn {
  items: string[];
  selectedItems: string[];
  isListEmpty: boolean;
  addItem: (item: string) => void;
  deleteItem: (item: string) => void;
  deleteSelectedItems: () => void;
  toggleItemSelection: (item: string) => void;
  clearSelection: () => void;
  setItems: (items: string[]) => void;
}

export const useList = (initialItems: string[] = []): UseListReturn => {
  const [items, setItems] = useState<string[]>(initialItems);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const isListEmpty = items.length === 0;

  const addItem = (item: string) => {
    if (item.trim()) {
      setItems((prev) => [...prev, item.trim()]);
    }
  };

  const deleteItem = (item: string) => {
    setItems((prev) => prev.filter((listItem) => listItem !== item));
    setSelectedItems((prev) => prev.filter((selectedItem) => selectedItem !== item));
  };

  const deleteSelectedItems = () => {
    if (selectedItems.length > 0) {
      setItems((prev) => prev.filter((item) => !selectedItems.includes(item)));
      setSelectedItems([]);
    }
  };

  const toggleItemSelection = (item: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(item)) {
        return prev.filter((selectedItem) => selectedItem !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  const clearSelection = () => {
    setSelectedItems([]);
  };

  return {
    items,
    selectedItems,
    isListEmpty,
    addItem,
    deleteItem,
    deleteSelectedItems,
    toggleItemSelection,
    clearSelection,
    setItems,
  };
};

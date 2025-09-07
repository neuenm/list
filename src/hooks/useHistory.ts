import { useState } from 'react';

export interface UseHistoryReturn {
  history: string[][];
  historyIndex: number;
  canUndo: boolean;
  canRedo: boolean;
  saveToHistory: (items: string[]) => void;
  undo: () => string[] | null;
  redo: () => string[] | null;
}

export const useHistory = (initialItems: string[] = []): UseHistoryReturn => {
  const [history, setHistory] = useState<string[][]>([initialItems]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  const saveToHistory = (newItems: string[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newItems);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = (): string[] | null => {
    if (canUndo) {
      const newIndex = historyIndex - 1;
      const previousItems = history[newIndex];
      setHistoryIndex(newIndex);
      return previousItems;
    }
    return null;
  };

  const redo = (): string[] | null => {
    if (canRedo) {
      const newIndex = historyIndex + 1;
      const nextItems = history[newIndex];
      setHistoryIndex(newIndex);
      return nextItems;
    }
    return null;
  };

  return {
    history,
    historyIndex,
    canUndo,
    canRedo,
    saveToHistory,
    undo,
    redo,
  };
};

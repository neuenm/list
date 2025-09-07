import { useState } from 'react';
import { Dialog, Button, Icon, ListContainer } from './components';
import { useDialog } from './hooks/useDialog';
import { useList } from './hooks/useList';
import { useHistory } from './hooks/useHistory';
import { Undo2, Redo2, Trash2, Plus } from 'lucide-react';
import './App.css';

function App() {
  const [newItemText, setNewItemText] = useState<string>('');

  const { isDialogOpen, openDialog, closeDialog } = useDialog();
  const {
    items,
    selectedItems,
    isListEmpty,
    addItem,
    deleteItem,
    deleteSelectedItems,
    toggleItemSelection,
    clearSelection,
    setItems,
  } = useList();

  const { canUndo, canRedo, saveToHistory, undo, redo } = useHistory();

  const handleUndo = () => {
    const previousItems = undo();
    if (previousItems) {
      setItems(previousItems);
      clearSelection();
    }
  };

  const handleRedo = () => {
    const nextItems = redo();
    if (nextItems) {
      setItems(nextItems);
      clearSelection();
    }
  };

  const handleItemClick = (item: string) => {
    toggleItemSelection(item);
  };

  const handleItemDoubleClick = (item: string) => {
    deleteItem(item);
    saveToHistory(items.filter((listItem) => listItem !== item));
  };

  const handleDelete = () => {
    if (!isListEmpty && selectedItems.length > 0) {
      deleteSelectedItems();
      saveToHistory(items.filter((item) => !selectedItems.includes(item)));
    }
  };

  const handleDialogClose = () => {
    closeDialog();
    setNewItemText('');
  };

  const handleDialogConfirm = () => {
    if (newItemText.trim()) {
      addItem(newItemText);
      saveToHistory([...items, newItemText.trim()]);
      handleDialogClose();
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-300 to-blue-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full'>
        {/* Sección de Título */}
        <h1 className='text-3xl font-semibold text-gray-800 text-center mb-4'>Prueba técnica</h1>

        <p className='text-base text-gray-700 mb-6 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec inceptos. Lacinia
          habitasse arcu molestie maecenas cursus quam nunc, hendrerit posuere augue fames dictumst
          placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.
        </p>
        {!isListEmpty && (
          <p className='text-sm text-gray-500 mb-4 text-center'>
            💡 <strong>Tip:</strong> Haz clic para seleccionar • Doble clic para eliminar
          </p>
        )}

        {/* Sección de Lista */}
        <ListContainer
          items={items}
          selectedItems={selectedItems}
          isListEmpty={isListEmpty}
          onItemClick={handleItemClick}
          onItemDoubleClick={handleItemDoubleClick}
          onAddFirstItem={openDialog}
        />

        {/* Sección de Botones */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-3'>
            {/* Botón Deshacer */}
            <Button
              variant='icon'
              onClick={handleUndo}
              disabled={!canUndo}
              title={canUndo ? 'Deshacer último cambio' : 'No hay cambios para deshacer'}
            >
              <Icon icon={Undo2} />
            </Button>

            {/* Botón Rehacer */}
            <Button
              variant='icon'
              onClick={handleRedo}
              disabled={!canRedo}
              title={canRedo ? 'Rehacer último cambio deshecho' : 'No hay cambios para rehacer'}
            >
              <Icon icon={Redo2} />
            </Button>

            {/* Botón Eliminar */}
            {selectedItems.length > 0 && (
              <Button variant='secondary' onClick={handleDelete}>
                <Icon icon={Trash2} size={16} className='mr-1' />
                DELETE
              </Button>
            )}
          </div>

          {/* Botón Agregar */}
          <Button variant='primary' onClick={openDialog}>
            <Icon icon={Plus} size={16} className='mr-1' />
            ADD
          </Button>
        </div>
      </div>

      {/* Diálogo para agregar nuevos items */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        title='Add item to list'
        onConfirm={handleDialogConfirm}
        confirmText='ADD'
        cancelText='CANCEL'
      >
        <textarea
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder='Type the text here...'
          className='w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        />
      </Dialog>
    </div>
  );
}

export default App;

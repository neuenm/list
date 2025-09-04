import { useState } from 'react';
import { Dialog, Button, Icon, ListItem, EmptyList } from './components';
import './App.css';

function App() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [newItemText, setNewItemText] = useState<string>('');
  const [history, setHistory] = useState<string[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  // Función para guardar estado en el historial
  const saveToHistory = (newItems: string[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newItems);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Función para deshacer cambios
  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      const previousItems = history[newIndex];
      setItems(previousItems);
      setSelectedItems([]); // Siempre limpiar selecciones al deshacer
      setHistoryIndex(newIndex);
    }
  };

  // Función para rehacer cambios
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      const nextItems = history[newIndex];
      setItems(nextItems);
      setSelectedItems([]); // Siempre limpiar selecciones al rehacer
      setHistoryIndex(newIndex);
    }
  };

  // Verificar si se puede deshacer
  const canUndo = historyIndex > 0;
  // Verificar si se puede rehacer
  const canRedo = historyIndex < history.length - 1;

  const isListEmpty = items.length === 0;

  const handleItemClick = (item: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(item)) {
        // Remover item si ya está seleccionado
        return prev.filter((selectedItem) => selectedItem !== item);
      } else {
        // Agregar item si no está seleccionado
        return [...prev, item];
      }
    });
  };

  const handleItemDoubleClick = (item: string) => {
    // Eliminar el item directamente con doble clic
    const newItems = items.filter((listItem) => listItem !== item);
    setItems(newItems);
    setSelectedItems([]); // Limpiar selecciones
    saveToHistory(newItems);
  };

  const handleDelete = () => {
    if (!isListEmpty) {
      const newItems = items.filter((item) => !selectedItems.includes(item));
      setItems(newItems);
      setSelectedItems([]);
      saveToHistory(newItems);
    }
  };

  const handleAdd = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setNewItemText('');
  };

  const handleDialogConfirm = () => {
    if (newItemText.trim()) {
      const newItems = [...items, newItemText.trim()];
      setItems(newItems);
      setNewItemText('');
      setIsDialogOpen(false);
      saveToHistory(newItems);
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
        <div className='bg-gray-50 rounded-lg border border-gray-200 mb-6'>
          {isListEmpty ? (
            <EmptyList
              message='No hay elementos en la lista'
              actionText='Agregar primer elemento'
              onAction={handleAdd}
            />
          ) : (
            items.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                index={index}
                isSelected={selectedItems.includes(item)}
                isLast={index === items.length - 1}
                onItemClick={handleItemClick}
                onItemDoubleClick={handleItemDoubleClick}
              />
            ))
          )}
        </div>

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
              <Icon name='undo' />
            </Button>

            {/* Botón Rehacer */}
            <Button
              variant='icon'
              onClick={handleRedo}
              disabled={!canRedo}
              title={canRedo ? 'Rehacer último cambio deshecho' : 'No hay cambios para rehacer'}
            >
              <Icon name='redo' />
            </Button>

            {/* Botón Eliminar */}
            {selectedItems.length > 0 && (
              <Button variant='secondary' onClick={handleDelete}>
                <Icon name='delete' size='sm' className='mr-1' />
                DELETE
              </Button>
            )}
          </div>

          {/* Botón Agregar */}
          <Button variant='primary' onClick={handleAdd}>
            <Icon name='add' size='sm' className='mr-1' />
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

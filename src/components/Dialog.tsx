import { useEffect, useRef, ReactNode } from 'react';
import Button from './Button';
import Icon from './Icon';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = 'ADD',
  cancelText = 'CANCEL',
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className='bg-transparent backdrop:bg-black/50 p-0 max-w-xl w-full mx-4 rounded-lg shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      onClose={handleClose}
    >
      <div className='bg-white rounded-lg p-6'>
        {/* Encabezado */}
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>{title}</h2>

        {/* Contenido */}
        <div className='mb-6'>{children}</div>

        {/* Pie de página */}
        <div className='flex justify-end space-x-3'>
          <Button variant='secondary' onClick={handleCancel} type='button'>
            {cancelText}
          </Button>
          <Button variant='primary' onClick={handleConfirm} type='button'>
            <Icon name='add' size='sm' className='mr-1' />
            {confirmText}
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;

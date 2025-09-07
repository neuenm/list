import React from 'react';
import Icon from './Icon';
import Button from './Button';
import { ClipboardList, Plus } from 'lucide-react';

interface EmptyListProps {
  message?: string;
  actionText?: string;
  onAction?: () => void;
}

const EmptyList: React.FC<EmptyListProps> = ({
  message = 'No hay elementos en la lista',
  actionText = 'Agregar elemento',
  onAction,
}) => {
  return (
    <div className='flex flex-col items-center justify-center py-12 px-6 text-center'>
      {/* Icono */}
      <div className='mb-4 text-gray-400'>
        <Icon icon={ClipboardList} size={64} className='w-16 h-16' />
      </div>

      {/* Mensaje */}
      <h3 className='text-lg font-medium text-gray-600 mb-2'>{message}</h3>

      {/* Texto descriptivo */}
      <p className='text-sm text-gray-500 mb-6 max-w-sm'>
        Comienza agregando tu primer elemento a la lista
      </p>

      {/* Botón de acción (opcional) */}
      {onAction && (
        <Button onClick={onAction} variant='primary' size='md' className='inline-flex items-center'>
          <Icon icon={Plus} size={16} className='mr-2' />
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyList;

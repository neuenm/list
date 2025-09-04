import React from 'react';
import Icon from './Icon';

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
        <Icon name='empty-list' size='lg' className='w-16 h-16' />
      </div>

      {/* Mensaje */}
      <h3 className='text-lg font-medium text-gray-600 mb-2'>{message}</h3>

      {/* Texto descriptivo */}
      <p className='text-sm text-gray-500 mb-6 max-w-sm'>
        Comienza agregando tu primer elemento a la lista
      </p>

      {/* Botón de acción (opcional) */}
      {onAction && (
        <button
          onClick={onAction}
          className='inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200'
        >
          <Icon name='add' size='sm' className='mr-2' />
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyList;

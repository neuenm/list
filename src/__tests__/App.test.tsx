import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';

// Mock de los componentes para simplificar los tests
vi.mock('../components', () => ({
  Dialog: ({ isOpen, onClose, title, onConfirm, confirmText, cancelText, children }: any) => {
    if (!isOpen) return null;
    return (
      <div data-testid='dialog'>
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>{cancelText}</button>
        <button onClick={onConfirm}>{confirmText}</button>
      </div>
    );
  },
  Button: ({ children, onClick, disabled, variant, title }: any) => (
    <button onClick={onClick} disabled={disabled} data-variant={variant} title={title}>
      {children}
    </button>
  ),
  Icon: ({ name, size, className }: any) => (
    <span data-testid={`icon-${name}`} data-size={size} className={className}>
      {name}
    </span>
  ),
  ListItem: ({ item, isSelected, onItemClick, onItemDoubleClick, isLast }: any) => (
    <div
      data-testid={`list-item-${item}`}
      data-selected={isSelected}
      data-last={isLast}
      onClick={() => onItemClick(item)}
      onDoubleClick={() => onItemDoubleClick(item)}
    >
      {item}
    </div>
  ),
  EmptyList: ({ message, actionText, onAction }: any) => (
    <div data-testid='empty-list'>
      <p>{message}</p>
      <button onClick={onAction}>{actionText}</button>
    </div>
  ),
}));

describe('App Component', () => {
  it('renders the main title', () => {
    render(<App />);
    expect(screen.getByText('Prueba técnica')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<App />);
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument();
  });

  it('shows empty list initially', () => {
    render(<App />);
    expect(screen.getByTestId('empty-list')).toBeInTheDocument();
    expect(screen.getByText('No hay elementos en la lista')).toBeInTheDocument();
  });

  it('shows ADD button', () => {
    render(<App />);
    expect(screen.getByText('ADD')).toBeInTheDocument();
  });

  it('opens dialog when ADD button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const addButton = screen.getByText('ADD');
    await user.click(addButton);

    expect(screen.getByTestId('dialog')).toBeInTheDocument();
    expect(screen.getByText('Add item to list')).toBeInTheDocument();
  });

  it('shows undo and redo buttons', () => {
    render(<App />);
    expect(screen.getByTitle('No hay cambios para deshacer')).toBeInTheDocument();
    expect(screen.getByTitle('No hay cambios para rehacer')).toBeInTheDocument();
  });

  it('undo and redo buttons are disabled initially', () => {
    render(<App />);
    const undoButton = screen.getByTitle('No hay cambios para deshacer');
    const redoButton = screen.getByTitle('No hay cambios para rehacer');

    expect(undoButton).toBeDisabled();
    expect(redoButton).toBeDisabled();
  });
});

describe('App Functionality', () => {
  it('adds item to list when dialog is confirmed', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Open dialog
    const addButton = screen.getByText('ADD');
    await user.click(addButton);

    // Type in textarea
    const textarea = screen.getByPlaceholderText('Type the text here...');
    await user.type(textarea, 'Test item');

    // Confirm dialog
    const confirmButton = screen.getByRole('button', { name: 'ADD' });
    await user.click(confirmButton);

    // Check if item was added
    expect(screen.getByTestId('list-item-Test item')).toBeInTheDocument();
    expect(screen.queryByTestId('empty-list')).not.toBeInTheDocument();
  });

  it('cancels dialog when cancel button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Open dialog
    const addButton = screen.getByText('ADD');
    await user.click(addButton);

    // Cancel dialog
    const cancelButton = screen.getByText('CANCEL');
    await user.click(cancelButton);

    // Check if dialog is closed
    expect(screen.queryByTestId('dialog')).not.toBeInTheDocument();
  });
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dropdowns from './Dropdowns';

const items = [
  { id: 1, label: 'Item 1' },
  { id: 2, label: 'Item 2' },
  { id: 3, label: 'Item 3' },
];

describe('Dropdowns component', () => {
  test('renders with initial state', () => {
    render(<Dropdowns items={items} onSelect={() => {}} buttonText="Select an item" />);

    expect(screen.getByText('Select an item')).toBeInTheDocument();
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
  });

  test('dropdown opens and closes when button is clicked', () => {
    render(<Dropdowns items={items} onSelect={() => {}} buttonText="Select an item" />);

    fireEvent.click(screen.getByText('Select an item'));
    expect(screen.queryByText('Item 1')).toBeInTheDocument();
    expect(screen.queryByText('Item 2')).toBeInTheDocument();
    expect(screen.queryByText('Item 3')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Select an item'));
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
  });

  test('calls onSelect with correct label when item is clicked', () => {
    const onSelectMock = jest.fn();
    render(<Dropdowns items={items} onSelect={onSelectMock} buttonText="Select an item" />);

    fireEvent.click(screen.getByText('Select an item'));
    fireEvent.click(screen.getByText('Item 2'));
    expect(onSelectMock).toHaveBeenCalledWith('Item 2');
  });
});

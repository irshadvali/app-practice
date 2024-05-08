// Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home component', () => {
  it('should render "Home" text', () => {
    render(<Home />);
    const homeText = screen.getByText('Home');
    expect(homeText).toBeInTheDocument();
  });

  it('should render an Avatar component', () => {
    render(<Home />);
    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
  });

  it('should render a Text component with "You, 1 second ago • Uncommitted changes"', () => {
    render(<Home />);
    const text = screen.getByText('You, 1 second ago • Uncommitted changes');
    expect(text).toBeInTheDocument();
  });

  it('should render a paragraph with "Home" text', () => {
    render(<Home />);
    const paragraph = screen.getByText('Home', { selector: 'p' });
    expect(paragraph).toBeInTheDocument();
  });

  it('should have a "bgcolor" class on the wrapping div', () => {
    render(<Home />);
    const div = screen.getByTestId('test');
    expect(div).toHaveClass('bgcolor');
  });
});

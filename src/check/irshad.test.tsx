import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { RootState } from '../../store';
import { TargetingPage } from './TargetingPage';

const mockStore = configureMockStore<RootState>();

describe('TargetingPage', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      targeting: {
        datasource: [],
        data: {},
      },
    });
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <TargetingPage />
      </Provider>
    );
    expect(screen.getByText('Data is loading')).toBeInTheDocument();
  });

  it('handles filter button click', () => {
    render(
      <Provider store={store}>
        <TargetingPage />
      </Provider>
    );

    fireEvent.click(screen.getByText('Filters'));
    // Add assertions for the filter logic
  });

  it('handles clear button click', () => {
    render(
      <Provider store={store}>
        <TargetingPage />
      </Provider>
    );

    fireEvent.click(screen.getByText('Clear'));
    // Add assertions for the clear logic
  });

  // Add more test cases as needed to achieve 100% coverage
});

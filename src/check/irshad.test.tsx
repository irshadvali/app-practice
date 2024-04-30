import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TargetingPage from "../TargetingPage"; // Assuming this is the correct path to your TargetingPage component

jest.mock("@uitk/foundations", () => ({
  // Mock the module here
  optum: {} // Mock any specific exports used in your component
}));

describe("TargetingPage component", () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
      // Mock your Redux store state here if needed
    });
  });

  it("should render without errors", () => {
    const { getByText } = render(
      <Provider store={store}>
        <TargetingPage />
      </Provider>
    );

    expect(getByText("Targeting")).toBeInTheDocument();
  });

  // Add more test cases as needed
});

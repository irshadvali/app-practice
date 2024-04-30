// HeaderTwo.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HeaderTwo from "../Header/HeaderTwo";

test("renders HeaderTwo component", () => {
  render(<HeaderTwo />);
  const headerElement = screen.getByText(/Option 1/i);
  expect(headerElement).toBeInTheDocument();
});

test("selects item in first dropdown", () => {
  render(<HeaderTwo />);
  const dropdownButton = screen.getByText(/Option 1/i);
  fireEvent.click(dropdownButton);
  const dropdownItem = screen.getByText(/Option 3/i);
  fireEvent.click(dropdownItem);
  expect(dropdownButton).toHaveTextContent("Option 3");
});

test("selects item in second dropdown", () => {
  render(<HeaderTwo />);
  const dropdownButton = screen.getByText("Select Option 2");
  fireEvent.click(dropdownButton);
  const dropdownItem = screen.getByText("Option C");
  fireEvent.click(dropdownItem);
  expect(dropdownButton).toHaveTextContent("Option C");
});

test("selects item in third dropdown", () => {
  render(<HeaderTwo />);
  const dropdownButton = screen.getByText("Select Choice");
  fireEvent.click(dropdownButton);
  const dropdownItem = screen.getByText("Choice 1");
  fireEvent.click(dropdownItem);
  expect(dropdownButton).toHaveTextContent("Choice 1");
});

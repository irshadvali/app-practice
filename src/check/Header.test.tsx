import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import HeaderTwo from "./HeaderTwo";

describe("HeaderTwo component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderTwo />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders logo", () => {
    const logo = wrapper.find(".logo img");
    expect(logo.exists()).toBe(true);
  });

  it("renders the first dropdown with default selected item", () => {
    const firstDropdown = wrapper.find("Dropdown").at(0);
    expect(firstDropdown.prop("buttonText")).toBe("Option 1");
  });

  it("renders the second dropdown with default selected item", () => {
    const secondDropdown = wrapper.find("Dropdown").at(1);
    expect(secondDropdown.prop("buttonText")).toBe("Select Option 2");
  });

  it("renders the third dropdown with default selected item", () => {
    const thirdDropdown = wrapper.find("Dropdown").at(2);
    expect(thirdDropdown.prop("buttonText")).toBe("Select Choice");
  });

  it("changes the selected item of the first dropdown when an option is selected", () => {
    const firstDropdown = wrapper.find("Dropdown").at(0);
    firstDropdown.simulate("select", "Option 2");
    expect(firstDropdown.prop("buttonText")).toBe("Option 2");
  });

  it("changes the selected item of the second dropdown when an option is selected", () => {
    const secondDropdown = wrapper.find("Dropdown").at(1);
    secondDropdown.simulate("select", "Option B");
    expect(secondDropdown.prop("buttonText")).toBe("Option B");
  });

  it("changes the selected item of the third dropdown when an option is selected", () => {
    const thirdDropdown = wrapper.find("Dropdown").at(2);
    thirdDropdown.simulate("select", "Choice 3");
    expect(thirdDropdown.prop("buttonText")).toBe("Choice 3");
  });
});

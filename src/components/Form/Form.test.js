import Form from "./Form";
import React from "react";
import { screen } from "@testing-library/react";
import configureStore from "../../redux/store";
import renderWithProviders from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("Given a Form component", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a form", () => {
      const store = configureStore();
      renderWithProviders(<Form />);
    });
  });

  describe("When it's rendered", () => {
    test("Then it should render a input and a button Create", () => {
      renderWithProviders(<Form />);

      const inputText = screen.getByLabelText(/task:/i);
      const buttonCreate = screen.getByRole("button", { name: /create/i });

      expect(inputText).toBeInTheDocument();
      expect(buttonCreate).toBeInTheDocument();
    });
  });

  describe("When the user types in To Do input", () => {
    test("Then it should render a To Do input with the text inside", () => {
      renderWithProviders(<Form />);
      const typedText = "hey";

      const inputText = screen.getByLabelText(/task:/i);
      userEvent.type(inputText, typedText);

      expect(inputText).toHaveValue(typedText);
    });
  });
});

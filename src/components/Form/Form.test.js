import Form from "./Form";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Given a Form component", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a form", () => {
      render(<Form />);
    });
  });

  describe("When it's rendered", () => {
    test("Then it should render a form with a label and a button Create", () => {
      const inputForm = "To Do...";
      const buttonForm = "CREATE";

      render(
        <Provider>
          <Form />
        </Provider>
      );

      const button = screen.getByRole("button", { task: inputForm });
      const input = screen.getByRole("input", { task: buttonForm });

      expect(button).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });
  });
});

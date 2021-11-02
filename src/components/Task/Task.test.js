import React from "react";
import { screen } from "@testing-library/react";

import renderWithProviders from "../../utils/test-utils";

import Task from "../Task/Task";

describe("Given a Task component", () => {
  describe("When it receives a Task", () => {
    test("Then it should render a task label and input and a button Edit and Delete", () => {
      renderWithProviders(<Task />);

      const checkbox = screen.getByRole("checkbox");
      const buttonEdit = screen.getByRole("button", { name: /edit/i });
      const buttonDelete = screen.getByRole("button", { name: /delete/i });

      expect(checkbox).toBeInTheDocument();
      expect(buttonEdit).toBeInTheDocument();
      expect(buttonDelete).toBeInTheDocument();
    });
  });
  describe("When it's rendered'", () => {
    test("Then it renders a Task", () => {
      renderWithProviders(<Task />);
    });
  });
});

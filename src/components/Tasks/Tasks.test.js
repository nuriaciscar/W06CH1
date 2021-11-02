import React from "react";
import { screen } from "@testing-library/react";

import renderWithProviders from "../../utils/test-utils";

import Tasks from "../Tasks/Tasks";

describe("Given a Task component", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a Task", () => {
      renderWithProviders(<Tasks />);
    });
  });
});

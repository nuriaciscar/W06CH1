import Form from "./Form";
import React from "react";
import { render } from "@testing-library/react";

describe("Given a Form component", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a form", () => {
      render(<Form />);
    });
  });
});

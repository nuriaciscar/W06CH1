import App from "./App";
import { screen } from "@testing-library/react";
import renderWithProviders from "./utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("Given an App component", () => {
  describe("When the input is filled with text and the user clicks the button", () => {
    test("Then it should been called", () => {
      const mock = jest.fn();
      renderWithProviders(<App />);

      const buttonCreate = screen.getByRole("button", { name: /create/i });
      const inputText = screen.findAllByPlaceholderText("To Do...");
      buttonCreate[0].addEventListener("click", mock);
      userEvent.type(inputText, "hey");
      userEvent.click(buttonCreate);

      expect(mock).toHaveBeenCalledTimes(1);
    });
  });
  describe("When the input is filled with text", () => {
    test("Then it should create a new task", async () => {
      const createdItem = {
        task: "Potato",
        id: 1,
      };

      renderWithProviders(<App />);
      const buttonCreate = await screen.getByRole("button", {
        name: /create/i,
      });
      const inputText = await screen.findAllByPlaceholderText("To Do...");

      userEvent.type(inputText, "hello");
      userEvent.click(buttonCreate);

      const [textCreated] = await screen.findAllByText(createdItem.task);

      expect(textCreated).toBeInTheDocument();
    });
  });
});

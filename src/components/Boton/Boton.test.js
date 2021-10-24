import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Boton from "./Boton";
describe("Given a Boton component", () => {
  describe("When it receives a text name siguiente", () => {
    test("Then it should show siguiente inside", () => {
      const text = "siguiente";
      const state = true;
      const actionOnClick = jest.fn();
      const className = "botoncete";

      render(
        <Boton
          text={text}
          state={state}
          actionOnClick={actionOnClick}
          className={className}
        />
      );
      const boton = screen.getByRole("button", { name: "siguiente" });

      const result = boton.textContent;

      expect(result).toBe(text);
    });
  });
  describe("When it receives a fuction", () => {
    test("Then it should call that function", () => {
      const text = "siguiente";
      const state = true;
      const actionOnClick = jest.fn();
      const className = "botoncete";

      render(
        <Boton
          text={text}
          state={state}
          actionOnClick={actionOnClick}
          className={className}
        />
      );
      const boton = screen.getByRole("button", { name: "siguiente" });
      userEvent.click(boton);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
  describe("When it receives a class botoncete", () => {
    test("Then it should get this class botoncete", () => {
      const text = "siguiente";
      const state = true;
      const actionOnClick = jest.fn();
      const className = "botoncete";

      render(
        <Boton
          text={text}
          state={state}
          actionOnClick={actionOnClick}
          className="botoncete"
        />
      );
      const boton = screen.getByRole("button", { name: "siguiente" });

      const result = boton.className;

      expect(result).toBe(className);
    });
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  it("should show Hi message", async () => {
    const user = userEvent.setup();
    render(<App />);

    const btn = await screen.findByText("Click me");
    await user.click(btn);

    // await screen.findByText("Hi");
    console.warn(
      'An act warning message should have been thrown by now'
      );
  });
});

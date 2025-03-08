import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders greeting", () => {
  render(<App />);
  const message = screen.getByText("Hello, John...");
  expect(message).toBeInTheDocument();
});

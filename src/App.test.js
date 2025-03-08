import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { fetchUser } from "./api"; // Import the API function
jest.mock("./api"); // Automatically uses `__mocks__/api.js`

test("renders loading", () => {
  render(<App />);
  const loading = screen.getByText(/loading.../i);
  expect(loading).toBeInTheDocument();
});

test("renders greeting", async () => {
  fetchUser.mockResolvedValue({ name: "John" }); 
  render(<App />);
  await waitFor(() => {
    const message = screen.getByText(/hello, john.../i);
    expect(message).toBeInTheDocument();
  });
});


test("renders bad greeting", async () => {
  fetchUser.mockRejectedValue(new Error("Failed to fetch user")); 
  render(<App />);
  await waitFor(() => {
    const message = screen.getByText(/bad user/i);
    expect(message).toBeInTheDocument();
  });
});

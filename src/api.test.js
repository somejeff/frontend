import { fetchUser } from "./api";

// Mocking the global fetch API
global.fetch = jest.fn();

describe("fetchUser", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test to ensure no leakage between tests
  });

  test("fetches user successfully", async () => {
    const mockResponse = { name: "John" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const user = await fetchUser(1);

    // Check if the returned user data matches the mock response
    expect(user).toEqual(mockResponse);
  });

  test("handles fetch error correctly", async () => {
    fetch.mockRejectedValueOnce(new Error("Failed to fetch user"));

    // We expect this to throw an error because the response is not ok
    await expect(fetchUser(1)).rejects.toThrow("Failed to fetch user");

  });

  test("handles fetch failure due to network error", async () => {
    // Simulating a network error
    fetch.mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchUser(1)).rejects.toThrow("Network Error");

    expect(fetch).toHaveBeenCalledWith("/api/users/1"); // Ensure fetch was called with the correct URL
  });
});

export async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

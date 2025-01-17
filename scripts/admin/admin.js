async function getAllUsers() {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/users`);
    const res = await response.json();

    if (res.status === "success") {
      return res.data; // Return the fetched data
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

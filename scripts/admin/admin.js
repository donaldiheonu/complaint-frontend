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

// function to delete user from database
async function deleteUser(userId) {
  try {
    const response = await fetch(`${BASE_URL}/api/admin/user/${userId}`, {
      method: "DELETE",
    });

    if (response.status === 204) {
      return alert("User deleted successfully\n Please reload the page.");
    } else {
      throw new Error("Unable to delete user");
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

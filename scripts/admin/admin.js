/**
 * The above functions use async/await to fetch all users and delete a user from a database, handling
 * errors and displaying appropriate messages.
 * @returns In the `getAllUsers` function, the fetched data is returned if the response status is
 * "success". In the `deleteUser` function, an alert message is returned if the user is deleted
 * successfully.
 */
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

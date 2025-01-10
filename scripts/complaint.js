function submitComplaints(e) {
  e.preventDefault();

  document.getElementById("submitComplaintBtn").innerText = "Please Wait...";

  const formData = new FormData(e.target);
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  console.log("Data passed!:", data);

  // Post form data to endpoint
  fetch(`${BASE_URL}/api/complaints/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      document.getElementById("submitComplaintBtn").innerText = "Submit";
      console.log("Success:", res.data);

      if (res.status === "error") {
        document.getElementById("messageBox").innerHTML = res.message;
        document.getElementById("messageBox").style.display = "block";
      } else {
        document.getElementById("messageBox").innerHTML = res.message;
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("messageBox").style.backgroundColor = "green";
        //   document.getElementById("messageBox").requestFullscreen
      }
    })
    .catch((error) => {
      document.getElementById("submitComplaintBtn").innerText = "Submit";
      console.error("Error:", error);
      document.getElementById("messageBox").innerHTML = error.message;
      document.getElementById("messageBox").style.display = "block";
    });
}

function complaintHistory() {
  // Get complaint history from endpoint
  fetch(`${BASE_URL}/api/complaints/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.status === "error") {
        document.getElementById("historyMessageBox").innerHTML = res.message;
        document.getElementById("historyMessageBox").style.display = "block";
        return;
      }

      console.log("Success:", res.data);

      const complaintsTable = document.getElementById("complaintTable");
      let count = 1; // Start count from 1
      complaintsTable.innerHTML = ""; // Clear existing rows

      res.data.forEach((complaint) => {
        const row = `
            <tr>
              <td>${count++}</td>
              <td>${complaint.complaint_type}</td>
              <td>${complaint.faculty}</td>
              <td>${complaint.complaint_title}</td>
              <td>Pending</td>
              <td>${new Date(complaint.createdAt).toLocaleString()}</td>
              <td><a href="#" class="view-details">View</a></td>
            </tr>
          `;
        complaintsTable.innerHTML += row; // Append each row
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("historyMessageBox").innerHTML = error.message;
      document.getElementById("historyMessageBox").style.display = "block";
    });
}

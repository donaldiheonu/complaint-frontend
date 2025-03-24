var token = getCookie("token");
function authenticate() {
  // get token cookie and validate
  // console.log("This is the authorization token:", token);

  if (token == "" || token == undefined || token == null) {
    window.location.href = "../authenticate.html";
  } else {
    verifyToken(token);
  }
}

function getCookie(item) {
  var name = item + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function verifyToken(token) {
  fetch(`${BASE_URL}/api/auth/verify-token`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
      if (res.status === "error") {
        window.location.href = "/authenticate.html";
      }
      console.log(res);
    })
    .catch((error) => {
      console.error("Error:", error);
      window.location.href = "/authenticate.html";
    });
}

function logout() {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.href = "./";
}

authenticate();

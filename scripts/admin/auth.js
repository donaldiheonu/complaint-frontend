var token = getCookie("adminToken");
function authenticate() {
    // get token cookie and validate

    if (token == "" || token == undefined || token == null) {
        window.location.href = "./";
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


function logout() {
    document.cookie = "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "./";
}
authenticate()

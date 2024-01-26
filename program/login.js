function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    window.location.href = "index.html";
  } else {
    document.getElementById("login-error").innerText =
      "Username atau password salah";
  }
}

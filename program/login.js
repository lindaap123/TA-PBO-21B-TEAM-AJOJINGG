// Fungsi untuk memvalidasi login
function validateLogin() {
  // Mendapatkan nilai dari input username
  var username = document.getElementById("username").value;
  // Mendapatkan nilai dari input password
  var password = document.getElementById("password").value;

  // Memeriksa apakah username dan password sesuai dengan nilai yang diharapkan
  if (username === "admin" && password === "admin") {
    // Redirect ke halaman index.html jika login berhasil
    window.location.href = "index.html";
  } else {
    // Menampilkan pesan kesalahan jika login gagal
    document.getElementById("login-error").innerText =
      "Username atau password salah";
  }
}

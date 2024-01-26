function registerUser() {
  var newUsername = document.getElementById("new-username").value;
  var newPassword = document.getElementById("new-password").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var email = document.getElementById("email").value;

  if (newUsername && newPassword && phoneNumber && email) {
    document.getElementById("register-success").innerText =
      "Registrasi berhasil!";
  } else {
    document.getElementById("register-success").innerText =
      "Mohon isi semua field";
  }
}

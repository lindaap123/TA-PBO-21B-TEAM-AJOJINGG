// Fungsi untuk melakukan registrasi pengguna
function registerUser() {
  // Mengambil nilai dari elemen input dengan id "new-username" dan menyimpannya dalam variabel newUsername
  var newUsername = document.getElementById("new-username").value;
  // Mengambil nilai dari elemen input dengan id "new-password" dan menyimpannya dalam variabel newPassword
  var newPassword = document.getElementById("new-password").value;
  // Mengambil nilai dari elemen input dengan id "phone-number" dan menyimpannya dalam variabel phoneNumber
  var phoneNumber = document.getElementById("phone-number").value;
  // Mengambil nilai dari elemen input dengan id "email" dan menyimpannya dalam variabel email
  var email = document.getElementById("email").value;

  // Memeriksa apakah semua field telah diisi
  if (newUsername && newPassword && phoneNumber && email) {
    // Jika semua field diisi, menampilkan pesan keberhasilan registrasi
    document.getElementById("register-success").innerText =
      "Registrasi berhasil!";
  } else {
    // Jika ada field yang kosong, menampilkan pesan untuk mengisi semua field
    document.getElementById("register-success").innerText =
      "Mohon isi semua field";
  }
}

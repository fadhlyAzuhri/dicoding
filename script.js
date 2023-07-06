function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000) + 1;
}

function displayRandomNumber() {
  const resultElement = document.getElementById("result");
  
  // Cek apakah nomor undian sudah ada di local storage
  const savedNumber = localStorage.getItem("randomNumber");
  if (savedNumber) {
    resultElement.textContent = "Nomor Undian: " + savedNumber;
  } else {
    const randomNumber = generateRandomNumber();
    resultElement.textContent = "Nomor Undian: " + randomNumber;
    // Simpan nomor undian ke local storage
    localStorage.setItem("randomNumber", randomNumber);
  }
}

document.addEventListener("DOMContentLoaded", displayRandomNumber);

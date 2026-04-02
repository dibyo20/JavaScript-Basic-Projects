const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const button = document.querySelector("button");

function generateQRCode() {
    if (qrText.value.trim().length === 0) {
        document.getElementById("errorMsg").classList.add("active");
    } 
    if (qrText.value.trim().length > 0) {
        document.getElementById("errorMsg").classList.remove("active");
        qrImage.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            encodeURIComponent(qrText.value);
        imgBox.classList.add("active");
    }
}

button.addEventListener("click", generateQRCode);



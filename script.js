var form = document.querySelector(".formm");
var timer;
var resendCountdown = 30;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var phoneNumber = document.getElementById("phoneNumber").value;
    var digits = '0123456789';
    var OTP = '';
    for (var i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    document.getElementById("otpDisplay").innerHTML = "Generated OTP: " + OTP;
    document.getElementById("sendBtn").style.display = "none";
    document.getElementById("enteredOTP").style.display = "block";
    document.getElementById("bbtn").style.display = "block";
    startResendTimer();
});

function startResendTimer() {
    var seconds = resendCountdown;
    timer = setInterval(function() {
        document.getElementById("resendTimer").innerHTML = "Resend OTP in " + seconds + " seconds";
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            document.getElementById("resendTimer").innerHTML = "<button class='resendButton' onclick='generateOTP()'>Resend OTP</button>";
        }
    }, 1000);
}

function verifyOTP() {
    var enteredOTP = document.getElementById("enteredOTP").value;
    var generatedOTP = document.getElementById("otpDisplay").innerText.split(": ")[1];
    
    if (enteredOTP === generatedOTP) {
        alert("OTP is correct!");
        clearInterval(timer);
    } else {
        alert("OTP is incorrect!");
    }
}

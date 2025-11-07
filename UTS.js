document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openSignup");
    const modal =document.getElementById("signupModal");
    const closeBtn = document.getElementById("closeSignup");

    openBtn.addEventListener("click", function() {
        modal.style.display = "flex"
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display ="none"
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display ="none";
        }
    });
});


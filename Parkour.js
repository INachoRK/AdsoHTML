const modalLogin = document.getElementById("modalLogin");
const modalRegister = document.getElementById("modalRegister");

document.getElementById("abrirModalLogin").addEventListener("click", function () {
    modalLogin.style.display = "flex";
});

document.getElementById("abrirModalRegister").addEventListener("click", function () {
    modalRegister.style.display = "flex";
});

document.querySelectorAll(".cerrar").forEach(button => {
    button.addEventListener("click", function () {
        let modalId = this.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "none";
    });
});

window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});

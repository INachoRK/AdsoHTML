const adminUser = {
    email: "admin@skilltrade.com",
    password: "admin123",
    name: "Admin SkillTrade"
  };

  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#loginModal form");
    const registerForm = document.querySelector("#registerModal form");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      if (email === adminUser.email && password === adminUser.password) {
        window.location.href = "panelAdmin.html";
      } else {
        alert("Correo o contraseña incorrectos.");
      }
    });

    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = registerForm.querySelector('input[placeholder="Nombre completo"]').value;
      const email = registerForm.querySelector('input[type="email"]').value;
      const password = registerForm.querySelector('input[type="password"]').value;

      if (email === adminUser.email && password === adminUser.password) {
        window.location.href = "panelAdmin.html";
      } else {
        alert("Cuenta creada (simulada). Pero solo el admin registrado puede acceder al panel.");
      }
    });
});
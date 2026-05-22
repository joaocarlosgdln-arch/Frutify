function enviar() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();

  if (!nome || !email || !msg) {
    alert("Preencha nome, e-mail e mensagem.");
    return;
  }

  document.getElementById("toast").classList.add("visivel");
  ["nome", "email", "assunto", "msg"].forEach((id) => {
    document.getElementById(id).value = "";
  });

  setTimeout(() => {
    document.getElementById("toast").classList.remove("visivel");
  }, 4000);
}
window.addEventListener("DOMContentLoaded", function () {
  const user = localStorage.getItem("currentUser");
  const btnEntrar = document.querySelector(".login");

  if (user && btnEntrar) {
    const userData = JSON.parse(user);

    btnEntrar.textContent = `Sair (${userData.email})`;
    btnEntrar.onclick = function () {
      localStorage.removeItem("currentUser");
      window.location.reload();
    };
  }
});

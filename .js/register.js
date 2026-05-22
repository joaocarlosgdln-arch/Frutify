function fazerCadastro(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!name || !email || !password) {
    showError("Preencha todos os campos.");
    return;
  }

  if (password.length < 6) {
    showError("A senha precisa ter ao menos 6 caracteres.");
    return;
  }

  if (password !== confirm) {
    showError("As senhas não coincidem.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find((u) => u.email === email)) {
    showError("Este e-mail já está cadastrado.");
    return;
  }

  users.push({ name, email, pass: password });
  localStorage.setItem("users", JSON.stringify(users));

  showSuccess("Conta criada com sucesso! Redirecionando...");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
}

function showError(msg) {
  const el = document.getElementById("feedback");
  el.textContent = msg;
  el.style.color = "#c0392b";
  el.style.display = "block";
}

function showSuccess(msg) {
  const el = document.getElementById("feedback");
  el.textContent = msg;
  el.style.color = "#2d6a4f";
  el.style.display = "block";
}

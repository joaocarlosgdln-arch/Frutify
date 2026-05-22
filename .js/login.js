function fazerLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find((u) => u.email === email && u.pass === password);

  if (!user) {
    alert("E-mail ou senha incorretos.");
    return;
  }

  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      name: user.name,
      email: user.email,
    }),
  );

  window.location.href = "index.html";
}

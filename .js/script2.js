const secoes = document.querySelectorAll(".destaques");

secoes.forEach(function (secao) {
  const trilho = secao.querySelector(".trilho");
  const anterior = secao.querySelector(".anterior");
  const proximo = secao.querySelector(".proximo");

  let indice = 0;
  const totalProdutos = trilho.querySelectorAll(".produto").length;
  const visiveis = 4;
  const larguraProduto = 225;

  function moverTrilho() {
    const deslocamento = -indice * larguraProduto;
    trilho.style.transform = `translateX(${deslocamento}px)`;
  }

  anterior.addEventListener("click", function () {
    if (indice > 0) {
      indice--;
      moverTrilho();
    }
  });

  proximo.addEventListener("click", function () {
    if (indice < totalProdutos - visiveis) {
      indice++;
      moverTrilho();
    }
  });
});
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

const botao = document.querySelector(".btn_plataforma");

const elementoPlataformas = document.querySelector(".btn_plataforma .cartao_plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo")
});

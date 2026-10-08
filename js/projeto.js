const botaoIdioma = document.getElementById("language-toggle");

function aplicarIdioma() {
    const idioma = localStorage.getItem("idioma") || "pt";
    const elementos = document.querySelectorAll("[data-pt][data-en]");

    elementos.forEach((elemento) => {
        elemento.innerHTML = idioma === "en"
            ? elemento.getAttribute("data-en")
            : elemento.getAttribute("data-pt");
    });

    if (botaoIdioma) {
        botaoIdioma.textContent = idioma === "pt" ? "EN" : "PT";
    }

    document.documentElement.lang = idioma === "pt" ? "pt-BR" : "en";
}

function trocarIdioma() {
    const idiomaAtual = localStorage.getItem("idioma") || "pt";
    const novoIdioma = idiomaAtual === "pt" ? "en" : "pt";

    localStorage.setItem("idioma", novoIdioma);

    aplicarIdioma();
}

if (botaoIdioma) {
    botaoIdioma.addEventListener("click", trocarIdioma);
}

const blocos = document.querySelectorAll(".bloco");

function mostrarBlocos() {
    blocos.forEach((bloco) => {
        const posicao = bloco.getBoundingClientRect().top;

        if (posicao < window.innerHeight * 0.85) {
            bloco.classList.add("visivel");
        }
    });
}

window.addEventListener("scroll", mostrarBlocos);

mostrarBlocos();
aplicarIdioma();
const botaoIdioma = document.getElementById("language-toggle");
const botaoTema = document.getElementById("theme-toggle");

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

function aplicarTema() {
    const tema = localStorage.getItem("tema") || "claro";
    const temaEscuro = tema === "escuro";

    document.documentElement.classList.toggle("tema-escuro", temaEscuro);

    if (botaoTema) {
        botaoTema.setAttribute(
            "aria-label",
            temaEscuro ? "Ativar modo claro" : "Ativar modo escuro"
        );

        botaoTema.setAttribute("aria-pressed", String(temaEscuro));

        botaoTema.setAttribute(
            "title",
            temaEscuro ? "Ativar modo claro" : "Ativar modo escuro"
        );
    }
}

function trocarTema() {
    const temaAtual = localStorage.getItem("tema") || "claro";
    const novoTema = temaAtual === "claro" ? "escuro" : "claro";

    localStorage.setItem("tema", novoTema);

    aplicarTema();
}

if (botaoIdioma) {
    botaoIdioma.addEventListener("click", trocarIdioma);
}

if (botaoTema) {
    botaoTema.addEventListener("click", trocarTema);
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
aplicarTema();
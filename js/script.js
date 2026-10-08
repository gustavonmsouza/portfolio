function aplicarIdioma() {
    const idioma = localStorage.getItem("idioma") || "pt";
    const elementos = document.querySelectorAll("[data-pt][data-en]");

    elementos.forEach((elemento) => {
        if (idioma === "en") {
            elemento.textContent = elemento.getAttribute("data-en");
        } else {
            elemento.textContent = elemento.getAttribute("data-pt");
        }
    });

    const botaoIdioma = document.getElementById("language-toggle");

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

const botaoIdioma = document.getElementById("language-toggle");

if (botaoIdioma) {
    botaoIdioma.addEventListener("click", trocarIdioma);
}

function aplicarTema() {
    const tema = localStorage.getItem("tema") || "claro";
    const temaEscuro = tema === "escuro";
    const botaoTema = document.getElementById("theme-toggle");

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

const botaoTema = document.getElementById("theme-toggle");

if (botaoTema) {
    botaoTema.addEventListener("click", trocarTema);
}

aplicarIdioma();
aplicarTema();
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

aplicarIdioma();
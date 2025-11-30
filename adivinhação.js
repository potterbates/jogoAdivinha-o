let encontrarNumero = 0;
let tentativas = 0;
let numeroExcedido = 100;
let numeroNegativo = 1;

function gerarNumeroAleatorio() {
    encontrarNumero = parseInt(Math.random() * 100);
}

gerarNumeroAleatorio();

function verificarNumero() {
    let input = document.getElementById("input").value

    if (input < encontrarNumero) {
        tentativas++
        document.getElementById("menorMaior").textContent = "É um número MAIOR!";
        let tentativasRestantes = "Você tem 10 tentativas!" + " Tentativa número " + tentativas + ".";
        document.getElementById("tentativas").textContent = tentativasRestantes;
    }

    if (input > encontrarNumero) {
        tentativas++
        document.getElementById("menorMaior").textContent = "É um número MENOR!";
        let tentativasRestantes = "Você tem 10 tentativas!" + " Tentativa número " + tentativas + ".";
        document.getElementById("tentativas").textContent = tentativasRestantes;
    }

    if (input == encontrarNumero) {
        document.getElementById("menorMaior").textContent = "Parabéns. Você acertou! O número é " + encontrarNumero + ".";
        document.getElementById("tentativas").textContent = "Você acertou na tentativa número " + tentativas + ".";
    }

    if (tentativas > 10) {
        let tentativasRestantes = "Você perdeu! O número era " + "'" + encontrarNumero + "'.";
        document.getElementById("tentativas").textContent = tentativasRestantes;
        document.getElementById("menorMaior").textContent = "";
    }

    if (input > numeroExcedido || input < numeroNegativo) {
        document.getElementById("menorMaior").textContent = "";
        document.getElementById("tentativas").textContent = "";
        document.getElementById("numeroExcedido").textContent = "Digite um número de 1 a 100."
    } else {
        document.getElementById("numeroExcedido").textContent = "";
    }

    document.getElementById('input').value = ""
}




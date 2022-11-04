// Cálculadora com cada operação sendo uma função



//while
let tipoOperacao = prompt("Que tipo de operação gostaria? (+,-,*,/,sair)");
console.log(tipoOperacao);
while (tipoOperacao !== "sair") {
    let a = prompt("Primeiro número?");
    a = parseInt(a);
    let b = prompt("Segundo número?");
    b = parseInt(b);
    let r = 0;

    msg = `Operação de ${tipoOperacao} com os números ${a} e ${b} é: `;
    switch (tipoOperacao) {
        case "+": r = soma(a,b); break;
        case "-": r = subtracao(a,b); break;
        case "*": r = multiplicacao(a,b); break;
        case "/": r = divisao(a,b); break;
    }
    msg = msg.concat(`${r}`);

    console.log(msg);

    tipoOperacao = prompt("Que tipo de operação gostaria? (+,-,*,/,sair)");
}
//switch

//funções
function soma (a, b) {
    return a+b;
}

function subtracao (a, b) {
    return a-b;
}

function multiplicacao (a, b) {
    return a*b;
}
function divisao (a, b) {
    return a/b;
}
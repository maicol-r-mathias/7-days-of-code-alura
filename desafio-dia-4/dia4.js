const numeroAdivinha = 7;
let contador = 0;

let numero = prompt("Qual valor você gostaria de chutar? (0-10)");
while (contador < 3 && numero != numeroAdivinha) {
    console.log('Tente novamente!');
    numero = prompt("Qual valor você gostaria de chutar? (0-10)");
    contador++;
}

if (numero == numeroAdivinha) {
    console.log('Parabéns, você acertou');
} else {
    console.log(`O número correto era ${numeroAdivinha}`);
}
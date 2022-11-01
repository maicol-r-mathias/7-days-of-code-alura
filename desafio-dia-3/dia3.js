/* 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue.
Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre
seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar 
Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se
especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de
cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais
alguma tecnologia que você gostaria de aprender?", continue apresentando para ela
o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois,
apresente uma mensagem comentando algo sobre a linguagem inserida.

*/




const input = prompt("Qual área você quer seguir? (1:front-end; 2:back-end");

if (input == 1 ) {
    console.log("Você escolheu a carreira de front-end")
    const input2 = prompt("Qual área de front-end? (1:react; 2:vue");
        if (input2 == 1) {
            console.log("Você focará em react");
        } else {
            console.log("Você focará em vue");
        }
} else {
    console.log("Você escolheu a carreira de front-end")
    const input2 = prompt("Qual área do back-end? (1:c#; 2:java");
    if (input2 == 1) {
        console.log("Você focará em c#");
    } else {
        console.log("Você focará em java");
    }
}

const input3 = prompt("Quais serão seus próximos passos? (1:especializar; 2:full-stack)");
if (input3 == 1) {
    console.log("Você se especializará");
} else {
    console.log("Você irá virar full-stack");
}

let input4 = prompt("No que mais gostaria de se especializar? (para terminar digite sair)");
while (input4 != "sair") {
    console.log(`Me parece que vc quer estudar mais ${input4}`);
    input4 = prompt("No que mais gostaria de se especializar? (para terminar digite sair)");
}



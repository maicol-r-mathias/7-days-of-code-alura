// Seleciona botão enviar
const botaoEnviar = document.querySelector('.botao-enviar');
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const linguagemProgramacao = document.querySelector('#linguagem-programacao');

/*const teste = "oi"
const txt_msg = `Hello, ${teste}`;
console.log(txt_msg);*/

botaoEnviar.onclick = () => {
        
    const msg = `Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagemProgramacao.value}!`;
    alert(msg);
}
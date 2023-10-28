const olaMundo = 'Olá Mundo, introdução a JS.';
const dataAtual = new Date();

console.log(olaMundo);
console.log(`Data hora: ${dataAtual}`);

function mensagem(mensagem) {
    alert(mensagem);
}

function mensagem2() {
    mensagem('Aprendendo funções');
}

const mensagemFinal = (mensagemFinal) =>{
    console.log(mensagemFinal);
}

mensagemFinal('Concluímos a execução');
mensagemFinal('Segunda mensagem');
mensagemFinal('Terceira mensagem');
mensagemFinal('Quarta mensagem');
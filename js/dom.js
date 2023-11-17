//const divs = document.getElementsByTagName('div');
const divs = $('div');
//const h2s = document.getElementsByTagName('h2');
const h2s = $('h2');
//const titulo = document.getElementById('titulo');
const titulo = $('#titulo');
//const paragrafo = document.getElementById('paragrafo');
const paragrafo = $('#paragrafo');
//const input = document.getElementById('input');
const input = $('input');
//const elementsMarginTop2 = document.getElementsByClassName('mt-2');
const elementsMarginTop2 = $('.mt-2');

function alterarHtml(){
    titulo.text(input.val());
    titulo.css('color', '#ac4389');
    for(let element of elementsMarginTop2){
        $(element).addClass('mt-4');
    }

    input.val('');

    const novoP = document.createElement('p');
    novoP.textContent = 'Novo texto adicionado via JavaScript.'

    paragrafo.after(novoP);
}
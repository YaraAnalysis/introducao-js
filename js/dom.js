const divs = document.getElementsByTagName('div');
console.log(divs);
const h1s = document.getElementsByTagName('h1');
console.log(h1s);
const titulo = document.getElementById('titulo');
console.log(titulo);
const elementsMarginTop2 = document.getElementsByClassName('mt-2');
console.log(elementsMarginTop2);

function alterarHtml(){
    titulo.textContent = 'Novo título';
    titulo.style.color = '#ac4389';
    //elementsMarginTop2.className = 'mt-4';
}
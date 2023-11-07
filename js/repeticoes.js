
// exibir no console 150 multiplos de 3

for (let multiplo = 0; multiplo < 150; multiplo++){
    //console.log(multiplo*3);
}

// executar enquanto a variavel de controle for divisão exata de 23
let indice = 1;
while(indice % 23 !== 0){
    //console.log(indice);
    indice++;
}

// executar uma primeira vez e verificar se o numero é par
let numero = 0;

do{
    //console.log(numero);
    numero++;
}while(numero % 2 !== 0);

// percorrer uma lista de produtos e exibí-los

const produtos = ['café', 'shampoo', 'azeite', 'bolacha', 'açúcar', 'carne'];
for(const produto of produtos){
    console.log(produto);
}
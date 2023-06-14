
//Pega os valores de todos os botões
const listaTeclas = document.querySelectorAll('input[type=button]');
const display =  document.querySelector('input[type=tel]');

function valorBotao(valor){
    display.value = display.value + listaTeclas[valor].value;
}

function limpaDisplay(){
    display.value = '' // coloca o valor do display como vazio
}

// let i = 0;
// while (i < listaTeclas.length){
//     const tecla = listaTeclas[i];
//     const indice = i
//     tecla.onclick = function(){
//         valorBotao(indice);     
//     }
//     i++;
// }

for (let i = 0; i < listaTeclas.length; i++){
        const tecla = listaTeclas[i];
        tecla.onclick = function(){
        valorBotao(i);     
    }
}
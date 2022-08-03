var botao = document.querySelector("main");

var exibirPunicao = document.querySelector(".resultado");
var exibirNumero = document.querySelector('.numero');

var quantidade = [parseInt(prompt('Quantos malucos tão bebendo?'))]
var numeros = []
console.log(quantidade)
console.log(numeros)

function jogo(quantidade){
    var participantes = [quantidade.length];
    var numero = []
    var posicao=0
    while(posicao < participantes.length){

    for(var i = 0 ; i < participantes.length;i++){

    numero=geraNovoNumero(participantes[i]);
    //  numero.push(numeros);
    // numeros.push(numero)

    // 
    if(i >= participantes.length){
        alert('O jogo acabou!');
        exibirPunicao.textContent=("o jogo acabou!")
    }
    }
    posicao++
    }
}
function geraNovoNumero(){

    var numero = Math.round(Math.random()*10);
    var zero = verificaZero(numero)
    var cem = verifica100(numero)
    exibirNumero.textContent = numero;

    if (zero == true){
        exibirPunicao.textContent=("você perdeu, beba 2 doses!")

    } 
    if (cem == true){
        exibirPunicao.textContent=("você ganhou, todos menos você bebem 2 doses!")
    } 
    if(!zero && !cem){
        var limpaResultado = document.querySelector('.resultado');
        limpaResultado.innerHTML=''
        numeros.push(numero)
    }
  
    console.log(numero)
    // console.log(numeros)

}
botao.addEventListener('click', jogo)

function verificaZero(numero){
    if(numero == 0){

        return true
    }
}
function verifica100(numero){
    if(numero == 10){

        return true
    }
}


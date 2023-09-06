const amarelo = document.querySelector('.amarelo');

const vermelho = document.querySelector('.vermelho');

const verde = document.querySelector('.verde');



//uma variavel(var) manipula dados vindos do html por meio de  identificadores(id)

//uma constante(const) manipula elementos vindos do html por meio de classes(querySelector)


let contador = 1;



setInterval(() => {

if (contador <= 1) {

 vermelho.classList.add('vemelho-ativo');

}else if (contador === 5) {
 amarelo.classList.add('amarelo-ativo');
 vermelho.classList.remove('vermelho-ativo')

}else if (contador === 10) {

verde.classList.add('verde-ativo');

 verde.classList.remove('amarelo-ativo');

}else if (contador === 15) {
 verde.classList.remove('verde-ativo');
 contador = 0;

}

contador += 1;

}, 1000);
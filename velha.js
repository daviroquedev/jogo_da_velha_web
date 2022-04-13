var jogador, vencedor = null
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')


mudarJogador('X');

// função do quadrado individual 

function escolherQuadrado(id) {
	

	if (vencedor !== null ){
		return
	}

	var quadrado = document.getElementById(id)

	if (quadrado.innerHTML !== '-') {
		return
	}

	quadrado.innerHTML = jogador;
	quadrado.style.color = '#000';

	if (jogador === 'X') {
		jogador = 'O';
	} else {
		jogador = 'X'
	}

	mudarJogador(jogador)
	checarVencedor();

}

// função que alterna jogadores X e O

function mudarJogador(valor) {
	jogador = valor;
	jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
	var quadrado1 = document.getElementById('1')
	var quadrado2 = document.getElementById('2')
	var quadrado3 = document.getElementById('3')
	var quadrado4 = document.getElementById('4')
	var quadrado5 = document.getElementById('5')
	var quadrado6 = document.getElementById('6')
	var quadrado7 = document.getElementById('7')
	var quadrado8 = document.getElementById('8')
	var quadrado9 = document.getElementById('9')

	// linha no formato ( --- ) reto deitado 1-2-3 
	if(checaSequencia(quadrado1,quadrado2,quadrado3)){
		mudarCorQuadrado(quadrado1,quadrado2,quadrado3);
		mudarVencedor(quadrado1);
		return;
	}
	// linha no formato ( --- ) reto deitado 4-5-6 
	if(checaSequencia(quadrado4,quadrado5,quadrado6)){
		mudarCorQuadrado(quadrado4,quadrado5,quadrado6);
		mudarVencedor(quadrado4);
		return;

	// linha no formato ( --- ) reto deitado 7-8-9 
	}	if(checaSequencia(quadrado7,quadrado8,quadrado9)){
		mudarCorQuadrado(quadrado7,quadrado8,quadrado9);
		mudarVencedor(quadrado7);
		return;
	}	// linha no formato ( | ) reto 1-4-7 
	if(checaSequencia(quadrado1,quadrado4,quadrado7)){
		mudarCorQuadrado(quadrado1,quadrado4,quadrado7);
		mudarVencedor(quadrado4);
		return;
	}
	// linha no formato ( | ) reto 2-5-8 
	if(checaSequencia(quadrado2,quadrado5,quadrado8)){
		mudarCorQuadrado(quadrado2,quadrado5,quadrado8);
		mudarVencedor(quadrado5);
		return;
	}
	// linha no formato ( | ) reto 3-6-9 
	if(checaSequencia(quadrado3,quadrado6,quadrado9)){
		mudarCorQuadrado(quadrado3,quadrado6,quadrado9);
		mudarVencedor(quadrado3);
		return;
	}
	// linha no formato ( / ) diagonal 1-5-9 
	if(checaSequencia(quadrado1,quadrado5,quadrado9)){
		mudarCorQuadrado(quadrado1,quadrado5,quadrado9);
		mudarVencedor(quadrado1);
		return;
	}
	// linha no formato ( \ ) diagonal  3-5-7
	if(checaSequencia(quadrado3,quadrado5,quadrado7)){
		mudarCorQuadrado(quadrado3,quadrado5,quadrado7);
		mudarVencedor(quadrado5);
	}
}

function mudarVencedor(quadrado){
	vencedor = quadrado.innerHTML;
	vencedorSelecionado.innerHTML = vencedor;


}

function mudarCorQuadrado(quadrado1,quadrado2,quadrado3){
	quadrado1.style.background = "#0f0"
	quadrado2.style.background = "#0f0"
	quadrado3.style.background = "#0f0"
}


function checaSequencia(quadrado1, quadrado2, quadrado3) {
	var eigual = false
	if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
		eigual = true;
	}
	return eigual;
}


// INICIO FUNÇÃO RESTART JOGO

function reiniciar(){
	vencedor = null;
    vencedorSelecionado.innerHTML = ' ';
	

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background ='#a9aba6';
        quadrado.style.color = '#a9aba6';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
	
}

// INICIO FUNÇÃO DARK MODE
function changeMode() {
	changeClasses();
	changeText();

}

function changeClasses() {
	button.classList.toggle('dark-mode')
	h1.classList.toggle('dark-mode')
	body.classList.toggle('dark-mode')
	footer.classList.toggle('dark-mode')
	quadradoCollor.getElementsByClassName('quadrado')
}

function changeText() {
	const lightMode = "Light Mode"
	const darkMode = "Dark Mode"

	if (button.classList.contains('dark-mode')) {
		button.innerHTML = "Light Mode"
		return;
	}

	button.innerHTML = darkMode;

}

const quadradoCollor = document.getElementsByClassName('quadrado')
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]


console.log(body)

button.addEventListener('click', changeMode)

// FIM MODO ESCURO 
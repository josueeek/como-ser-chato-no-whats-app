/*

Hoje iremos MUDAR a vida da pessoa que não te responde no whatsappp... 
Que tal enviar mensagens pra ela até obter uma resposta?! 
Sensacional não acha?! Mas, somos devs, correto?! Então vamos automatizar esse paranauê!

Para utilizar:
- Abra o web.whatsapp.com;
- Selecione a conversa que você quer;
- Abra o console e cole o código que está no abaixo;
- Aguarde e verá uma mensagem sendo enviada a cada segundo até obter uma mensagem de retorno ou atingir o limite de mensagens.
- Para parar manualmente use o clearInterval(i)

Use com responsabilidade e moderação... O intuito é arrancar um riso ;)

*/

var inteiroAleatorio = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var fraseAleatoria = function(frases) {
    return frases[inteiroAleatorio(0, frases.length - 1)];
};

let counter = 0;

// Limite de mensagens
// Se quiser enviar sem limites da zueira (porque the zuera never ends), basta modificar o valor para 0. 
let limit = 10000;

// Mensagem que será enviada 
let textToSend = "??????";

// Mensagem que será enviada 
var dilmes = [
    'Aqui é Body Builder Ipsum PO***!',
    'É esse que a gente quer, é ele que nóis vamo buscar.',
    'Não vai dá não.',
    'BIIRRRRRRRRLL!!!!',
    'AHHHHHHHHHHHHHHHHHHHHHH...., po***!',
    'Sabe o que é isso daí? Trapézio descendente é o nome disso aí.',
    'Eu quero esse 13 daqui a pouquinho aí.',
    'É verão o ano todo vem cumpadi.',
    'É 37 anos carvalho!',
    'Birl!',
    'É 13 po***!',
    'Bora carvalho, você quer ver essa po*** velho.',
    'Vamo monstro!',
    'Vai subir árvore é o carvalho po***!',
    'Vem po***!',
    'Sai de casa comi pra carvalho po***.',
    'Birl!',
    'BIRL!',
    'BIIRRRRRRRRLL!!!',
    'AHHHHHHHHHHHHHHHHHHHHHH..., po***!',
    'Vo derrubar tudo essas árvore do parque ibirapuera.',
    'PO***',
    'Aqui nóis constrói fibra, não é água com músculo.',
    'Ajuda o maluco que tá doente.',
    'É nóis caio é trapezera buscando caio!',
    'Ele tá olhando pra gente.',
    'Birl!',
    'Negativa Bambam negativa.',
    'BIIRRRRRRRRLL!!!!',
    'Boraaa, Hora do Show Po***.',
    'Aqui é bodybuilder po***!',
    'Ó o homem ali po***!',
    'Eita po***!',
    'tá saindo da jaula o monstro!',
    'Tá comigo po***.',
    'BIIRRRRRRRRLL!!!!'
];
// Mensagem que será enviada 
var textToSendGEMIDAO = "OOOWH AHHHWN WOOOO AAAAHN WAAAAA AAAAAAHN ANN WAAA!";


let i = setInterval(function() {
	window.InputEvent = window.Event || window.InputEvent;
	let d = new Date();
	let event = new InputEvent('input', {
		bubbles: true
	});
    let textbox = document.querySelector('div._1UWac._1LbR4 > div._13NKt.copyable-text.selectable-text'); // trocar caso as classes do WPP web altere
	
	// O envio para quando a pessoa responde, caso queira remover, basta apagar essa condição. 
	if ( counter > 0 ) {
        let lastMessage = document.querySelector('div._2wUmf.message-in.focusable-list-item');
		if (lastMessage) {
			if (lastMessage.classList.contains('message-in')) {
			// textToSend = "Finalmente respondeu!";
			textToSendGEMIDAO= "Você caiu no gemidão do zap zap!!";
			clearInterval(i);
		}
		}
		
	}

	textbox.textContent = textToSendGEMIDAO; //fraseAleatoria(dilmes);;
	textbox.dispatchEvent(event);
	document.querySelector("button._4sWnG").click();
    counter++;


	if (counter === limit && limit !== 0)
		clearInterval(i);

	console.log("Já enviei " + counter + ' mensagens.')

}, 1000); // 1000 = 1 segundo, tempo que será enviada cada mensagem. 
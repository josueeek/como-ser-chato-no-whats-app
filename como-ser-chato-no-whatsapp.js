/*

Hoje iremos MUDAR a vida da pessoa que n�o te responde no whatsappp... 
Que tal enviar mensagens pra ela at� obter uma resposta?! 
Sensacional n�o acha?! Mas, somos devs, correto?! Ent�o vamos automatizar esse paranau�!

Para utilizar:
- Abra o web.whatsapp.com;
- Selecione a conversa que voc� quer;
- Abra o console e cole o c�digo que est� no abaixo;
- Aguarde e ver� uma mensagem sendo enviada a cada segundo at� obter uma mensagem de retorno ou atingir o limite de mensagens.
- Para parar manualmente use o clearInterval(i)

Use com responsabilidade e modera��o... O intuito � arrancar um riso ;)

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

// Mensagem que ser� enviada 
let textToSend = "??????";

// Mensagem que ser� enviada 
var dilmes = [
    'Aqui � Body Builder Ipsum PO***!',
    '� esse que a gente quer, � ele que n�is vamo buscar.',
    'N�o vai d� n�o.',
    'BIIRRRRRRRRLL!!!!',
    'AHHHHHHHHHHHHHHHHHHHHHH...., po***!',
    'Sabe o que � isso da�? Trap�zio descendente � o nome disso a�.',
    'Eu quero esse 13 daqui a pouquinho a�.',
    '� ver�o o ano todo vem cumpadi.',
    '� 37 anos carvalho!',
    'Birl!',
    '� 13 po***!',
    'Bora carvalho, voc� quer ver essa po*** velho.',
    'Vamo monstro!',
    'Vai subir �rvore � o carvalho po***!',
    'Vem po***!',
    'Sai de casa comi pra carvalho po***.',
    'Birl!',
    'BIRL!',
    'BIIRRRRRRRRLL!!!',
    'AHHHHHHHHHHHHHHHHHHHHHH..., po***!',
    'Vo derrubar tudo essas �rvore do parque ibirapuera.',
    'PO***',
    'Aqui n�is constr�i fibra, n�o � �gua com m�sculo.',
    'Ajuda o maluco que t� doente.',
    '� n�is caio � trapezera buscando caio!',
    'Ele t� olhando pra gente.',
    'Birl!',
    'Negativa Bambam negativa.',
    'BIIRRRRRRRRLL!!!!',
    'Boraaa, Hora do Show Po***.',
    'Aqui � bodybuilder po***!',
    '� o homem ali po***!',
    'Eita po***!',
    't� saindo da jaula o monstro!',
    'T� comigo po***.',
    'BIIRRRRRRRRLL!!!!'
];
// Mensagem que ser� enviada 
var textToSendGEMIDAO = "OOOWH AHHHWN WOOOO AAAAHN WAAAAA AAAAAAHN ANN WAAA!";


let i = setInterval(function() {
	window.InputEvent = window.Event || window.InputEvent;
	let d = new Date();
	let event = new InputEvent('input', {
		bubbles: true
	});
    let textbox = document.querySelector('div._1UWac._1LbR4 > div._13NKt.copyable-text.selectable-text'); // trocar caso as classes do WPP web altere
	
	// O envio para quando a pessoa responde, caso queira remover, basta apagar essa condi��o. 
	if ( counter > 0 ) {
        let lastMessage = document.querySelector('div._2wUmf.message-in.focusable-list-item');
		if (lastMessage) {
			if (lastMessage.classList.contains('message-in')) {
			// textToSend = "Finalmente respondeu!";
			textToSendGEMIDAO= "Voc� caiu no gemid�o do zap zap!!";
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

	console.log("J� enviei " + counter + ' mensagens.')

}, 1000); // 1000 = 1 segundo, tempo que ser� enviada cada mensagem. 
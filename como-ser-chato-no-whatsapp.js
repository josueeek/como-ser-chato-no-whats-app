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

let counter = 0;

// Limite de mensagens
// Se quiser enviar sem limites da zueira (porque the zuera never ends), basta modificar o valor para 0. 
let limit = 1000;

// Mensagem que será enviada 
let textToSend = "Bruno me responde.";

let i = setInterval(function() {
	window.InputEvent = window.Event || window.InputEvent;
	let d = new Date();
	let event = new InputEvent('input', {
		bubbles: true
	});
    let textbox = document.querySelector('div._1UWac._1LbR4 > div._13NKt.copyable-text.selectable-text'); // trocar caso as classes do WPP web altere
	
	// O envio para quando a pessoa responde, caso queira remover, basta apagar essa condição. 
	if ( counter > 0 ) {
        let lastMessage = document.querySelector('div._2wUmf');

		if ( lastMessage.classList.contains('message-in') ) {
			textToSend = "Finalmente respondeu!";
			clearInterval(i);
		}
	}

	textbox.textContent = textToSend;
	textbox.dispatchEvent(event);
	document.querySelector("button._4sWnG").click();
    counter++;


	if (counter === limit && limit !== 0)
		clearInterval(i);

	console.log("Já enviei " + counter + ' mensagens.')

}, 1000); // 1000 = 1 segundo, tempo que será enviada cada mensagem. 
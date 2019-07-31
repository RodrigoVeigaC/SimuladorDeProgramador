var nomeDoPrograma = document.querySelector("#nomeDoPrograma");

op1.addEventListener("click", function(){

	if (dinheiro.textContent >= 200) {

		dinheiro.textContent = dinheiro.textContent - 200;
		nomeDoPrograma.textContent = "Calculadora";
		valorClick = 5;
		op1.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op2.addEventListener("click", function(){

	if (dinheiro.textContent >= 2000) {

		dinheiro.textContent = dinheiro.textContent - 2000;
		nomeDoPrograma.textContent = "Jogo da Forca";
		valorClick = 25;
		op2.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op3.addEventListener("click", function(){

	if (dinheiro.textContent >= 50000) {

		dinheiro.textContent = dinheiro.textContent - 50000;
		nomeDoPrograma.textContent = "Acre Simulator - No Internet";
		valorClick = 100;
		op3.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op4.addEventListener("click", function(){

	if (dinheiro.textContent >= 200000) {

		dinheiro.textContent = dinheiro.textContent - 200000;
		nomeDoPrograma.textContent = "Site Escolar";
		valorClick = 500;
		op4.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op5.addEventListener("click", function(){

	if (dinheiro.textContent >= 500000) {

		dinheiro.textContent = dinheiro.textContent - 500000;
		nomeDoPrograma.textContent = "App de Entrega - Delivery";
		valorClick = 2000;
		op5.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op6.addEventListener("click", function(){

	if (dinheiro.textContent >= 800000) {

		dinheiro.textContent = dinheiro.textContent - 800000;
		nomeDoPrograma.textContent = "Loja Virtual";
		valorClick = 10000;
		op6.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op7.addEventListener("click", function(){

	if (dinheiro.textContent >= 2000000) {

		dinheiro.textContent = dinheiro.textContent - 2000000;
		nomeDoPrograma.textContent = "Super Descobirdor de Senhas WiFi 9000";
		valorClick = 25000;
		op7.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op8.addEventListener("click", function(){

	if (dinheiro.textContent >= 10000000) {

		dinheiro.textContent = dinheiro.textContent - 10000000;
		nomeDoPrograma.textContent = "Hackeador da NASA - Space Invaders";
		valorClick = 100000;
		op8.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op9.addEventListener("click", function(){

	if (dinheiro.textContent >= 200000000) {

		dinheiro.textContent = dinheiro.textContent - 200000000;
		nomeDoPrograma.textContent = "Realidade Virtual de Imersão Total - Sword Art Online";
		valorClick = 500000;
		op9.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});

op10.addEventListener("click", function(){

	if (dinheiro.textContent >= 999999999) {

		dinheiro.textContent = dinheiro.textContent - 999999999;
		nomeDoPrograma.textContent = "O JOGO DA COBRINHA!!!";
		valorClick = 1000000000;
		op10.remove();

	}
	else{

		alert("Você não tem dinheiro suficiente!");

	}

});
var dinheiro = document.querySelector("#dinheiro");
dinheiro.textContent = 0;

var op1 = document.querySelector("#op1");
var op2 = document.querySelector("#op2");
var op3 = document.querySelector("#op3");
var op4 = document.querySelector("#op4");
var op5 = document.querySelector("#op5");
var op6 = document.querySelector("#op6");
var op7 = document.querySelector("#op7");
var op8 = document.querySelector("#op8");
var op9 = document.querySelector("#op9");
var op10 = document.querySelector("#op10");

var valorClick = 1;

var btnProgramar = document.querySelector("#btnProgramar");
btnProgramar.addEventListener("click", function(){

	var valorAtual = dinheiro.textContent;
	valorAtual = parseInt(valorAtual,10);
	valorAtual = valorAtual + valorClick;
	dinheiro.textContent = valorAtual.toFixed(2);

});







	

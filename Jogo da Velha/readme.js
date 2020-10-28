localStorage.setItem("jogador1", "1");
localStorage.setItem("jogador2", "2");

function editarJogador1() {
	jogador1 = prompt(`Nome do jogador ${jogador1}`);
	$("#jogador1").text(jogador1);
	localStorage.setItem("jogador1", jogador1);
}

function editarJogador2() {
	jogador2 = prompt(`Nome do jogador ${jogador2}`);
	$("#jogador2").text(jogador2);
	localStorage.setItem("jogador2", jogador2);
}
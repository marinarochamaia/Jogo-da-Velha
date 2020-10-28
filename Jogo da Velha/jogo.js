var jogador1 = localStorage.getItem("jogador1");
var jogador2 = localStorage.getItem("jogador2");

$(function() {
	
	var vez = 1;
	var vencedor = "";

	function casasIguais(a, b, c) {
		var casaA = $("#casa" + a);
		var casaB = $("#casa" + b);
		var casaC = $("#casa" + c);
		var bgA = $("#casa" + a).css("background-image");
		var bgB = $("#casa" + b).css("background-image");
		var bgC = $("#casa" + c).css("background-image");
		
		if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
			if(bgA.indexOf("1.png") >= 0)
				vencedor = jogador1;
			else
				vencedor = jogador2;

			return true;
		}

		return false;
}

	function verificaVelha(a, b, c ,d, e, f, g, h, i){
		var bgA = $("#casa" + a).css("background-image");
		var bgB = $("#casa" + b).css("background-image");
		var bgC = $("#casa" + c).css("background-image");
		var bgD = $("#casa" + d).css("background-image");
		var bgE = $("#casa" + e).css("background-image");
		var bgF = $("#casa" + f).css("background-image");
		var bgG = $("#casa" + g).css("background-image");
		var bgH = $("#casa" + h).css("background-image");
		var bgI = $("#casa" + i).css("background-image");
		
		if((bgA != "none" && bgA != "") && (bgB != "none" && bgB != "") && (bgC != "none" && bgC != "") && (bgD != "none" && bgD != "")
			&& (bgE != "none" && bgE != "") && (bgF != "none" && bgF != "") && (bgG != "none" && bgG != "") && (bgH != "none" && bgH != "")
			&& (bgI != "none" && bgI != "")){
				
			return true;
		}
			return false;
	}

	function verificarFimDeJogo(){
		
		if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
			casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
			casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
			) {
				$("#resultado").html(`<h2>O jogador ${vencedor} venceu!</h2>`);
				$(".casa").off("click");
			}
			else if(verificaVelha(1,2,3,4,5,6,7,8,9)){
				$("#resultado").html(`<h2>Partida Finalizada!</h2>`);
				$(".casa").off("click");
			}
		}

		$(".casa").click(function(){
			var bg = $(this).css("background-image");
			
		if(bg == "none" || bg == "") {          
			var fig = "url(" + vez.toString() + ".png)";
			$(this).css("background", fig);
			vez = (vez == 1 ? 2 : 1); 
			verificarFimDeJogo();
		}
	});
	
	function create_UUID(){
		var dt = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (dt + Math.random()*16)%16 | 0;
			dt = Math.floor(dt/16);
			return (c=='x' ? r :(r&0x3|0x8)).toString(16);
		});
		return uuid;
	}

	function get_UUID(){
		var id = create_UUID();
			return(id);
	}

});


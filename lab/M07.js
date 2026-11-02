
const prompt=require("prompt-sync")();

const senha_correta="caju2026"
let tentativas=3;
let login=true;

let senha= prompt("Digite sua senha")



while(login===true){




		if(senha!=senha_correta && tentativas>=0 ) {


		 console.log("Senha incorreta")
		 tentativas=tentativas-1;
		 console.log(tentativas);

		 let senha= prompt("Digite sua senha")	


		}

		else if(tentativas=0){


		 console.log("Conta bloqueada")
		 break;		


		}




}

		if (senha===senha_correta) {


		 console.log("Acesso liberado")	


		}

		





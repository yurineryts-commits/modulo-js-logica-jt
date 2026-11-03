
const prompt=require("prompt-sync")();

const senha_correta="caju2026"
let tentativas=2;
let login=true;

let senha= prompt("Digite sua senha:")



while(login===true){


		if(senha!=senha_correta && tentativas>=1 ) {


		 console.log("Senha incorreta")
		 tentativas=tentativas-1;
		 console.log("Tentativas restantes",tentativas);
		 console.log("Tente novamente:");

		 let senha= prompt("Digite sua senha:")	


		}

		else if(tentativas===0){


		 console.log("Conta bloqueada")
		 break;		
		


		}


		if (senha===senha_correta) {


		 console.log("Acesso liberado")
		 break;		


		}




}

	
		





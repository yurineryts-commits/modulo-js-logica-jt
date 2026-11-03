
const prompt=require("prompt-sync")();

const senha_correta="caju2026"
let tentativas=3;
let login=true;

// function senha() {
// 	// body...

// let senha= prompt("Digite sua senha:")	
// }

let senha= prompt("Digite sua senha:")

// senha()

while(login===true){


		if(senha!=senha_correta && tentativas>=2 ) {


		 console.log("Senha incorreta")
		 tentativas=tentativas-1;
		 console.log("Tentativas restantes",tentativas);
		 console.log("Tente novamente:");
		 // senha()
		 senha= prompt("Digite sua senha:")	


		}

		else if(tentativas===1){


		 console.log("Conta bloqueada")
		 break;		
		


		}


		if (senha===senha_correta) {


		 console.log("Acesso liberado")
		 break;		


		}




}

	
		





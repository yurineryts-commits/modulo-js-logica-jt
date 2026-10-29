

let pessoas= 10;
let lugares= 40;
let veiculos=0;
// let sobra= pessoas%lugares;


// console.log(pessoas%lugares)


if (pessoas>lugares && pessoas%lugares===0){ // Se o numero de pessoas for maior  a de lugares e o resto da divisão entre os dois for 0

	veiculos= pessoas/ lugares
	console.log("A quantidade de onibus necessárias é: " , veiculos.toFixed(0));

}

if (pessoas<=lugares){ //Se o numero de pessoas e de lugares for o mesmo então a divisão sempre sera 1

	veiculos=1;
	console.log("A quantidade de onibus necessárias é: " , veiculos.toFixed(0));

}


if (pessoas%lugares>0 && pessoas>lugares){

	veiculos= pessoas/ lugares
	veiculos=veiculos + 1 ;
	console.log("A quantidade de onibus necessárias é: " , veiculos.toFixed(0));


}







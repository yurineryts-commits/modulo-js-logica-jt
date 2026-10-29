

let pessoas= 40;
let lugares= 40;
let veiculos=0;
// let sobra= pessoas%lugares;


// console.log(pessoas%lugares)


if (pessoas>=lugares && pessoas%lugares<=0){

	veiculos= pessoas/ lugares
	console.log("A quantidade de onibus necessárias é: " , veiculos.toFixed(0));

}

if (pessoas===lugares){

	veiculos=1;
	console.log("A quantidade de onibus necessárias é: " , veiculos.toFixed(0));

}


if (pessoas%lugares>0 && pessoas>lugares){

	veiculos= pessoas/ lugares
	veiculos=veiculos + 1 ;
	console.log("A quantidade de onibus necessárias é: " , veiculos.toFixed(0));


}







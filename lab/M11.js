
const multaLeve= 2;
const multaPesada=3.50;
let   dias=3;
let   valorMaximo=0;
let	  valor=0;



// for (dias=0 ; valorMaximo<50; dias++) {
		
// 	dias++;
// }


// for(dias=0; dias<=5; dias++){


// 	valor=multaLeve*dias
	
// 	// console.log(valor);
// }


if (dias<=5 && valor<50) {


	valor=multaLeve*dias

}


if (dias>=6 && valor<50) {


	valor=10+ ((dias-5)*multaPesada)

}


if (dias>=6 && valor>50) {


	valor=50;

}


console.log("O valor da multa é:RS", valor.toFixed(2));





// if (dias<=5 && valorMaximo<=50) {

	
// 	valorMaximo= dias*multaLeve;
// 	console.log("A multa é de: " ,valorMaximo)

// }

// if (dias>5 && valorMaximo<=50 valorMaximo!=0) {

	
// 	valorMaximo= dias*multaPesada;
// 	console.log("A multa é de: " ,valorMaximo)

// }
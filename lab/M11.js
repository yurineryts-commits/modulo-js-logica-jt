
const multaLeve= 2;
const multaPesada=3.50;
let   dias=0;
let   valorMaximo=0;



	for (dias=0 ; valorMaximo<50; dias++) {
		
		valorMaximo++;
	}


if (dias<=5 && valorMaximo<50) {

	
	valorMaximo= dias*multaLeve;
	console.log("A multa é de: " ,valorMaximo)

}

if (dias>5 && valorMaximo<50) {

	
	valorMaximo= dias*multaPesada;
	console.log("A multa é de: " ,valorMaximo)

}
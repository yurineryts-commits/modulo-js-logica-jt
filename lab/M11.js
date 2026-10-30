
const multaLeve= 2;
const multaPesada=3.50;
let   dias=3;
let	  valor=0;


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





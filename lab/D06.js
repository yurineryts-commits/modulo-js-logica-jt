// const pontos = [5, 9, 3, 9, 7];
// const pontos = [4, 4, 4];
const pontos = [-2, -8];

let maior= Math.max(...pontos);

let filtrados= pontos.filter(numero => numero<maior);

if(filtrados.length === 0){


console.log("Não existe");	


}

else{

 let segundo= Math.max(...filtrados);
 let indice = pontos.indexOf(segundo);	
 console.log(segundo);

}


// function numeros(numeros) {
	
// 	return numeros=pontos;
// }

// if (pontos.every(numeros)===true) {


// }






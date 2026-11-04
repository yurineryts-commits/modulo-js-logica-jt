
const triangulo={

	// lado_1:3,
	// lado_2:3,
	// lado_3:3,




	lado_1:3,
	lado_2:4,
	lado_3:5,




	// lado_1:1,
	// lado_2:2,
	// lado_3:10,


	// lado_1:2,
	// lado_2:2,
	// lado_3:4,


}


if (triangulo.lado_3< triangulo.lado_2 +triangulo.lado_1){


		// console.log("Funfa")

		if(triangulo.lado_1===triangulo.lado_2 && triangulo.lado_2===triangulo.lado_3){


			console.log(" O triangauli é equilátero");


		}


		else if(triangulo.lado_1=== triangulo.lado_2 || triangulo.lado_2=== triangulo.lado_3){


			console.log(" O triangauli é Isósceles");


		}



		else if(triangulo.lado_1!== triangulo.lado_2 && triangulo.lado_2 !=triangulo.lado_3){


			console.log(" O triangauli é Escaleno");


		}

}


else{


	console.log("Não forma triangulo");

}

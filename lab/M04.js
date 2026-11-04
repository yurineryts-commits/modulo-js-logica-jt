
const triangulo={


	// equilátero
	
	// lado_1:3,
	// lado_2:3,
	// lado_3:3,


	// escaleno

	lado_1:3,
	lado_2:4,
	lado_3:5,


	// isósceles

	// lado_1:5,
	// lado_2:5,
	// lado_3:8,


	// Não forma triangulo


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


			console.log(" O trianguli é equilátero");


		}


		else if(triangulo.lado_1=== triangulo.lado_2 || triangulo.lado_2=== triangulo.lado_3){


			console.log(" O triangulo é isósceles");


		}



		else if(triangulo.lado_1!== triangulo.lado_2 && triangulo.lado_2 !=triangulo.lado_3){


			console.log(" O triangulo é escaleno");


		}

}


else{


	console.log("Não forma triangulo");

}

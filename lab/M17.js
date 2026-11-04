
const times=[

	{A:"Time A", V:3,E:1,D:1},
	{B:"Time B", V:2,E:4,D:0},
	{C:"Time C", V:1,E:1,D:2},	

]


let tabela_Pontos=[];




let pontos_A=times[0].V*3 + times[0].E*2;
let pontos_B=times[1].V*3 + times[1].E*2;
let pontos_C=times[2].V*3 + times[2].E*2;


console.log("Pontuação A:" , pontos_A);
console.log("Pontuação B:" , pontos_B);
console.log("Pontuação C:" , pontos_C);


tabela_Pontos.push(pontos_A, pontos_B, pontos_C);

lider=Math.max(...tabela_Pontos);


// console.log("O lider é: " + times[0].A);

if (pontos_A>pontos_B && pontos_A>pontos_C) {


console.log("O lider é: " + times[0].A);

	
}

		else if(pontos_B>pontos_C && pontos_B>pontos_C){


		console.log("O lider é: " + times[1].B);

		}


		else if(pontos_C>pontos_A && pontos_C>pontos_B){


		console.log("O lider é: " + times[2].C);

		}


		

		

if ((pontos_A===pontos_B || pontos_A===pontos_C) && (time[0].V>time[1].V ||time[0].V>time[2].V)){


		console.log("O lider é: " + times[0].A);


}

	 else if ((pontos_B===pontos_A || pontos_B===pontos_C) && (time[1].V>time[0].V ||time[1].V>time[2].V)){


			console.log("O lider é: " + times[1].B);


	}

	else if ((pontos_C===pontos_A || pontos_C===pontos_B) && (time[2].V>time[0].V ||time[2].V>time[1].V)){


			console.log("O lider é: " + times[2].C);




}




		





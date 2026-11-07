//const temperaturas = [30, 32, 28, 31, 29, 33, 27];
//const temperaturas = [25, 25, 25, 25, 25, 25, 25];
const temperaturas = [20, 22, 21, 35, 23, 22, 24];



let media=0;
let maior=Math.max(...temperaturas);
let temperatura=0;
let diasAcimadaMedia=0;


for (let i = 0 ; i<temperaturas.length; i++){


	// console.log(temperaturas[i]);

	media+=temperaturas[i];




}

media=media/temperaturas.length;



temperatura= temperaturas.filter(temperatura => temperatura>media);


diasAcimadaMedia=temperatura.length;


console.log("A media é: " + media.toFixed(1));
console.log("A maior temperatura é: " + maior)
console.log("Dias acima da média:" + diasAcimadaMedia)

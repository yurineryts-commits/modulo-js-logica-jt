// const pontos = [5, 9, 3, 9, 7];
// const pontos = [4, 4, 4];
const pontos = [-2, -8];

let maior= Math.max(...pontos);

let segundo= Math.max(...pontos.filter(numero => numero<maior));


let indice = pontos.indexOf(segundo);



if (segundo===maior) {


console.log("Não existe");

}

else{

 console.log(segundo);

}







// const media=9;
// const media2=9;
// const media3=8;
// const media4=7;
// const media5=5;
// const media6=2;


// if(media>=7){
//     console.log("Aprovado")
// }
// else{
//     console.log("Reprovado")
// }


// if(media2>=7){
//     console.log("Aprovado")
// }
// else{
//     console.log("Reprovado")
// }



// if(media3>=7){
//     console.log("Aprovado")
// }
// else{
//     console.log("Reprovado")
// }


// if(media4>=7){
//     console.log("Aprovado")
// }
// else{
//     console.log("Reprovado")
// }



// if(media5>=7){
//     console.log("Aprovado")
// }
// else{
//     console.log("Reprovado")
// }

// const medias=[media,media2, media3, media4,media5,media6]
// let soma=0;
// let aprovados=0;


// // const nomes=["Ana", "Bruna","Carla" ,"Diego","Elisa", "Fabio"]

// for (let i = 0; i < medias.length; i++) {
    
//     soma = soma+ medias[i]
   
//     if(medias[i]>= 7){

//        aprovados++

//     }

// };
// console.log("Aprovados" , aprovados);
// console.log("Média da turma: " + (soma/medias.length).toFixed(2));

const prompt=require("prompt-sync")()
const medias=[];
let soma=0;
let aprovados=0;
let input;

while(input!=-1){

    input= Number(prompt("Proxima média: "))
    if (input>=0){
    
        medias.push(input)
    }
}

for (let i = 0; i < medias.length; i++){
    
    soma = soma+ medias[i]
   
    if(medias[i]>= 7){

       aprovados++

     }
}

console.log("Aprovados" , aprovados);
console.log("Média da turma: " + (soma/medias.length).toFixed(2));
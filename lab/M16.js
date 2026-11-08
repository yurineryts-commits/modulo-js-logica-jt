
const carrinho = [
  { produto: "Arroz 5 kg", preco: 27.9, qtd: 2 },
  { produto: "Feijão 1 kg", preco: 8.49, qtd: 3 },
  { produto: "Café 500 g", preco: 18.5, qtd: 1 }
];

// const carrinho = [
//   { produto: "Caderno", preco: 12, qtd: 4 }
// ];





let itens=0;
const total=[];
let total_geral=0;



for ( i = 0 ; i < carrinho.length; i++) {
  
  console.log(carrinho[i].produto, ":", carrinho[i].qtd,"X R$ ", carrinho[i].preco.toFixed(2),"=  R$" , (carrinho[i].qtd*carrinho[i].preco).toFixed(2))
  itens+=carrinho[i].qtd
  total.push(carrinho[i].qtd*carrinho[i].preco)
  total_geral+=total[i];



}

// for(i=0; i <total.length ;i++){


//   total+=carrinho[i].preco

// }



 console.log("Itens: ", itens);
 console.log("Total: ", total_geral);
// console.log(carrinho[0].produto, ":", carrinho[0].qtd,"X R$ ", carrinho[0].preco.toFixed(2),"=  R$" , carrinho[0].qtd*carrinho[0].preco);
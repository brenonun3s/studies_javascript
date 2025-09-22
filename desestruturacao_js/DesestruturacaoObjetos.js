const pessoa = {
 nome: 'Breno',
 sobrenome: 'Nunes',
 idade: 24,
 endereco: {
  rua: 'Av Brasil',
  numero: 320
 }

};

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO VIA OBJECTS
const { nome = 'Não existe', sobrenome } = pessoa;
console.log(nome, sobrenome);

const { nome: n = '', sobrenome: s } = pessoa;
console.log(n, s);

const { endereco: {rua, numero}, endereco} = pessoa;
console.log(endereco);

// LET É MUTÁVEL, PODE SER REDECLARADA E ATUALIZADA, MAS NÃO NO MESMO ESCOPO
let name = 'Breno Nunes';
console.log(name); //SAÍDA -> Breno Nunes

name = 'João da Silva'; 
console.log(name); //SAÍDA -> João da Silva

//VAR É DEPRECIADO, NÃO RECOMENDADO PARA USO - MELHOR USAR CONST OU LET
var age = 24;

//CONST É IMUTÁVEL, SE FOR ALTERADO O VALOR O CÓDIGO NÃO EXECUTA - EM ARRAYS E OBJETOS PODEM TER OS VALORES INTERNOS ATUALIZADOS
const nacionalidade = 'Brazilian';
console.log(nacionalidade); // SAÍDA -> Brazilian

nacionalidade = 'Italian'; // ❌ ERRO
console.log(nacionalidade); // SAÍDA -> ERRO -> TypeError: Assignment to constant variable / Atribuição a variável constante
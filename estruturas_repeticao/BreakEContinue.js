const numeros = [1,2,3,4,5,6,7,8,9];

// CONTINUE - CONTINUA PARA A PRÓXIMA ITERAÇÃO DO LAÇO
// BREAK - SAI DO LAÇO

let i = 0;

do{
 let numero = numeros[i];

 if(numero === 2){
  console.log('Pulei o numero 2');
  i++;
  continue;
 
 }
 if (numero === 7) {
  console.log('7 encontrado, saindo...');
  i++;
  break;
 }
 i++;
}while (i<numeros.length);
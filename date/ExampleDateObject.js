const data = new Date('2019-04-20 20:15:59:100');

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());

console.log(data.toString());

// FORMATAR DATA 

function zeroAEsquerda(num){
 return num >= 10 ? num : `0${num}`;
}

function formataData(data){
 const dia = zeroAEsquerda(data2.getDate());
 const mes = zeroAEsquerda(data2.getDate());
 const ano = zeroAEsquerda(data2.getDate());
 const hora = zeroAEsquerda(data2.getDate());
 const min = zeroAEsquerda(data2.getDate());
 const seg = zeroAEsquerda(data2.getDate());
 
 return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}

const data2 = new Date();

const dataBrasil = formataData(data2);
console.log(dataBrasil);

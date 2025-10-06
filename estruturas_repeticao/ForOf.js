const nomes = ['Breno', 'João', 'Paulo', 'Maria', 'Clara'];

for (let valor of nomes) {
 console.log(valor);
}

nomes.forEach(function(elemento, indice, array) {
 console.log(elemento, indice, array);
 
 
});
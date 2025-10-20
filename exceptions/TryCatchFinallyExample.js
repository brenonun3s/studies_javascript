function dividir(a, b) {
 try {
   console.log("Iniciando a divisão...");

   if (b === 0) {
     throw new Error("Não é possível dividir por zero!");
   }

   let resultado = a / b;
   console.log("Resultado:", resultado);
   return resultado;
 } catch (erro) {
   console.error("Ocorreu um erro:", erro.message);
 } finally {
   console.log("Bloco 'finally' executado — finalizando operação.");
 }
}

// Testes
dividir(10, 2);  // Executa normalmente
dividir(10, 0);  // Gera erro tratado no catch

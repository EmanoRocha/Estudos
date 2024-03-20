// Função para busca binária
function buscaBinaria(array, elemento) {
    let inicio = 0;
    let fim = array.length - 1;
    
    while (inicio <= fim) {
        // Encontra o meio do array
        let meio = Math.floor((inicio + fim) / 2);
        
        // Verifica se o elemento está no meio
        if (array[meio] === elemento) {
            return meio;
        } else if (array[meio] < elemento) {
            // Se o elemento for maior, busca na metade direita do array
            inicio = meio + 1;
        } else {
            // Se o elemento for menor, busca na metade esquerda do array
            fim = meio - 1;
        }
    }
    
    // Retorna -1 se o elemento não for encontrado
    return -1;
}

// Exemplo de uso
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const elemento = 11;
const indice = buscaBinaria(array, elemento);
if (indice !== -1) {
    console.log(`O elemento ${elemento} está na posição ${indice}.`);
} else {
    console.log(`O elemento ${elemento} não foi encontrado.`);
}
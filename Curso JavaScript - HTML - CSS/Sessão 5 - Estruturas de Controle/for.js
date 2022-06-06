/**
 * Estruturas de repetição usando for
 * @author: maciohslima
 * Projeto: JavaScript Fundamentos - Iniciantes
 */

// Laço de repetição usando while
let contador = 1;

while (contador <= 10) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// Laço de repetição usanado for
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}

// Percorrer um array usando for
const notas = [6.7, 7.1, 8.6, 6.5, 9.8];
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`);
}
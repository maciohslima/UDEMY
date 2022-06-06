/**
 * Exercício FOR/IN
 * @author:macioshlima
 * JavaScript Fundamentos - Iniciantes
 */

// Percorrer atributos dentro de um array (Não Recomendado)
const notas = [6.7, 7.1, 8.0, 7.7, 6.1];

for (let i in notas) {
    console.log(`Nota: ${notas[i]}`);
}

// Percorrer atributos dentro de um objeto (recomendado)
const pessoa = {
    nome: "Mácio",
    sobrenome: "Lima",
    idade: 33,
    peso: 83
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
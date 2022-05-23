function rand([min = 0, max = 1000]) { //Define função com valore min e max
    if (min > max) [min, max] = [max, min]; //Inverte min e max caso necessário
    const valor = Math.random() * (max - min) + min; //Cálculo Math.random
    return Math.floor(valor); //Retorna valor arredondado para baixo (Floor)
}

console.log(rand([50, 40])); //Procura valores entre 40 e 50
console.log(rand([992])); //Procura valores entre 992 e 1000
console.log(rand([, 10])); //Procura valores entre 0 e 10
console.log(rand([])); //Procura valores entre 0 e 1000
// console.log(rand()) //Erro lógico na programação
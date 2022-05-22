// Metódo não recomendado a ser usado durante a criação do código
// Hoisting é uma caracterísitca de içar a variável mesmo sendo declarada depois da função
// O Hoisting só funciona para a reservada var

console.log('a = ', a);
var a = 2;
console.log('a = ', a);

//let e const não possuem a mesma característica
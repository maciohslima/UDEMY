console.log("1)", '1' == 1); //Teste de valores iguais
console.log("2)", '1' === 1); //Teste de valor e tipo iguais
console.log("3)", '3' != 3); //Teste de valor diferente
console.log("4)", '3' !== 3); //Teste de valor e tipo diferentes

console.log("5)", 3 < 2); //Teste de 3 é menor que 2
console.log("6)", 3 > 2); //Teste se 3 é maior que 2
console.log("7)", 3 <= 2); //Teste se 3 é menor que ou igual a 2
console.log("8)", 3 >= 2); //Teste se 3 é maior que ou igual a 2

//Comparando datas
const d1 = new Date(0); //Definindo data padrão para d1
const d2 = new Date(0); //Definindo data padrão para d2
console.log("9)", d1 == d2); //Teste d1 ocupa mesmo espaço de memória de d2?
console.log("10)", d1 === d2); //Teste d1 é estritamente igual a d1?
console.log("11)", d1.getTime() === d2.getTime());

console.log("12)", undefined == null); //Undefined é igual a null?
console.log("13)", undefined === null); //Undefinded é igual e mesmo tipo de null?
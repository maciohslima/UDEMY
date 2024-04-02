const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const homens = f => f.genero === 'M';
const brasileiros = f => f.pais === 'Brazil';

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data
   // console.log(funcionarios)

    // mulher chinesa com menor salário
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func);
});

axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(brasileiros)
        .filter(homens)
        .filter(menorSalario)

    console.log(func)
})
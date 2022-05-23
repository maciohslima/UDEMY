// novo recurso do EC2015
const pessoa = {
    nome: 'Mácio Lima',
    idade: 33,
    endereco: {
        logradouro: 'Rua José Ramos de Vasconcelos',
        numero: 1054,
        complemento: 'Apt. 103'
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorado = true } = pessoa;
console.log(sobrenome, bemHumorado);

//acessar objeto dentro de objeto
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

//erro ao acessar objeto não instanciado
const { conta: { ag, num } } = pessoa;
console.log(ag, num);
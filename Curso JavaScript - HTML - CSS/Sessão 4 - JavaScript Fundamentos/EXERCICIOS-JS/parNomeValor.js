//par Nome/Valor
const saudacao = 'Opa!'; //Contexto Léxico 1

function exec() {
    const saudacao = 'Faaaala...'; //Contexto Léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
// Exemplo:
const cliente = {
    nome: 'Mácio Lima',
    idade: 33,
    peso: 83,
    endereço: {
        logradouro: 'Rua José Ramos de Vasconcelos',
        numero: 1054,
        complemento: 'Apt. 103',
        bairro: 'Pau Amarelo',
        cidade: "Paulista",
        estado: "Pernambuco",
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
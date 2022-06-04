function soNoticiaBoa(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}!!!`);
    }
}

soNoticiaBoa(7.1);
soNoticiaBoa(6);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É Verdade... ${valor}`);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo("Valor");
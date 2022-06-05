function imprimeResultado(nota) {
    if (nota >= 7) {
        console.log(`Sua nota é: ${nota}`);
        console.log("Aprovado");
    } else {
        console.log(`Sua nota é: ${nota}`);
        console.log("Reprovado");
    }
}

imprimeResultado(7);
imprimeResultado(6);
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimeResutado = function (nota) {
    console.log(`Sua nota é: ${nota}`);
    if (nota.entre(9, 10)) {
        // console.log(`Sua nota é: ${nota}`);
        console.log(`Quadro de honra!`);
    } else if (nota.entre(7, 8.99)) {
        // console.log(`Sua nota é: ${nota}`);
        console.log(`Aprovado!`)
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação");
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado");
    } else {
        console.log("Nota Inválida!!!")
    }

    console.log("Final da Execução...");
}

imprimeResutado(10);
imprimeResutado(7);
imprimeResutado(4);
imprimeResutado(0);
imprimeResutado(11);

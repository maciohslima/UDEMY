{ { { { var sera = 'Amanhã Será???' } } } }

console.log(sera);

function escreveSera() {
    // var acrescenta = 0;

    var segundoTermo = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

    for (let a = 0; a <= 4; a++) {
        var sera2 = `${segundoTermo[a]} - Feira`;
        console.log(sera2);
        // console.log(segundoTermo);
    }
    // var sera2 = `Será??? - ${acrescenta++}`;
    // console.log(sera2);
    // return sera2;
}

retornaSera = new escreveSera();
// console.log(sera2);
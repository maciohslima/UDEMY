/**
 * Reservadas break/continue
 * @author: maciohslima
 * JavaScript Fundamentos - Iniciantes
 */

//Usando Break para sair do laço da estrutura for
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

for (x in nums) {
    if (x == 5) {
        break; //Interrompe execução e sai do laço for...
    }
    console.log(`${x} = ${nums[x]}`);
}

for (let y in nums) {
    if (y == 5) {
        continue; //
    }
    console.log(`${y} = ${nums[y]}`);
}


//Uso de break com rótulo no for (Não Recomendado)
externo:
for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) break externo;
        console.log(`Par = ${a}, ${b}`);
    }
}
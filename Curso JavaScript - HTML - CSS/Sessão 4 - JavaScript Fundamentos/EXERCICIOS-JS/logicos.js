function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); //bitwyse xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return { comprarTV50, comprarTv32, comprarSorvete, manterSaudavel }
}

console.log(compras(true,true));
console.log(compras(false, true));
console.log(compras(true, false));
console.log(compras(false, false));
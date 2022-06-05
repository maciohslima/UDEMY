/**
 * JS - Projetos Extras: Calculadora Flex
 * @author: maciohslima
 */

var etanol, gasolina;

function calcFlex() {
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."));
    console.log(etanol);
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."));
    console.log(gasolina);

    if(etanol < 0.7 * gasolina){
        document.getElementById("status").src="img/alcool.jpg"
    }else{
        document.getElementById("status").src="img/gasolina.jpg"
    }

}

function resetar(){
    document.getElementById("status").src="img/neutro.jpg"
}
/**
 * Relogio JS
 * @author: Mácio Lima
 */

function relogio() {
    var momentoAtual = new Date();

    var ano = momentoAtual.getFullYear();
    var mes = momentoAtual.getMonth();
    var dia = momentoAtual.getDay() + 1;
    var hora = momentoAtual.getHours();
    var min = momentoAtual.getMinutes();
    var sec = momentoAtual.getSeconds();

    if (sec <= 9) {sec = "0" + sec;}
    if (min <= 9) {min = "0" + min;}
    if (hora <= 9) {hora = "0" + hora;}

    switch(mes) {
        case 0: 
            mestxt = "Janeiro";
            break;
        case 1:
            mestxt = "Fevereiro";
            break;
        case 2:
            mestxt = "Março";
            break;
        case 3:
            mestxt = "Abril";
            break;
        case 4:
            mestxt = "Maio";
            break;
        case 5:
            mestxt = "Junho";
            break;
        case 6:
            mestxt = "Julho";
            break;
        case 7:
            mestxt = "Agosto";
            break;
        case 8:
            mestxt = "Setembro";
            break;
        case 9:
            mestxt = "Outubro";
            break;
        case 10:
            mestxt = "Novembro";
            break;
        case 11:
            mestxt = "Dezembro";
            break;
    }

    document.getElementById('hora').innerHTML = hora + ":" + min + ":" + sec;
    document.getElementById('data').innerHTML = dia + "/" + mestxt + "/" + ano;
    setTimeout("relogio()", 1000);
}
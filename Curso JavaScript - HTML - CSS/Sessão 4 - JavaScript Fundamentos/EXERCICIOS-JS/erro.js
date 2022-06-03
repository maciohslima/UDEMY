function tratarErro (erro){
    // throw new Error('...');
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimeNomeGritando (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!');
    } catch (e) {
        tratarErro(e);
    } finally {
        console.log('Final!!!')
    }
}

const obj = {nome: 'Macio'};
imprimeNomeGritando(obj);
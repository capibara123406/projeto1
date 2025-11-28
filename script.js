const ai = document.getElementById('a');//Renda
const bi = document.getElementById('b');//Score
const btn = document.getElementById('btn');//Button
const Saida = document.getElementById('rst');//Resultado

btn.onclick = function () {
   
    const a = ai.value;
    const b = bi.value;

    let EXCED = 0;
    let Total = 0;

    let Mensagem = [];

    if (a >= 80) {
        EXCED = ((a - 80) * 2);

        Mensagem.push('GB Excedentes (taxa aplicada)');
    } else {
        Mensagem.push('Sem GB execedente');
    }

    if (b === 's') {
        Total = EXCED * 0.15;
        EXCED = Total - EXCED;

        Mensagem.push('Bonus aplicado');
    } else {
        Mensagem.push('Sem Bônus');
    }

    if (a >= 100) {
         EXCED = (((a - 80) * 2) + 20);

        Mensagem.push('GB Excedentes (taxa aplicada) + Multa de R$20');
    } else {
        Mensagem.push('Sem multa');
    }

    Mensagem.push(`<strong>Total: ${EXCED.toFixed(2)}</strong>`);
    Mensagem.push(`<strong>Total: ${Total.toFixed(2)}</strong>`);

    Saida.innerHTML = Mensagem.join('<br>');

}
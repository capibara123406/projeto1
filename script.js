const aI = document.getElementById('a');
const bI = document.getElementById('b');
const btn = document.getElementById('btn');
const Saida = document.getElementById('rst');
btn.onclick = function () {
    const a = parseFloat.value(aI);
    const b = parseFloat.value(bI);
    if (a > 100 && b > 200) {
        const pi = ((a * 0.08) + (b * 0.12));
        Saida.textContent = 'pinto: ' + pi;
    } else if (a > 300 && b > 400) {
        const pa = ((((a * 1.58) + (b * 2.43) + 30) * 0.10) + 0.25);
        Saida.textContent = 'Total: ' + pa;
    } else {
        Saida.textContent = 'Sai daqui seu bosta';
    }
}
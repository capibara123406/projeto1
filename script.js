const aI = document.getElementById('a');
const bI = document.getElementById('b');
const btn = document.getElementById('btn');
const Saida = document.getElementById('rst');
btn.onclick = function () {
    let base = 30;
    const aa = +aI.value;
    const bb = bI.value;
    if (aa >= 150 && bb >= 200) {
        base += ((a * 0.10) * bb);
        Saida.textContent = 'Total: ' + base;
    } else if (aa >= 250 && bb >= 330) {
        base += ((((aa * 1.54) * 0.58)(bb * 2.34) + 20));
        Saida.textContent = 'Total: ' + base;
    } else {
        Saida.textContent = 'Total: ' + base;
    }
}

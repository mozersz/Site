let teucuzin = 0;
let troca = 1;

const div = document.getElementById('ocult1');
const div1 = document.getElementById('ocult2');
const div2 = document.getElementById('ocult3');
const div3 = document.getElementById('ocult4');
const div4 = document.getElementById('ocult5');
const div5 = document.getElementById('ocult6');
const div6 = document.getElementById('ocult7');
const div7 = document.getElementById('ocult8');

function atualizarDivs() {
    if (troca === 1) {
        div.style.display = 'flex';
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div7.style.display = 'none';
    } else if (troca === 2) {
        div.style.display = 'none';
        div1.style.display = 'flex';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div7.style.display = 'none';
    } else if (troca === 3) {
        div.style.display = 'none';
        div1.style.display = 'none';
        div2.style.display = 'flex';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div7.style.display = 'none';
    } else if (troca === 4) {
        div.style.display = 'none';
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'flex';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div7.style.display = 'none';
    } else if (troca === 5) {
        div.style.display = 'none';
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'flex';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div7.style.display = 'none';
    } else if (troca === 6) {
        div.style.display = 'none';
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'flex';
        div6.style.display = 'none';
        div7.style.display = 'none';
    } else if (troca === 7) {
        div.style.display = 'none';
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'flex';
        div7.style.display = 'none';
    } else if (troca === 8) {
        div.style.display = 'none';
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        div6.style.display = 'none';
        div7.style.display = 'flex';
    }
}

atualizarDivs();

function atualizar() {
    const texto = document.getElementById("texto");
    const items = document.querySelectorAll(".item");
    const totalitems = items.length;

    const visivel = 1;
    const max = totalitems - visivel;

    if (teucuzin > max) {
        teucuzin = max;
    } else if (teucuzin < 0) {
        teucuzin = 0;
    }

    texto.style.transform = `translateX(${-teucuzin * 200}px)`;
}


function proximo() {
    teucuzin++;
    atualizar();
    troca++;
    if (troca > 8) troca = 8;
    atualizarDivs();
}

function anterior() {
    teucuzin--;
    atualizar();
    troca--;
    if (troca < 1) troca = 1;
    atualizarDivs();
}
console.log(troca);

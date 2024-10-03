let teucuzin = 0;
let troca = 1;

const div = document.getElementById('ocult1');
const div1 = document.getElementById('ocult2');
function atualizarDivs() {
    if (troca === 1) {
        div.style.display = 'flex';
        div1.style.display = 'none';
    } else if (troca === 2) {
        div.style.display = 'none';
        div1.style.display = 'flex';
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
    if (troca > 2) troca = 2;
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

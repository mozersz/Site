let teucuzin = 0;

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
    }

    function anterior() {
        teucuzin--;
        atualizar();
    }
    function estado() {
        
    }
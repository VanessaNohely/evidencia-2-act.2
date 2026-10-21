
const selectFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const textareaResultado = document.getElementById("resultado");

const btnDibujar = document.getElementById("dibujar");
const btnLimpiar = document.getElementById("limpiar");

// Dibujar la figura seleccionada
btnDibujar.addEventListener("click", function () {

    const figura = selectFigura.value;
    const caracter = inputCaracter.value;
    const base = Number(inputBase.value);
    const altura = Number(inputAltura.value);

    // Validar el carácter
    if (caracter.trim() === "") {
        alert("Ingresa un carácter para dibujar.");
        inputCaracter.focus();
        return;
    }

    // Validar la base
    if (
        inputBase.value === "" ||
        !Number.isInteger(base) ||
        base < 1 ||
        base > 100
    ) {
        alert("Ingresa una base entre 1 y 100.");
        inputBase.focus();
        return;
    }

    // Validar la altura
    if (
        inputAltura.value === "" ||
        !Number.isInteger(altura) ||
        altura < 1 ||
        altura > 100
    ) {
        alert("Ingresa una altura entre 1 y 100.");
        inputAltura.focus();
        return;
    }

    let dibujo = "";

    // Dibujar triángulo
    if (figura === "triangulo") {

        for (let i = 1; i <= altura; i++) {

            let cantidad;

            if (altura === 1) {
                cantidad = base;
            } else {
                cantidad = Math.round(
                    1 + (i - 1) * (base - 1) / (altura - 1)
                );
            }

            dibujo += caracter.repeat(cantidad) + "\n";
        }

    }

    // Dibujar rectángulo
    else if (figura === "rectangulo") {

        for (let i = 1; i <= altura; i++) {
            dibujo += caracter.repeat(base) + "\n";
        }

    }

    // Mostrar el dibujo
    textareaResultado.value = dibujo;

});

// Limpiar los campos
btnLimpiar.addEventListener("click", function () {

    selectFigura.value = "triangulo";
    inputCaracter.value = "*";
    inputBase.value = "";
    inputAltura.value = "";
    textareaResultado.value = "";

    selectFigura.focus();

});

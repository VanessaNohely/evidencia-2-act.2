const selectFigura = document.getElementById("figura");
const inputCaracter = document.getElementById("caracter");
const inputBase = document.getElementById("base");
const inputAltura = document.getElementById("altura");
const campoBase = document.getElementById("campo-base");
const textareaResultado = document.getElementById("resultado");

const btnDibujar = document.getElementById("dibujar");
const btnResetear = document.getElementById("limpiar");

// Mostrar u ocultar la caja de texto de la base según la figura seleccionada
selectFigura.addEventListener("change", function () {
    if (selectFigura.value === "rectangulo") {
        campoBase.style.display = "block";
    } else {
        campoBase.style.display = "none";
        inputBase.value = "";
    }
});

btnDibujar.addEventListener("click", function (e) {
    e.preventDefault();

    let figura = selectFigura.value;
    let char = inputCaracter.value;
    let altura = parseInt(inputAltura.value);
    let base = parseInt(inputBase.value);

    // Validación del carácter
    if (!char || char.length === 0) {
        alert("Por favor, ingresa un carácter para dibujar.");
        return;
    }

    // Tomar solo el primer carácter por si ingresan varios
    char = char[0];

    // Validaciones y lógica de dibujo
    if (figura === "triangulo") {
        if (isNaN(altura) || altura <= 0) {
            alert("Ingresa una altura válida para el triángulo (número entero positivo).");
            return;
        }

        let dibujo = "";
        for (let i = 1; i <= altura; i++) {
            dibujo += char.repeat(i) + "\n";
        }
        textareaResultado.value = dibujo;

    } else if (figura === "rectangulo") {
        if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
            alert("Ingresa una base y altura válidas para el rectángulo (números enteros positivos).");
            return;
        }

        let dibujo = "";
        for (let i = 0; i < altura; i++) {
            dibujo += char.repeat(base) + "\n";
        }
        textareaResultado.value = dibujo;
    }
});

btnResetear.addEventListener("click", function (e) {
    e.preventDefault();

    selectFigura.value = "triangulo";
    inputCaracter.value = "*";
    inputBase.value = "";
    inputAltura.value = "";
    textareaResultado.value = "";
    
    campoBase.style.display = "none";

    selectFigura.focus();
});
window.addEventListener("load", inicio);

function inicio() {
    document
        .querySelector("#btnEjercicio1")
        .addEventListener("click", ejercicio1);
    document
        .querySelector("#btnEjercicio2")
        .addEventListener("click", ejercicio2);
    document
        .querySelector("#btnEjercicio8")
        .addEventListener("click", ejercicio8);
    document
        .querySelector("#btnEjercicio16")
        .addEventListener("click", ejercicio16);
}

function ejercicio1() {
    let resultado = 0;
    let largoTexto = 0;

    let texto = document.querySelector("#texto").value;
    largoTexto = texto.length;

    if (texto[0] == texto[largoTexto - 1]) {
        resultado = "Iguales";
    } else {
        resultado = "Diferentes";
    }
    document.querySelector("#resultadoEj1").innerHTML = resultado;
}

function ejercicio2() {
    let largoTexto = 0;
    let x = 0;
    let letra = "";
    let cuentaVocales = 0;

    let texto = document.querySelector("#texto2").value;
    largoTexto = texto.length;

    for (x = 0; x < largoTexto; x++) {
        letra = texto.substr(x, 1);
        switch (letra) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                cuentaVocales++;
                break;
        }
    }
    document.querySelector("#resultadoEj2").innerHTML = cuentaVocales;
}

function ejercicio8() {
    let texto = document.querySelector("#texto8").value;
    let largoTexto = texto.length;
    let ascii = 0;
    let contarMayusculas = 0
    let contarMinusculas = 0


    for (x = 0; x < largoTexto; x++) {
        ascii = texto.charCodeAt(x);
        if (ascii >= 65 && ascii <= 90) { contarMayusculas++ }
        if (ascii >= 97 && ascii <= 122) { contarMinusculas++ }
    }
    document.querySelector("#resultadoEj8").innerHTML = "Mayúsculas: " + contarMayusculas + " Minúsculas: " + contarMinusculas;

}

function ejercicio16() {

    const d = new Date();
    let start = d.getTime();

    let texto = document.querySelector("#texto16").value;
    let largoTexto = texto.length;
    let textoLimpioDerecho = "";
    let textoLimpioIzquierda = "";
    let sustitucion = "";

    // Eliminación de mayusculas
    texto = texto.toLowerCase();

    // Iteramos sobre cada elemento del string
    for (x = 0; x < largoTexto; x++) {

        // Para hacer la comparación
        ascii = texto.charCodeAt(x);
        // Para colocar la letra original si no hay que sustituirla
        letra = texto[x];

        switch (ascii) {
            // Aqui se pueden hacer todas las validaciones necesarias
            // Y sustituciones por lo que se quiera
            // Limpiar comas, espacios y puntos, acentos, etc
            case 32: sustitucion = ""; break;
            case 44: sustitucion = ""; break;
            case 46: sustitucion = ""; break;
            case 59: sustitucion = ""; break;
            case 225: sustitucion = "a"; break;
            case 233: sustitucion = "e"; break;
            case 237: sustitucion = "i"; break;
            case 243: sustitucion = "o"; break;
            case 250: sustitucion = "u"; break;
            default: sustitucion = letra;
        }
        // Si la sustitución no genera un espacio en blanco
        if (sustitucion != " ") {
            // Armo el texto original con "anterior mas nuevo caracter"
            textoLimpioDerecho = textoLimpioDerecho + sustitucion;
            // Armo el texto al reves con "nuevo caracter y luego el texto anterior"
            textoLimpioIzquierda = sustitucion + textoLimpioIzquierda;
        }
    }

    // Si el texto al derecho es igual al texto armado al reves es un palindromo
    if (textoLimpioDerecho == textoLimpioIzquierda) {
        resultado = "Es palíndromo";
    } else {
        resultado = "No es palíndromo";
    }

    document.querySelector("#resultadoEj16").innerHTML = resultado + " - Largo: " + largoTexto;

}

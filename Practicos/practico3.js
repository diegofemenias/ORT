window.addEventListener("load", inicio);

function inicio() {
    document
        .querySelector("#btnEjercicio17")
        .addEventListener("click", ejercicio17);
    document
        .querySelector("#btnEjercicio19")
        .addEventListener("click", ejercicio19);
    document
        .querySelector("#btnEjercicio20")
        .addEventListener("click", ejercicio20);
    document
        .querySelector("#btnEjercicio20_2")
        .addEventListener("click", ejercicio20_largo);
}

function ejercicio17() {
    let resultado = 0;

    let dividendo = document.querySelector("#dividendo").value;
    let divisor = document.querySelector("#divisor").value;
    let resto = divisor;
    let contador = 0;

    while(resto >= divisor) {
        resto = dividendo - divisor;
        dividendo = dividendo - divisor;
        contador++;
    } 

    document.querySelector("#resultadoEj17").innerHTML = "División: " + contador + " Resto: " + resto;

}

function ejercicio20_largo() {

    let nroA = document.querySelector("#nroA").value;
    let nroB = document.querySelector("#nroB").value;
    let divisionEntera = 0;
    let txtResultado = "";

    // Solo prosigo si ambos valores son numeros y ambos mayores que cero 
    // Nota: el dividendo podría ser cero 
    if (Number(nroA) && Number(nroB) && nroA != 0 && nroB != 0) {

        // Si ingreso los numeros "al reves", primero el menor y 
        // luego el mayor, se "dan vuelta" luego de la primera iteración
        // al tener division entera 0 y como resto el numero mayor, entonces
        // queda como dividendo el anterior divisor y como divisor el resto

        // Se inicializa esta variable con algun valor que permita al menos entrar 1 vez al WHILE
        // Se toma el valor de nroA
        let resto = nroA;

        while (resto) {
            // En un while hay que pensar en 
            // A) en que condiciones comenzamos la iteracion
            // En este caso no hay ningun seteo / lectura de variable / etc en particular
            txtResultado += "-----------------------<br>";

            // B) Cual es la operacion a realizar
            divisionEntera = parseInt(nroA / nroB);
            txtResultado += "División entera: " + nroA + " / " + nroB + " = " + divisionEntera + "<br>";
            resto = nroA % nroB;
            txtResultado += "Resto: " + resto + "<br>";

            // C) en que estado queda el sistema para la siguiente operacion
            // Casi siempre se quiere que haya una condicion de corte, sino se producem
            // infinitas iteraciones

            // Cuando el resto sea cero, nroA va a ser el MCD y se da la condición de corte
            nroA = nroB;
            nroB = resto;
            txtResultado += "Siguiente ronda: Nro A: " + nroA + " Nro B: " + nroB + "<br>";

        }
    }
    else {
        txtResultado = "No válido";
    }

    txtResultado += "<br><br>-----------------------<br>";
    txtResultado += "*** MCD: " + nroA + " ***";
    txtResultado += "<br>-----------------------<br>";

    document.querySelector("#resultadoEj20").innerHTML = txtResultado;

}

function ejercicio20() {

    let dividendo = document.querySelector("#nroA").value;
    let divisor = document.querySelector("#nroB").value;
    let txtResultado = "";
    let resto = -1;
    //let iterador = 0;

    while (resto) {
        resto = dividendo % divisor;
        dividendo = divisor;
        divisor = resto;
    }

    // Opcionalmente se puede hacer con FOR, y el inicializador, y la post accion son opcionales.
    // La condicion tambien es opcional, pero hay que asegurar que haya una salida (break) bajo alguna condicion
    /*for (true; resto != 0; true) {
        resto = nroA % nroB;
        nroA = nroB;
        nroB = resto;
    }*/

    txtResultado += "<br>-----------------------<br>";
    txtResultado += "*** MCD: " + dividendo + " ***";
    txtResultado += "<br>-----------------------<br>";

    document.querySelector("#resultadoEj20").innerHTML = txtResultado;

}

function ejercicio19() {

    let mes = document.querySelector("#mes").value;
    let diaComienzo = document.querySelector("#diaComienzo").value;
    let cantDias = 0;
    let itDias = 0;
    let itSemana = 0;
    let itComienzo = 0;
    let resultado = "";
    let comienzoMes = 0;
    let empezarCalendario = false;

    switch (mes) {
        case "ene":
        case "mar":
        case "may":
        case "jul":
        case "ago":
        case "oct":
        case "dic":
            cantDias = 31; break;
        case "feb":
            cantDias = 28; break;
        default:
            cantDias = 30; break;
    }

    switch (diaComienzo) {
        case "dom": comienzoMes = 0; break;
        case "lun": comienzoMes = 1; break;
        case "mar": comienzoMes = 2; break;
        case "mie": comienzoMes = 3; break;
        case "jue": comienzoMes = 4; break;
        case "vie": comienzoMes = 5; break;
        case "sab": comienzoMes = 6; break;

    }

    // Definicion de la tabla
    resultado = "<table>";
    resultado += "<th>Dom</th><th>Lun</th><th>Mar</th><th>Mie</th><th>Jue</th><th>Vie</th><th>Sab</th>"
    // Definicion de la primera fila
    resultado += "<tr>";

    while (empezarCalendario == false) {
        if (comienzoMes == itComienzo) {
            empezarCalendario = true;
        }
        else {
            resultado += "<td></td>";
            itComienzo++;
        }
    }

    itSemana = itComienzo;

    while (itDias < cantDias) {
        itDias++;
        itSemana++;
        resultado += "<td>" + itDias + "</td>";
        if (itSemana % 7 == 0) {
            resultado += "</tr><tr>";
        }
    }

    resultado += "</tr>";
    resultado += "</table>"

    document.querySelector("#resultadoEj19").innerHTML = resultado;

}
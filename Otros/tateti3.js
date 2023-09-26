window.addEventListener("load", inicio);

// Estas tres variables son globales porque se debe mantener el valor que se le carga
// en sucesivas llamadas y comparaciones
let piezaJugador1 = "X";
let piezaJugador2 = "O";
let hayGanador = false;
let tableroLleno = false;
let turnoActual = "Jugador1";

function inicio() {

  let fila = Math.floor(Math.random() * 3);
  let columna = Math.floor(Math.random() * 3);
  let id = "#f" + fila + "c" + columna;

  jugada(id);

}

function jugada(id) {

  if (!hayGanador && !tableroLleno) {

    if (turnoActual == "Jugador1") {

      // Jugador 1 hace su jugada
      let fila = Math.floor(Math.random() * 3);
      let columna = Math.floor(Math.random() * 3);

      let valCelda = document.querySelector("#f" + fila + "c" + columna).value;
      if (!valCelda) {
        document.querySelector("#f" + fila + "c" + columna).value = piezaJugador1;
        turnoActual = "Jugador2";
        console.log('Jugo jugdador 1 en celda ' + fila + columna);

      }
      else {
        jugada(id);
        turnoActual = "Jugador2";
      }

      // Si jugador 1 ya ganó cortamos el juego
      validarTablero();
    }

    if (turnoActual == "Jugador2") {

      // Ahora le toca a Jugador 2
      let fila2 = Math.floor(Math.random() * 3);
      let columna2 = Math.floor(Math.random() * 3);

      let valCelda2 = document.querySelector("#f" + fila2 + "c" + columna2).value;
      if (!valCelda2) {
        document.querySelector("#f" + fila2 + "c" + columna2).value = piezaJugador2;
        turnoActual = "Jugador1";
        console.log('Jugo jugdador 2 en celda ' + fila2 + columna2);
      }
      else {
        jugada(id);
        turnoActual = "Jugador1";
      }

      // Luego de cada jugada, verificamos las columnas, filas y diagonales por un ganador
      validarTablero();
    }
  }
}

function validarTablero() {

  let valf0c0 = document.querySelector("#f0c0").value;
  let valf0c1 = document.querySelector("#f0c1").value;
  let valf0c2 = document.querySelector("#f0c2").value;
  let valf1c0 = document.querySelector("#f1c0").value;
  let valf1c1 = document.querySelector("#f1c1").value;
  let valf1c2 = document.querySelector("#f1c2").value;
  let valf2c0 = document.querySelector("#f2c0").value;
  let valf2c1 = document.querySelector("#f2c1").value;
  let valf2c2 = document.querySelector("#f2c2").value;

  // Verificar que el tablero no este lleno. Si todas las celdas tienen contenido el tablero esta lleno
  if (valf0c0 && valf0c1 && valf0c2 && valf1c0 && valf1c1 && valf1c2 && valf2c0 && valf2c1 && valf2c2) {
    tableroLleno = true;
  }

  // Validar las celdas, en base a que cada celda tenga el mismo valor, 
  // y a su vez que las tres celdas no sean vacías

  // Validacion de filas
  if (valf0c0 == valf0c1 && valf0c1 == valf0c2) {
    if (valf0c0 && valf0c1 && valf0c2) {
      hayGanador = true;
    }
  }

  if (valf1c0 == valf1c1 && valf1c1 == valf1c2) {
    if (valf1c0 && valf1c1 && valf1c2) {
      hayGanador = true;
    }
  }

  if (valf2c0 == valf2c1 && valf2c1 == valf2c2) {
    if (valf2c0 && valf2c1 && valf2c2) {
      hayGanador = true;
    }
  }

  // Validación de columnas
  if (valf0c0 == valf1c0 && valf1c0 == valf2c0) {
    if (valf0c0 && valf1c0 && valf2c0) {
      hayGanador = true;
    }
  }

  if (valf0c1 == valf1c1 && valf1c1 == valf2c1) {
    if (valf0c1 && valf1c1 && valf2c1) {
      hayGanador = true;
    }
  }

  if (valf0c2 == valf1c2 && valf1c2 == valf2c2) {
    if (valf0c2 && valf1c2 && valf2c2) {
      hayGanador = true;
    }
  }

  // Validar diagonales
  if (valf0c0 == valf1c1 && valf1c1 == valf2c2) {
    if (valf0c0 && valf1c1 && valf2c2) {
      hayGanador = true;
    }
  }

  if (valf0c2 == valf1c1 && valf1c1 == valf2c0) {
    if (valf0c2 && valf1c1 && valf2c0) {
      hayGanador = true;
    }
  }

  // Mostrar que hay ganador
  // De ambas formas, getElement y querySelector, seleccionamos el H2 
  // Mencionar que uno no tiene #
  if (hayGanador == true) {
    document.querySelector("#tableroTitulo").innerHTML = "HAY UN GANADOR :)";
    document.getElementById("tableroTitulo").style.color = "green";
  }

  if (hayGanador == false && tableroLleno) {
    document.querySelector("#tableroTitulo").innerHTML = "NADIE GANÓ  :(";
    document.getElementById("tableroTitulo").style.color = "red";
  }

  // Código repetido, hecho asi para claridad
  if (hayGanador == false && tableroLleno == false) {
    let fila = Math.floor(Math.random() * 3);
    let columna = Math.floor(Math.random() * 3);
    let id = "#f" + fila + "c" + columna;
    jugada(id);
  }



}


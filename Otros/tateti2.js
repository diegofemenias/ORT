window.addEventListener("load", inicio);

// Estas tres variables son globales porque se debe mantener el valor que se le carga
// en sucesivas llamadas y comparaciones
let piezaJugador1 = "X";
let piezaJugador2 = "O";
let hayGanador = false;
let tableroLleno = false;

function inicio() {

  // Seteo del tablero
  document.querySelector("#f0c0").addEventListener("click", function () { jugada("f0c0"); });
  document.querySelector("#f0c1").addEventListener("click", function () { jugada("f0c1"); });
  document.querySelector("#f0c2").addEventListener("click", function () { jugada("f0c2"); });
  document.querySelector("#f1c0").addEventListener("click", function () { jugada("f1c0"); });
  document.querySelector("#f1c1").addEventListener("click", function () { jugada("f1c1"); });
  document.querySelector("#f1c2").addEventListener("click", function () { jugada("f1c2"); });
  document.querySelector("#f2c0").addEventListener("click", function () { jugada("f2c0"); });
  document.querySelector("#f2c1").addEventListener("click", function () { jugada("f2c1"); });
  document.querySelector("#f2c2").addEventListener("click", function () { jugada("f2c2"); });

}

function jugada(id) {

  if (!hayGanador && !tableroLleno) {
    // Jugador 1 hace su jugada
    document.querySelector("#" + id).value = piezaJugador1;

    let fila = Math.floor(Math.random() * 3);
    let columna = Math.floor(Math.random() * 3);

    // Si jugador 1 ya ganó cortamos el juego
    validarTablero();

    // Jugador 2 hace jugada automatica
    let valCelda = document.querySelector("#f" + fila + "c" + columna).value;

    if (!valCelda) {
      document.querySelector("#f" + fila + "c" + columna).value = piezaJugador2;
    }
    else {
      jugada(id);
    }

    // Luego de cada jugada, verificamos las columnas, filas y diagonales por un ganador
    validarTablero();
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
  if(valf0c0 && valf0c1 && valf0c2 && valf1c0 && valf1c1 && valf1c2 && valf2c0 && valf2c1 && valf2c2) {
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
}

window.addEventListener("load", inicio);

// Estas tres variables son globales porque se debe mantener el valor que se le carga
// en sucesivas llamadas y comparaciones
let piezaJugador1 = null;
let piezaJugador2 = null;
let turnoActual = "Jugador1";

function inicio() {
  // Seteo de piezas, primero elige jugador 1, luego elige jugador 2
  // Aqui llamo a un callback (addEventListener no acepta como parámetro una funcion con sus parámetros)
  // Se puede hacer lo mismo llamando a por ejemplo setPiezaA, setPiezaB, setPiezaC, etc...
  document.querySelector("#piezaA").addEventListener("click", function () { setPiezaJugador("X", "piezaA"); });
  document.querySelector("#piezaB").addEventListener("click", function () { setPiezaJugador("0", "piezaB"); });
  document.querySelector("#piezaC").addEventListener("click", function () { setPiezaJugador("*", "piezaC"); });
  document.querySelector("#piezaD").addEventListener("click", function () { setPiezaJugador("#", "piezaD"); });

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

  // Otra forma de seleccionar un elemento, por ID versus por el patron de estilo CSS (#)
  // Ocultamos el tablero para evitar jugar sin piezas seleecionadas
  document.getElementById("tablero").style.display = "none";
  document.getElementById("tableroTitulo").style.display = "none";
}

function setPiezaJugador(pieza, IDpieza) {
  // Si jugador 1 aun no seteo nada, se le setea, y si ya seteo algo, le corresponde a Jugador 2
  // Posteriormente se oculta ese tipo de pieza para evitar dos jugadores con la misma pieza
  if (piezaJugador1 == null) {
    piezaJugador1 = pieza;
    document.getElementById(IDpieza).style.display = "none";
  } else {
    piezaJugador2 = pieza;
    document.getElementById(IDpieza).style.display = "none";
  }

  // Mostrar el tablero y ocultar el selector de piezas solo cuando ambos hayan elegido pieza
  if (piezaJugador1 && piezaJugador2) {
    document.getElementById("tablero").style.display = "block";
    document.getElementById("tableroTitulo").style.display = "block";
    document.getElementById("piezas").style.display = "none";
    document.getElementById("piezasTitulo").style.display = "none";
  }
}

function jugada(id) {
  // Primero juega 1, luego juega 2
  if (turnoActual == "Jugador1") {
    pieza = piezaJugador1;
    turnoActual = "Jugador2";
  } else {
    pieza = piezaJugador2;
    turnoActual = "Jugador1";
  }
  document.querySelector("#" + id).value = pieza;

  // TO DO: deshabilitar el event listener del boton clickeado para impedir trampas

  // Luego de cada jugada, verificamos las columnas, filas y diagonales por un ganador
  validarTablero();
}

function validarTablero() {
  let hayGanador = false;

  let valf0c0 = document.querySelector("#f0c0").value;
  let valf0c1 = document.querySelector("#f0c1").value;
  let valf0c2 = document.querySelector("#f0c2").value;
  let valf1c0 = document.querySelector("#f1c0").value;
  let valf1c1 = document.querySelector("#f1c1").value;
  let valf1c2 = document.querySelector("#f1c2").value;
  let valf2c0 = document.querySelector("#f2c0").value;
  let valf2c1 = document.querySelector("#f2c1").value;
  let valf2c2 = document.querySelector("#f2c2").value;

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
    document.querySelector("#tableroTitulo").innerHTML = "HAY UN GANADOR";
    document.getElementById("tableroTitulo").style.color = "red";
  }
  // TO DO: deshabilitar todos los event listener para impedir seguir jugando
}

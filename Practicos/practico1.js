window.addEventListener("load", inicio);

let sumaEj15 = 0;

function inicio() {
  document
    .querySelector("#btnFormateadoEj1")
    .addEventListener("click", formatear);
  document.querySelector("#btnSumarEj2").addEventListener("click", sumar);
  document.querySelector("#btnSumarEj3").addEventListener("click", sumar3);
  document
    .querySelector("#btnOperacionEj4")
    .addEventListener("click", sumamulti);
  document.querySelector("#btnOperacionEj12").addEventListener("click", imc);
  document.querySelector("#btnOperacionEj12_2").addEventListener("click", imc2);
  document.querySelector("#btnOperacionEj13").addEventListener("click", contar);
  document
    .querySelector("#btnOperacionEj14")
    .addEventListener("click", contar3);
  document
    .querySelector("#btnOperacionEj15")
    .addEventListener("click", agregarSuma);
  document
    .querySelector("#btnOperacionEj15_2")
    .addEventListener("click", verTotal);
  document
    .querySelector("#btnOperacionEj17")
    .addEventListener("click", chirridos);
}

function formatear() {
  let nombre;
  nombre = document.querySelector("#txtNombreEj1").value;
  let apellido = document.querySelector("#txtApellidoEj1").value;
  document.querySelector("#pResultadoEj1").innerHTML =
    "Resultado: " + apellido + ", " + nombre;
}

function sumar() {
  let valor1;
  let valor2;
  document.querySelector("#pResultadoEj2").innerHTML = "Resultado: ";
  valor1 = Number(document.querySelector("#txtValor1Ej2").value);
  valor2 = Number(document.querySelector("#txtValor2Ej2").value);
  document.querySelector("#pResultadoEj2").innerHTML += valor1 + valor2;
}

function sumar3() {
  let valor1;
  let valor2;
  let valor3;

  document.querySelector("#pResultadoEj3").innerHTML = "Resultado: ";
  valor1 = Number(document.querySelector("#txtValor1Ej3").value);
  valor2 = Number(document.querySelector("#txtValor2Ej3").value);
  valor3 = Number(document.querySelector("#txtValor3Ej3").value);
  document.querySelector("#pResultadoEj3").innerHTML +=
    valor1 + valor2 + valor3;
}

function sumamulti() {
  let valor1;
  let valor2;
  document.querySelector("#pResultadoEj4Suma").innerHTML = "Resultado Suma: ";
  document.querySelector("#pResultadoEj4Multi").innerHTML =
    "Resultado Multiplicaci&oacute;n: ";
  valor1 = Number(document.querySelector("#txtValor1Ej4").value);
  valor2 = Number(document.querySelector("#txtValor2Ej4").value);
  document.querySelector("#pResultadoEj4Suma").innerHTML += valor1 + valor2;
  document.querySelector("#pResultadoEj4Multi").innerHTML += valor1 * valor2;
}

function imc() {
  let valor1;
  let valor2;
  let calculo;
  document.querySelector("#pResultadoEj12").innerHTML = "Resultado IMC: ";
  valor1 = Number(document.querySelector("#txtValor1Ej12").value);
  valor2 = Number(document.querySelector("#txtValor2Ej12").value);
  calculo = valor1 / (valor2 * valor2);
  document.querySelector("#pResultadoEj12").innerHTML += calculo;
}

function imc2() {
  let valor1 = prompt("Cual es el peso?");
  let valor2 = prompt("Cual es la altura?");
  let calculo = valor1 / (valor2 * valor2);
  alert(calculo);
}

function contar() {
  let valor1;
  valor1 = Number(document.querySelector("#pResultadoEj13").innerHTML);
  document.querySelector("#pResultadoEj13").innerHTML = valor1 + 1;
}

function contar3() {
  let valor1;
  valor1 = Number(document.querySelector("#pResultadoEj14").innerHTML);
  document.querySelector("#pResultadoEj14").innerHTML = valor1 + 3;
}

function agregarSuma() {
  document.querySelector("#labelEj15").innerHTML = "Valor a agregar";
  sumaEj15 += Number(document.querySelector("#txtValor1Ej15").value);
}

function verTotal() {
  document.querySelector("#labelEj15").innerHTML = "Resultado final";
  document.querySelector("#txtValor1Ej15").value = sumaEj15;
}

function chirridos() {
  let valor1 = document.querySelector("#txtValor1Ej17").value;
  let tempF = 0;
  let tempC = 0;
  tempF = 50 + (valor1 - 40) / 4;
  tempC = (tempF - 32) / (9 / 5);
  document.querySelector("#pResultadoEj17").innerHTML =
    "Temperatura F: " + tempF.toFixed(2);
  document.querySelector("#pResultadoEj17_2").innerHTML =
    "Temperatura C: " + tempC.toFixed(2);
}

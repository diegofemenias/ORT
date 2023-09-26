window.addEventListener("load", inicio);

function inicio() {
    document
        .querySelector("#btnEjercicio20")
        .addEventListener("click", ejercicio20);
    document
        .querySelector("#btnEjercicio22")
        .addEventListener("click", ejercicio22);
}

function ejercicio20() {

    let azucar = Number(document.querySelector("#txtAzucar").value);
    let harina = Number(document.querySelector("#txtHarina").value);
    let aceite = Number(document.querySelector("#txtAceite").value);
    let agua = Number(document.querySelector("#txtAgua").value);

    // La division entre 1 es a proposito para dejar claro
    // cual es la logica detras.
    // En una aplicación real la operacion tiene costo
    let galletasAzucar = azucar / 1;
    let galletasHarina = harina / 100;
    let galletasAceite = aceite / 1;
    let galletasAgua = agua / 1;

    let cantGalletas = 0;

    if (galletasAzucar <= galletasHarina) {
        cantGalletas = galletasAzucar;
        // Por ahora el minimo lo viene definiendo el azucar
    } else {
        cantGalletas = galletasHarina;
        //  Y si entra aqui, el minimo lo viene a definir la harina
    }

    if (galletasAceite <= cantGalletas) {
        cantGalletas = galletasAceite;
        // Y en cada uno de estos se compara contra el minimo, potencialmente seteando un nuevo minimo
    }

    if (galletasAgua <= cantGalletas) {
        cantGalletas = galletasAgua;
        // Idem
    }

    document.querySelector("#pResultadoEj20").innerHTML = Math.floor(cantGalletas);

}

function ejercicio22() {
    let monto = document.querySelector("#txtMonto").value;
    let tarjeta = document.querySelector("#chkTarjeta").checked;
    let aPagar = 0;

    if (monto < 10000) {
        if (tarjeta) {
            aPagar = monto * 0.96;
        }
        else {
            aPagar = monto; // Este else y el de abajo son redundantes, se puede simplificar haciendo let aPagar = monto;
        }
    } else {
        aPagar = monto;
    }
    document.querySelector("#pResultadoEj22").innerHTML = Math.round(aPagar);
}

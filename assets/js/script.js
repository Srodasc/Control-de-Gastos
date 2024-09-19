let listaNombreGastos = [];
let listaValoresGastos = [];



function clickboton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombreGastos);

    listaNombreGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombreGastos);
    console.log(listaValoresGastos);

    actualizarListaGastos();

    //alert('click de usuario');
}

function actualizarListaGastos() {
    listaNombreGastos.array.forEach((elemento, posicion) => {

        console.log(elemento);
        console.log(posicion);

    });
}

const agregar = document.getElementById('btnAgregar');
const calcular = document.getElementById('btnCalcular');
const numeros = document.getElementById('nudNumeros');
const espacio = document.getElementById('spcValores');

const lista = [];

function agregarNumeros() {
    const valor = parseInt(numeros.value);
    lista.push(valor);
}

function calcularPromedios() {
    const listaOrdenada = lista.sort(function (primerElemento, segundoElemento) {
        return primerElemento - segundoElemento;
    });

    const suma =  listaOrdenada.reduce(function (valorAcumulado, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }, 0);

    //Calculando la Media
    const media = suma / listaOrdenada.length;

    //Calculando la Mediana
    let mediana;
    const valorMedio1 = listaOrdenada[listaOrdenada.length / 2 - 1];
    const valorMedio2 = listaOrdenada[listaOrdenada.length / 2];
    if (listaOrdenada.length % 2 == 0) {
        mediana = (valorMedio1 + valorMedio2) / 2;
    }     
    else {
        mediana = listaOrdenada[Math.floor(listaOrdenada.length / 2)];
    }

    //Calculando la Moda
    const listaContada = {};

    listaOrdenada.map(function(elemento) { 
        if (listaContada[elemento]) {
            listaContada[elemento] += 1;
        } 
        else {
            listaContada[elemento] = 1;
        }
    });
    const arrayContado = Object.entries(listaContada).sort(function(acumulado, nuevo) {
        return acumulado[1] - nuevo[1];
    });

    const moda = parseInt(arrayContado[arrayContado.length - 1][0]);

    //Imprimiendo los resultados:
    espacio.innerHTML = 'Tu lista Ordenada queda asi: ' + listaOrdenada +
        '<br> media: ' + media + 
        '<br> mediana: ' + mediana + 
        '<br> moda: ' + moda;
}
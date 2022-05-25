// Ejercicio para cuando la lista es impar

// const lista1 = [
//     100,
//     200,
//     500,
//     800,
//     400000000,
// ];

// const mitadLista1 = parseInt (lista1.length / 2);

// function esPar(numerito){
//     if (numerito % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;

// if (esPar(lista1.length)) {
     // necesitamos dos elementos 
     // el promedio
     // la mediana
// } else {
//      mediana = lista1[mitadLista1]
    // posicion mitadLista1 dentro de lista1
    // la mediana
// }


// Ejercicio cuando la lista es par

// function calcularMediaAritmetica(lista) {
   
//     const sumaLista = lista.reduce(                          //--> método reduce lo que hace es sumar de manera acumulativa, primero el primero y luego lo suma con el 2do, luego a estos 2 agrega el 3ro y asi sucesivamente.
//          function (valorAcumulado = 0, nuevoElemento) {      //--> valorAcumulado = 0 indica el inicio del conteo y el ", nuevoElemento" es el que se le va a agregar al valor acumulado.
//             return valorAcumulado + nuevoElemento;
//          }
//     );
    
//     const promedioLista = sumaLista / lista.length; 
//     return promedioLista;  
// }

// const lista1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];

// const mitadLista1 = parseInt (lista1.length / 2); // parseInt redondea el numero quitando los decimales

// function esPar(numerito){
//     if (numerito % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;

// if (esPar(lista1.length)) {
//     const elemento1 = lista1[mitadLista1 - 1]; // se agrega - 1 porque mitadLista1 es la 3er posicion del array y restando una posicion obtenemos la 2da posicion
//     const elemento2 = lista1[mitadLista1];
//     const promedioElemento1y2 = calcularMediaAritmetica([
//     elemento1,
//     elemento2,
//     ]);

//     mediana = promedioElemento1y2;
//     //  necesitamos dos elementos 
//     //  el promedio
//     //  la mediana
// } else {
//      mediana = lista1[mitadLista1]
//     // posicion mitadLista1 dentro de lista1
//     // la mediana
// }


// Reto calcular de la mediana por medio de una funcion

//Reto sin terminar

function calcularLaMediana (lista) {
    let listaOrdenada = lista.sort(
        (a, b) => (a - b)
    );

    const mitadLista = parseInt(listaOrdenada.length / 2);
    
    let mediana;

    if (listaOrdenada.length % 2 === 0){
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista - 1];
        const promedioElementos = (elemento1 + elemento2) / 2;

        mediana = promedioElementos;
    } else {
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}

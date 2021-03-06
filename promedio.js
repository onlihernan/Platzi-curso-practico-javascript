// CALCULO DEL PROMEDIO DE UNA LISTA CON VALORES DETERMINADOS DE UN ARRAY:


// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];

// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; i++) {  ---> let i = 0 indica el comienzo de del array / i < lista1.length indica que el recuento se detendra cuando los elementos de i hayan alcanzado el valor anterior al total de elementos existentes / i++ indica que al final del ciclo se sumara un elemento
//     sumaLista1 = sumaLista1 + lista1[i];   ---> sumaLista1 es igual 
// }

// const promedioLista1 = sumaLista1 / lista1.length;



// CALCULO DE UNA LISTA CON UNA FUNCION:

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(                          //--> método reduce lo que hace es sumar de manera acumulativa, primero el primero y luego lo suma con el 2do, luego a estos 2 agrega el 3ro y asi sucesivamente.
         function (valorAcumulado = 0, nuevoElemento) {      //--> valorAcumulado = 0 indica el inicio del conteo y el ", nuevoElemento" es el que se le va a agregar al valor acumulado.
            return valorAcumulado + nuevoElemento;
         }
    );

    const promedioLista = sumaLista / lista.length; 
    return promedioLista;  
}


const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

// vamos a transformar este array en un objeto

const lista1Count = {}; // creamos un objeto vacio y luego le agregamos los elementos

lista1.map(                         
        // map recorre el Array
    function (elemento) {            
        // recibe una funcion anonima
        if (lista1Count[elemento]) {  
        //<-- "si" este "elemento" ya existe 
        //lista1Count[elemento] = lista1Count[elemento] + 1; <-- toma el valor mencionado y le suma uno
        lista1Count[elemento] += 1; //<-- metodo abreviado al de arriba
        } else {
        lista1Count[elemento] = 1;
        }  
        // elemento en este caso sería 1, 2, 3, etc... o puede ser cualquier cosa que
        // se mencione dentro del Array. lista1Count[elemento] = 1; en este caso, indica que 
        // cuando no exista el elemento "if" aparecerá este elemento una sola vez   
    }
);

// esta función "lista1.map()" hace que si un elemento se repite lo suma y si no se repite "else" solo aparece una vez. 
// lo que hace es hacer un recuento de todos los elementos dentro del array PERO no indica cual es el que mas se repite
// para eso tenemos que convertir el objeto en un array

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]; //<-- utilizamos el 1 porque el elemento que mas se repite es el que aparece en la posicion 1 (sería la 2da posicion)
    }
    );
    // "sort" la utilizamos para realizar la suma de los elementos de un "ARRAY" por eso convertimos el objeto en array 
    // Object.entries podemos enviarle como argumento un objeto que queremos convertir en array

    const moda = lista1Array[lista1Array.length - 1]; // <-- colocamos -1 porque se empieza a contar desde 0 
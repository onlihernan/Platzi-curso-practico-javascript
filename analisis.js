// Helpers o utils (variables y funciones que no son parte de la logica del trabajo pero si son necesarias para llegar al resultado)

// Indicar si el numero es par (si el residuo del nro dividido 2 es cero, entonces es par)
function esPar(numero) {
    return (numero % 2 === 0)
}

function calcularMediaAritmetica(lista) {
   
    const sumaLista = lista.reduce(                     //--> método reduce lo que hace es sumar de manera acumulativa, primero el primero y luego lo suma con el 2do, luego a estos 2 agrega el 3ro y asi sucesivamente.
    function (valorAcumulado = 0, nuevoElemento) {      //--> valorAcumulado = 0 indica el inicio del conteo y el ", nuevoElemento" es el que se le va a agregar al valor acumulado.
    return valorAcumulado + nuevoElemento;
    }
    );
    
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;  
}

//Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);  //parseInt quita los decimales redoneando para arriba

    if (esPar(lista.length)) {
    const personaMitad1 = lista [mitad - 1]; // se coloca "-1" xq "mitad" esta usando parseint y este redondea para arriba, entonces si tenemos
    // una lista de  4 elementos por ej. el resultado va a ser 2.5 redondeado para arriba es decir 3. Donde lista [mitad -1] va a ser 3 - 1 y 
    // [mitad] va a ser 3. 
    const personaMitad2 = lista [mitad];
    const mediana = calcularMediaAritmetica ([personaMitad1, personaMitad2]); 
    return mediana;

    } else {
    const personaMitad = lista[mitad];
    return personaMitad;
    }
}
//Fin helpers/utils


//Mediana general:

// Por cada persona que muestre el salario:
const salariosCol = colombia.map(
    function (persona) {
    return persona.salary;
    }
); 

// Ordenamos la lista con sort
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
    return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

// Splice sirve para cortar una sección de una lista recibe dos parametros, el 1ro para indicar donde comienza 
// y el 2do indica cuantos elementos cortará
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
); 

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
); 

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numero) {
    return (numero % 2 === 0)
}

function calcularMediaAritmetica(lista) {
   
    const sumaLista = lista.reduce(                          //--> método reduce lo que hace es sumar de manera acumulativa, primero el primero y luego lo suma con el 2do, luego a estos 2 agrega el 3ro y asi sucesivamente.
         function (valorAcumulado = 0, nuevoElemento) {      //--> valorAcumulado = 0 indica el inicio del conteo y el ", nuevoElemento" es el que se le va a agregar al valor acumulado.
            return valorAcumulado + nuevoElemento;
         }
    );
    
    const promedioLista = sumaLista / lista.length; 
    return promedioLista;  
}


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
    const personaMitad1 = lista [mitad - 1];
    const personaMitad2 = lista [mitad];
    const mediana = calcularMediaAritmetica ([personaMitad1, personaMitad2]); 
    return mediana;
    } else {
    const personaMitad = lista[mitad];
    return personaMitad;
    }
}

console.log(
    medianaSalarios(salariosColSorted)
);
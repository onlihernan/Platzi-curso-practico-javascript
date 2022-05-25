// CREAR  FUNCION [(N1*C1) + (N2*C2) + (N3*C3)] / (C1 + C2 + C3) <-- fórmula promedio ponderado

// Definir conjunto de numeros y sus pesos

const notes = [
{
    course: "Educación física",
    note: 10,
    credit: 2, 
},
{
    course: "Programación",
    note: 5,
    credit: 1,
},
{
    course: "Finanzas personales",
    note: 6,
    credit: 2,
},
];

// Multiplicar cada numero de la lista por su peso (N1*C1), etc...

const notesWithCredits = notes.map(function(noteObject){ // map hace que se repita la funcion creada en todos los elementos del Array
    return noteObject.note * noteObject.credit;
});


// Sumar todos los elementos del arreglo(Array) de elementos multiplicados por su peso (N1*C1) + (N2*C2), etc...

const sumOfNotesWithCredit = notesWithCredits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

// Sumar todos los creditos

const credits = notes.map(function (noteObject){
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

// Hacer la division entre ambas sumas (formula mencionada al principio)

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
} 
// console.log("El Área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();



// Código del triángulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     +"cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de : " + alturaTriangulo);


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}  
// console.log("El perímetro del triángulo es: " + perimetroTriangulo);

function areaTriangulo(altura, base) {
    return (altura * base) /2 ;
}
// console.log("El área del triángulo es: " + areaTriangulo);

console.groupEnd();





//Código del círculo
console.group("Círculos");

// Radio, diámetro y PI
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");
function diametroCirculo(radio) {
    return radio * 2;
}

// const diametroCirculo = 4 * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm")

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = PI * diametroCirculo;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
    return PI * (radio * radio);
}
// const areaCirculo = PI * (radioCirculo * radioCirculo);
// console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd;


//Aqui interactuamos con HTML para el cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); // esta variable trae el valor del ID mencioando
    const value = input.value;                              // esta variable trae el valor que el usuario colocó
    const perimetro = perimetroCuadrado(value);         // esta variable trae la funcion del perimetro del cuadrado con el valor del usuario
    alert("El perímetro del cuadrado es " + perimetro);                                   // esta variable hace que aparezca un cartel con el resultado en base al valor utilizado        
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es " + area);
}

//Aqui interactuamos con HTML para el triangulo

function calcularAreaTriangulo() {
    const inputAltura = document.getElementById("InputAltura");
    const inputBase = document.getElementById("InputBase");
    const value4 = Number(inputAltura.value);
    const value2 = Number(inputBase.value);
    const area = areaTriangulo(value2, value4);
    alert("El área del triángulo es: " + area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1");
    const inputLado2 = document.getElementById("InputLado2");
    const inputBase = document.getElementById("InputBase");
    const value1 = Number(inputLado1.value);
    const value2 = Number(inputLado2.value);
    const value3 = Number(inputBase.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perímetro del triángulo es: " + perimetro);
}

//Aqui interactuamos con HTML para el círculo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadio"); // esta variable trae el valor del ID mencioando
    const value = input.value;                              // esta variable trae el valor que el usuario colocó
    const perimetro = perimetroCirculo(value);         // esta variable trae la funcion del perimetro del cuadrado con el valor del usuario
    alert("El perímetro del círculo es " + perimetro);                                   // esta variable hace que aparezca un cartel con el resultado en base al valor utilizado        
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El área del círculo es " + area);
}

// RETO: Calcular la altura del triángulo
// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.

function alturaTriangulo(ladoA, ladoB, ladoBase){
    if (ladoA =! ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {

    }
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeladoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeladoB) {
        console.error("los lados a y b no son iguales");
    } else{
        // let trianguloPequenoLadoA;
        const triangulopequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = triangulopequenoLadoB * triangulopequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
        const trianguloPequenoLadoA = math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }

}


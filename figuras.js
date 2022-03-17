// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triángulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    +"cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
    );

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de : " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo);

const areaTriangulo = (alturaTriangulo + baseTriangulo) /2;
console.log("El área del triángulo es: " + areaTriangulo);

console.groupEnd();

//Código del círculo
console.group("Círculos");

// Radio, diámetro y PI
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");
const diametroCirculo = 4 * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm")
const PI = Math.PI;
console.log("PI es: " + PI);

const perimetroCirculo = PI * diametroCirculo;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd;

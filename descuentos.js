// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const priceDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, priceDiscount);
    
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



// console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento, 
// });

 
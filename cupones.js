function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

const coupons = [
    "small_discount",
    "middle_discount",
    "big_discount",
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case coupons[0]:    // small_discount
            descuento = 15;
        break;
        case coupons[1]:    // middle_discount
            descuento = 25; 
        break;
        case coupons[2]:    // big_discount
            descuento = 30;
        break;
    }


    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
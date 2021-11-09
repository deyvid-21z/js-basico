const PrecioOriginal = document.getElementById('nudPrecio');
const cupon = document.getElementById('txtCupon');
const resultado = document.getElementById('spcResultado');


const cupones = ['mermecurwen', 'encerroner', 'deyvid.dastan'];


function calcularPrecioDescontado() {
    const precio = PrecioOriginal.value;
    const descuento = cupon.value;
    var precioConDescuento;

    /*switch (descuento) {
        case cupones[0]:
            precioConDescuento = precio - (precio * 50 * 0.01);
            resultado.innerHTML = precioConDescuento;
            break;
    
        case cupones[1]:
            precioConDescuento = precio - (precio * 15 * 0.01);
            resultado.innerHTML = precioConDescuento;
            break;
        
        case cupones[2]:
            precioConDescuento = precio - (precio * 25 * 0.01);
            resultado.innerHTML = precioConDescuento;
            break;
        
        default:
            resultado.innerHTML = 'Esto cupon no es valido papu';
        
        
    }
    */

    if(cupones[0] == descuento) {
        precioConDescuento = precio - (precio * 50 * 0.01);
        

    }

    else if (cupones[1] == descuento) {
        precioConDescuento = precio - (precio * 30 * 0.01);
        
    }
    
    else if (cupones[2] == descuento) {
        precioConDescuento = precio - (precio * 40 * 0.01);
        
    }

    else {
        precioConDescuento = 'este cupon no es valido papu';
    }

    resultado.innerHTML = precioConDescuento;


    
}



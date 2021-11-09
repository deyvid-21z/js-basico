
const lienzo = document.getElementById('spcLienzo');
const d = lienzo.getContext('2d');
const LADO1 = document.getElementById('nudLadoTriangulo1');
const LADO2 = document.getElementById('nudLadoTriangulo2');
const LADO3 = document.getElementById('nudLadoTriangulo3');



function dibujoTriangulo() {
    
    
    const lado1  = parseInt(LADO1.value);
    const lado2  = parseInt(LADO2.value);
    const lado3  = parseInt(LADO3.value);



    
    const sP = (lado1 + lado2 + lado3) / 2;
    const area = Math.pow((sP * (sP - lado1) * (sP - lado2) * (sP - lado3)), (1 / 2));
    const h = area * 2 / lado1;
    const cortado = Math.pow(((lado2 * lado2) - (h * h)), (1 / 2));

    
    if (isNaN(h)) {
        alert('Tienes qye lograr que los lados del triangulo se unan papu');
    }
    else {
        d.beginPath();
        d.moveTo(10 + lado1, 200);
        d.lineTo(10 + cortado, 200 - h);
        d.lineTo(10, 200)
        d.closePath();
        d.stroke();
        
    }


    

}



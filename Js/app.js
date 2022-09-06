const color_fondo=document.getElementById('color_fondo');
const numero=document.getElementById('numero');

let cantidad=0;

let tiempo=setInterval(() =>{
cantidad+=1
numero.textContent=cantidad
    if(cantidad===50)
    {
        clearInterval(tiempo)
    }
}, 50);
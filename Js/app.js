const color_fondo=document.getElementById('color_fondo');
const numero=document.getElementById('numero');
let URLactual = window.location;
let i = URLactual.toString().split('/')[4].substring(4, 5);

if (URLactual.toString().split('/')[4].substring(5, 6) != '.') {
    i=URLactual.toString().split('/')[4].substring(4, 6)
}
alert(i); 
let cantidad = 0;

let tiempo=setInterval(() =>{
cantidad+=1
numero.textContent=cantidad
    if(cantidad===50)
    {
        clearInterval(tiempo)
    }
}, 50);
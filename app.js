const borde = document.querySelector('.foto')


let bordeActivo = true;

borde.addEventListener('click', () => {

    if (bordeActivo ){
        borde.style.border = 'none'
        bordeActivo = false
    }else {
        borde.style.border = '3px solid red'
        bordeActivo = true
    }

})


const texto = document.querySelector(".verificar");
const boton = document.querySelector('button');

boton.addEventListener("click", () => {
    const select1 = Number(document.querySelector("#kunlao").value);
    const select2 = Number(document.querySelector("#liukhan").value);
    const select3 = Number(document.querySelector("#raiden").value);
    const select4 = Number(document.querySelector("#scorpion").value);
    const select5 = Number(document.querySelector("#subzero").value);

    let suma = select1 + select2 + select3 + select4 + select5
    console.log(suma)

    if (suma <= 10) {
        texto.innerHTML = "Llevas: " + suma + " stickers"
    } else {
        texto.innerHTML = "Llevas demasiados stickers"
        
    }
    
});

const texto2 = document.querySelector(".respuesta");
const boton2 = document.querySelector(".password");
const video = document.querySelector("video"); 

boton2.addEventListener("click", () => {
    const select6 = Number(document.querySelector("#numero1").value);
    const select7 = Number(document.querySelector("#numero2").value);
    const select8 = Number(document.querySelector("#numero3").value);

    if (select6 === 9 && select7 === 1 && select8 === 1) {
        texto2.innerHTML = "Password 1 correcto"
        video.play()
        video.loop = true
    } else if (select6 === 7 && select7 === 1 && select8 === 4) {
        texto2.innerHTML = "Password 2 Correcto"
        video.play()
    } else {
        texto2.innerHTML = "Password Incorrecto"
        video.pause()
        video.loop = true
    }
});
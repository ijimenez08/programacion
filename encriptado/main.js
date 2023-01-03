let texbox = document.getElementById("cuadrotxt");
let resultado =  document.getElementById("resultado");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
texbox.focus();

const removeAccents = (str) => 
{
    const newLocal = /[\u0300-\u036f]/g;
    return str.normalize("NFD").replace(newLocal, "");
}

boton1.addEventListener("click",encriptar);
boton2.addEventListener("click",desencriptar);


function encriptar()
{
    let texto =texbox.value
        texto=texto.replaceAll("e", "enter");
        texto=texto.replaceAll("i", "imes");
        texto=texto.replaceAll("a", "ai");
        texto=texto.replaceAll("o", "ober");
        texto=texto.replaceAll("u", "ufat");
        mss.value=texto;    
}
function desencriptar()
{
        let texto=texbox.value
            texto=texto.replaceAll("enter", "e");
            texto=texto.replaceAll("imes", "i");
            texto=texto.replaceAll("ai", "a");
            texto=texto.replaceAll("ober", "o");
            texto=texto.replaceAll("ufat", "u");
            mss.value=texto;
       
}
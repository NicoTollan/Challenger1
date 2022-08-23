const inputMensaje = document.querySelector(".inputMensaje");
const mensaje = document.querySelector(".outputMensaje");


function encriptar(textoencriptado) {
    
    let matrizCodigo = [["e", "enter"],["i","imes"],[ "a","ai"],["o","ober"],["u","ufat"]]
    
    textoencriptado = textoencriptado.toLowerCase(); 

    for (let i=0; i<matrizCodigo.length; i++) {
        if(textoencriptado.includes(matrizCodigo[i][0])) {
            textoencriptado = textoencriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return textoencriptado;
}

function btnEncriptar(){
    const mensajeEncriptado = encriptar(inputMensaje.value);
    mensaje.value = mensajeEncriptado;
    mensaje.style.backgroundImage = "none";
    inputMensaje.value = "";
}

function desencriptar(textodesencriptado) {
    
    let matrizCodigo = [["e", "enter"],["i","imes"],[ "a","ai"],["o","ober"],["u","ufat"]]
    
    textodesencriptado = textodesencriptado.toLowerCase();

    for (let i=0; i<matrizCodigo.length; i++) {
        if(textodesencriptado.includes(matrizCodigo[i][1])) {
            textodesencriptado = textodesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return textodesencriptado;
}

function btnDesencriptar(){
    const mensajeDesncriptado = desencriptar(inputMensaje.value);
    mensaje.value = mensajeDesncriptado;
    mensaje.style.backgroundImage = "none";
    inputMensaje.value = "";
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Mensaje copiado!");

}
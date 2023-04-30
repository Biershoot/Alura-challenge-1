var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var maniqui = document.querySelector(".contenedor-maniqui");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
  ocultarAdelante();
  var cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
  var cajatexto = document.querySelector(".caja-texto");
  return cajatexto.value;
}
function ocultarAdelante() {
  maniqui.classList.add("ocultar");
contenedor.classList.add("ocultar");
}

function encriptarTexto(texto) {
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoFinal += "ai";
    } else if (texto[i] === "e") {
      textoFinal += "enter";
    } else if (texto[i] === "i") {
      textoFinal += "imes";
    } else if (texto[i] === "o") {
      textoFinal += "ober";
    } else if (texto[i] === "u") {
      textoFinal += "ufat";
    } else {
      textoFinal += texto[i];
    }
  }

  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoFinal += "a";
      i = i + 1;
    } else if (texto[i] === "e") {
      textoFinal += "e";
      i = i + 4;
    } else if (texto[i] === "i") {
      textoFinal += "i";
      i = i + 3;
    } else if (texto[i] === "o") {
      textoFinal += "o";
      i = i + 3;
    } else if (texto[i] === "u") {
      textoFinal += "u";
      i = i + 3;
    } else {
      textoFinal += texto[i];
    }
  }

  return textoFinal;
}

const botonCopiar = document.querySelector(".btn-encriptar");
  botonCopiar.addEventListener("click",copiar = () => {
    var contenido =document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
  });



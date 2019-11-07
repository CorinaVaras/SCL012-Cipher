window.cipher = {
  encode: (texto,valorFijo) => {

  let textCodificado=""; 

  let palabra = texto.toUpperCase();

  for (let i=0; i<palabra.length; i++) {

    let numLetra = palabra.charCodeAt(i);
  
    let resultado = ((numLetra - 65) + valorFijo) % 26 + 65;
  
    let resultadoAscci = String.fromCharCode(resultado);

    textCodificado += resultadoAscci;

  }

    return textCodificado;

  },

  
  
  decode: (texto,valorFijo) => {

    let textCodificado=""; 
    let palabra = texto.toUpperCase();

  for (let i=0; i<palabra.length; i++) {

    let numLetra = palabra.charCodeAt(i);
  
    let resultado = ((numLetra - 65) - valorFijo) % 26 + 65;
  
    let resultadoAscci = String.fromCharCode(resultado);

    if (resultadoAscci === ":") {
      resultadoAscci=" "; 
    }

    textCodificado += resultadoAscci;

  }

    return textCodificado;



  }
};








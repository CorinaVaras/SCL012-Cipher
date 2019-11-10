window.cipher = {
  encode: (texto, valorFijo) => {

    let valor = parseInt(valorFijo);
    let textCodificado = "";
    


    for (let i = 0; i < texto.length; i++) {

      let numLetra = texto.charCodeAt(i);

      let numRestar = 0;
      let resultado="";
      if (numLetra > 64 && numLetra < 91) {

        numRestar = 65;
        resultado = ((numLetra - numRestar) + valor) % 26 + numRestar;

      } else if (numLetra>96 && numLetra<123) {

        numRestar=97;
        resultado = ((numLetra - numRestar) + valor) % 26 + numRestar;
      }  else if (numLetra === 164 || numLetra === 165){
        resultado=numLetra+10;
      } else {
        resultado=numLetra;

      }



      let resultadoAscci = String.fromCharCode(resultado);

      textCodificado += resultadoAscci;

    }

    return textCodificado;

  },



  decode: (texto, valorFijo) => {

    let valor = parseInt(valorFijo);
    let textCodificado = "";
    

    for (let i = 0; i <texto.length; i++) {

      let numLetra = texto.charCodeAt(i);
      let resultado="";
      let numRestar = 0;
      if (numLetra > 64 && numLetra < 91) {

        numRestar = 65;
        resultado = ((numLetra - numRestar) - valor) % 26 + numRestar;

      } else if (numLetra>96 && numLetra<123) {

        numRestar=97;
        resultado = ((numLetra - numRestar) - valor) % 26 + numRestar;
      } else if (numLetra === 174 || numLetra === 175) {
      resultado=numLetra-10;
      } else {
        resultado=numLetra;
      }


      let resultadoAscci = String.fromCharCode(resultado);

      if (resultadoAscci === ":") {
        resultadoAscci = " ";
      }

      textCodificado += resultadoAscci;

    }

    return textCodificado;



  }
};








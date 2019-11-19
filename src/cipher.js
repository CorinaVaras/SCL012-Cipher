window.cipher = {

  encode: (texto, valorFijo) => {

    // Valor fijo lo capturo en una variable llamada valor y le paso el parseInt
    let valor = parseInt(valorFijo);
    //Declaro esta variable y la dejo vacia para que se vaya sumando y almacenando mi resultado
    let textCodificado = "";

    // Corro este ciclo for para que depende del largo del texto me valide todos esas condiciones que estan dentro del bucle 
    for (let i = 0; i < texto.length; i++) {

      //Almacenamos en una variable el resultado de obtener el codigo ascci de la letra 
      let numLetra = texto.charCodeAt(i);

      //****************************************************************************************

      // Ya tenemos nuestro codigo ascci, ahora vamos a emplear nuestra formula con las diferentes validaciones

      // Inicializamos una variable resultado vacia para almacenar en ella el resultado de aplicar la formula 
      let resultado = "";

      // Válidamos las letras mayúsculas
      if (numLetra > 64 && numLetra < 91) {

        resultado = ((numLetra - 65) + valor) % 26 + 65;

        // Válidamos las letras minusculas 
      } else if (numLetra > 96 && numLetra < 123) {

        resultado = ((numLetra - 97) + valor) % 26 + 97;

        // Válidamos la ñ y la Ñ
      } else if (numLetra === 241 || numLetra === 209) {

        resultado = numLetra + 10;

      } else {

        resultado = numLetra;

      }


      // //Almacenamos en una variable el resultado de transformar el código ascci a una letra 
      let resultadoAscci = String.fromCharCode(resultado);

      textCodificado += resultadoAscci;

    }

    return textCodificado;

  },



  decode: (texto, valorFijo) => {

    let valor = parseInt(valorFijo);
    let textCodificado = "";


    for (let i = 0; i < texto.length; i++) {

      let numLetra = texto.charCodeAt(i);
      let resultado = "";

      if (numLetra > 64 && numLetra < 91) {

        resultado = ((numLetra - 90) - valor) % 26 + 90;

      } else if (numLetra > 96 && numLetra < 123) {

        resultado = ((numLetra - 122) - valor) % 26 + 122;

      } else if (numLetra === 251 || numLetra === 219) {
        resultado = numLetra - 10;
      } else {
        resultado = numLetra;
      }


      let resultadoAscci = String.fromCharCode(resultado);

      textCodificado += resultadoAscci;

    }

    return textCodificado;



  }
};








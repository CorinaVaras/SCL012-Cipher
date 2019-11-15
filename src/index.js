// window.onload = () => {

	
   // llamo a mi etiqueta button del id btn1 y la pongo al escucha con el evento click 
	document.getElementById("btn1").addEventListener("click", () => {
 
		// Capturo en la variable mensaje Codi el valor de la primera etiqueta text area, esta funcion para el btn 1
		let mensajeCodi = document.getElementById("textArea").value;
		//Capturo en la variable seleccion el valor ingresado por la etiqueta selector  
		let seleccion=document.getElementById("tipoCifrado").value;

		// Esta validación es para que aparezca una alerta si no se selecciona alguna opción de cifrado en la etiqueta selector  
		if (seleccion === "Elige un tipo de cifrado") {
			alert("Por favor elige un nivel de seguridad");
			return;
		}
		
		// Capturo en esta variable la funcion encode, para poder pasarle el valor a la etiqueta text area de resultado  
		let mensajeCodificado = cipher.encode(mensajeCodi, seleccion);
        // llamo a mi etiqueta text area de resultado y le paso el valor de la funcion encode
		document.getElementById("textAreaResult").value = mensajeCodificado


	});

    // llamo a mi etiqueta button del id btn2 y la pongo al escucha con el evento click 
	document.getElementById("btn2").addEventListener("click", () => {

		// Capturo en la variable mensaje Deco el valor de la primera etiqueta text area, esta funcion para el btn 2
		let mensajeDeco = document.getElementById("textArea").value
		//Capturo en la variable seleccion el valor ingresado por la etiqueta selector  
		let seleccion=document.getElementById("tipoCifrado").value;
		
		if (seleccion === "Elige un tipo de cifrado") {
			alert("Por favor elige un tipo de cifrado");
			return;
		}

		// Capturo en esta variable la funcion encode, para poder pasarle el valor a la etiqueta text area de resultado  
		let mensajeDecodificado = cipher.decode(mensajeDeco, seleccion);
        // llamo a mi etiqueta text area de resultado y le paso el valor de la funcion decode
		document.getElementById("textAreaResult").value = mensajeDecodificado

	});

	document.getElementById("btn3").addEventListener("click", () => {

		//Identifico mi etiqueta text area y le paso un valor vacio, para que haga la funcion de limpiar  
		document.getElementById("textAreaResult").value ="";
		//Identifico mi etiqueta text area y le paso un valor vacio, para que haga la funcion de limpiar 
		document.getElementById("textArea").value ="";
		document.getElementById("tipoCifrado").value="Elige un nivel de seguridad";

	});


// }
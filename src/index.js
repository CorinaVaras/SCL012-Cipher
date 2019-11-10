window.onload = () => {

	

	document.getElementById("btn1").addEventListener("click", () => {

		let mensajeCodi = document.getElementById("textArea").value;
		let seleccion=document.getElementById("tipoCifrado").value;

		
		if (seleccion === "Elige un tipo de cifrado") {
			alert("Por favor elige un tipo de cifrado");
			return;
		}

		let mensajeCodificado = cipher.encode(mensajeCodi, seleccion);

		document.getElementById("textAreaResult").value = mensajeCodificado


	});

	document.getElementById("btn2").addEventListener("click", () => {

		let mensajeDeco = document.getElementById("textArea").value
		let seleccion=document.getElementById("tipoCifrado").value;
		
		if (seleccion === "Elige un tipo de cifrado") {
			alert("Por favor elige un tipo de cifrado");
			return;
		}

		
		let mensajeDecodificado = cipher.decode(mensajeDeco, seleccion);

		document.getElementById("textAreaResult").value = mensajeDecodificado

	});

	document.getElementById("btn3").addEventListener("click", () => {

		document.getElementById("textAreaResult").value ="";


	});








}
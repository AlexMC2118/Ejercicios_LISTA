//Alejandro Moreno Camacho
'use strict';

let frase = prompt("¿Te atreves a preguntarme?");
let vocales = ['a', 'e', 'i', 'o' , 'u'];

function iniciar(frase, vocales){
  document.write("<p>");
  for (let i=0; i<frase.length; i++) {
	for (let j=0; j<5; j++) {
		if (frase[i].toLowerCase() == vocales[j]){
			document.write(frase[i]);
		}
	}
}

  document.write("</p>");
}

iniciar(frase, vocales);

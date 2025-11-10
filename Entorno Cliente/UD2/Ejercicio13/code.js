let tlf = prompt("Escribe un número de teléfono, todo junto, incluye el prefijo")
while(tlf.length != 12){
tlf = prompt("Escribe un número de teléfono")
}

if(tlf.startsWith("+34"))
    alert("Eres de España")
else if(tlf.startsWith("+44"))
    alert("Eres del Reino Unido")
else if(tlf.startsWith("+33"))
    alert("Eres de Francia")
else
    alert("No sé de dónde eres")
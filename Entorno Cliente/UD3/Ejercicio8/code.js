function generarCorreo() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    
    let email = nombre.charAt(0).toLowerCase() + apellido.toLowerCase() + "@cpilosenlaces.com"
    
    document.getElementById("resultado").textContent = "Correo generado: " + email;
}

function actualizarHora() {
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
  
    // Asegurar que los valores tengan dos dígitos
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
  
    var horaActual = horas + ':' + minutos;
    document.getElementById('hora-actual').innerText = horaActual;
  }
  
  // Actualizar la hora cada segundo
  setInterval(actualizarHora, 1000);
  
  // Llamar a la función para mostrar la hora actual al cargar la página
  actualizarHora();
  
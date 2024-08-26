const salida = document.getElementById('salida');

salidaTexto();

window.addEventListener('resize', salidaTexto);

function salidaTexto() {
  salida.innerHTML = 'El tamaño actual de la ventana es: '+ window.innerWidth + ' x ' + window.innerHeight;
}

 // Función JavaScript para realizar la conversión de monedas
 function convertir() {
    var cantidad = document.getElementById('cantidad').value;
    var monedaDestino = document.getElementById('monedaDestino').value;

    // Aquí debes implementar la lógica para convertir la cantidad de la moneda origen a la moneda destino
    // Por ejemplo, puedes usar una API de conversión de monedas
    if (monedaDestino == "USD") {
        var resultado = cantidad * 7.15;
    } else {
        var resultado = cantidad * 8.41
    }
    document.getElementById('resultado').innerText = 'Resultado  ' + resultado + ' ' + monedaDestino;
 }
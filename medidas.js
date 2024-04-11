function convertir() {
    var cantidad = document.getElementById('cantidad').value;
    var monedaDestino = document.getElementById('monedaDestino').value;

    // Aquí debes implementar la lógica para convertir la cantidad de la moneda origen a la moneda destino
    // Por ejemplo, puedes usar una API de conversión de monedas
    if (monedaDestino == "P") {
        var resultado = cantidad*39.3701 ;
        document.getElementById('resultado').innerText = 'Resultado  ' + resultado + 'pul';
    } else {
        var resultado = cantidad * 100;
        document.getElementById('resultado').innerText = 'Resultado  ' + resultado + 'cm';
    }
    
 }
$(document).ready(function() {
    // Obtener el valor del parámetro 'codigo' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const codigo = urlParams.get('codigo');

    // Realizar una solicitud AJAX para obtener los detalles del vehículo
    $.ajax({
        url: `http://localhost:4000/vehiculos/${codigo}`,
        method: 'GET',
        success: function(data) {
            // Asignar los datos del vehículo a los elementos HTML
            $('#modelo').text(`Modelo: ${data.Modelo}`);
            $('#marca').text(`Marca: ${data.Marca}`);
            $('#anio').text(`Año: ${data.Anio}`);
            $('#precioGerente').text(`Precio Gerente: ${data.PrecioGerente}`);
            $('#precioWeb').text(`Precio Web: ${data.PresioWeb}`);
            $('#precioLista').text(`Precio Lista: ${data.PrecioLista}`);
            // $('#imagen').attr('src', data.Imagen);
            $('#imagen').attr('src', './images/nuevos/' + data.Imagen);

        },
        error: function() {
            $('#detalleVehiculo').html('<p>Error al cargar los detalles del vehículo</p>');
        }
    });
});
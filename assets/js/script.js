
$(function () {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    $('#card-title-1').click(function () {
        $('#card-text-1').toggle();
    });
    $('#card-title-2').click(function () {
        $('#card-text-2').toggle();
    });
    $('#card-title-3').click(function () {
        $('#card-text-3').toggle();
    });
    $('#card-title-4').click(function () {
        $('#card-text-4').toggle();
    });

    // Enviar correo
    $('#enviarcorreo').on("click", function () {
        alert("¡El correo fue enviado correctamente!");
    });

});

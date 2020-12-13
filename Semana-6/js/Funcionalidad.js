$(".precio, .unidades").on("change", function() {
    var tr = $(this).closest("tr");
    calcularImporte(tr);
    calcularTotales();
});


function calcularImporte(tr) {

    var precio = Number($(tr).find(".precio").val());
    console.log(precio);

    var unidades = Number($(tr).find(".unidades").val());
    console.log(unidades);


    var importe = precio * unidades;
    console.log(importe);
    $(tr).find(".importe").val(importe);
}

function calcularTotales() {
    var subtotal = 0;
    $(".importe").each(function() {
        subtotal += Number($(this).val())
    });
    $("#subtotal").text(subtotal);
}
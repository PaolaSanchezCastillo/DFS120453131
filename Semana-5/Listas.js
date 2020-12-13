$(document).ready(
    function() {
        $("#tarea").on("focus", function(e) {
            $(this).css("background-color", "yellow");
        });

        $("#editar").on("mouseenter", function(e) {
            $(this).css({
                "text-transform": "uppercase",
                "background-color": 'black',
                "color": "white"
            });
        });


        $("#agregar").on('click', function(e) {
            var tarea = $("#tarea").val();
            // text()
            //console.log(tarea);
            $(".lista >li").append("<li>" + tarea + "</li>");

        });

        $("#limpiar").on("click", function() {
            $("#tarea").val('');
        });


        // "click", 'li'
        //appendTo

        //   $(".lista").on("click", 'li', function() {
        //      $(this).appendTo(".realizadas");
        //  })

        $('.lista').on("DOMSubtreeModified",
            function() {
                $('.lista>li').on("click", function() {
                    console.log($(this).text());
                })

            }
        )



    }
)
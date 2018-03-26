$(document).ready(function(){

    var t1 = $("#t1");
    var toggleView = true;
    var div_abierta = null;

    var muchoTexto = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
        galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
        quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
        las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo 
        Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
    `;

    var inner_codigo = `class Voila {
    public:
    // Voila
    static const string VOILA = "Voila";
    
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
    // will not interfere with embedded <a href="#voila2">tags</a>.
} 
    `;

    $("div.tarjeta").click(function(){
        //el this aquí significa get(div)
        //console.log(this.id);
        var descripcion = $("#descripcion-lg");
        var showInfo    = $("#show-info-lg");
        var codigo      = $("#codigo-lg");
        if(screen.width<576){
            showInfo    = $("#show-info-xs");
            codigo      = $("#codigo-xs");
            descripcion = $("#descripcion-xs");
        }
        if(screen.width>=576 && screen.width<=768){
            showInfo    = $("#show-info-sm");
            codigo      = $("#codigo-sm");
            descripcion = $("#descripcion-sm");
        }
        div_abierta = showInfo;
        descripcion.text(muchoTexto);
        codigo.text(inner_codigo).removeClass("prettyprinted");
        PR.prettyPrint();
        showInfo.slideToggle(500);
        if(toggleView){
            $('html, body').stop().animate({
                scrollTop: showInfo.offset().top
            }, 500);
        }
        toggleView = !toggleView;
    });

    $("button.close").click(function(){
        div_abierta.slideToggle(500);
        $('html, body').stop().animate({
            scrollTop: $("#tarjeta1").offset().top
        }, 500);
        toggleView = !toggleView;
    });

    // if(screen.width>=1200){
    //     $("#nombre").append('<video autoplay muted loop id="myVideo" class="d-none d-xl-block"><source src="background.mp4" type="video/mp4"></video>');
    // }
});
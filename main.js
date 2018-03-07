$(document).ready(function(){

    var showInfo = $("#show-info1");
    var t1 = $("#t1");
    var toggleView = true;

    var muchoTexto = `
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
        Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
        cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
        galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
        No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
        quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
        las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo 
        Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
    `;

    var codigo = `class Voila {
    public:
    // Voila
    static const string VOILA = "Voila";
    
    // will not interfere with embedded <a href="#voila2">tags</a>.
} 
    `;

    $("div.tarjeta").click(function(){
        $("#descripcion").text(muchoTexto);
        $("#codigo").text(codigo).removeClass("prettyprinted");
        PR.prettyPrint();
        showInfo.slideToggle(300);
        if(toggleView){
            $('html, body').stop().animate({
                scrollTop: t1.offset().top
            }, 300);
        }
        toggleView = !toggleView;
    });
});
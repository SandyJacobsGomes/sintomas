//Português
$(function() {
    $(".br").click(function() {
        //cabeçalho
        $("#logo").text("Sintomas");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //seção
        $("#title").text("Tosse");
        $("#title2").text("Coceira");
        $("#title3").text("Dor");
        $("#title4").text("Sangramento");
    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $("#logo").text("Symptoms");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("Cough");
        $("#title2").text("Itch");
        $("#title3").text("Pain");
        $("#title4").text("Bleeding");
    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $("#logo").text("Síntomas");
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#title").text("Tos");
        $("#title2").text("Picar");
        $("#title3").text("Dolor");
        $("#title4").text("Sangrado");
    });
});
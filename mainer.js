$(document).ready(function(){
    $("#academic").hide();
    $("#personal").hide();
    $("#professional").hide();
    $("#about").hide();
    console.log($("#academic").is(":visible"));
    console.log($("#personal").is(":visible"));
    console.log($("#professional").is(":visible"));

    $(".next-button.1").click(function(){
        $("#academic").show();
        if ($(".academic").is(":visible")) {
            console.log($("#academic").is(":visible"));
            $("#professional").hide();
            console.log($("#professional").is(":visible"));
            $("#personal").hide();
            console.log($("#personal").is(":visible")); //i might just code the linear gradient change directly into the js, because having a "toggle" isn't really working out or it stays stuck
        }
        $(".left-container.academic").toggleClass("show");
        $(".content-wrap.academic").toggleClass("show");
        $(".next-button.1").toggleClass("change");
    })

    $(".next-button.2").click(function(){
        $("#personal").show();
        $(".left-container.personal").toggleClass("show");
        $(".content-wrap.personal").toggleClass("show");
        $(".next-button.2").toggleClass("change");
        // if ($(".academic").is(":hidden")) {
        //     console.log($("#academic").is(":hidden"));
        //     $("#professional").show();
        //     $("#personal").show();
        // }
        if ($(".personal").is(":visible")) {
            console.log($("#personal").is(":visible"));
            $("#academic").hide();
            console.log($("#academic").is(":visible"));
            $("#professional").hide();
            console.log($("#professional").is(":visible")); //i might just code the linear gradient change directly into the js, because having a "toggle" isn't really working out or it stays stuck
        }
    })

    $(".next-button.3").click(function(){
        $("#professional").show();
        $(".left-container.professional").toggleClass("show");
        $(".content-wrap.professional").toggleClass("show");
        $(".next-button.3").toggleClass("change");
        if ($(".professional").is(":visible")) {
            console.log($("#professional").is(":visible"));
            if ($(".left-container.academic").hasClass("show")) {
                $(".left-container.academic").toggleClass("show");
            }
            $("#academic").hide();
            console.log($("#academic").is(":visible"));
            $("#personal").hide();
            console.log($("#personal").is(":visible")); //i might just code the linear gradient change directly into the js, because having a "toggle" isn't really working out or it stays stuck
        }
    })

    //etc.
    $(".content-wrap.academic.1").click(function(){
        // $(".content-container").css("content-visibility", "visible");
        $(".content-container").toggleClass("show");
        // $(".vert-layout").toggleClass("show");
        $(".content-wrap.academic.1").toggleClass("change");
    })
    $(".content-wrap.academic.2").click(function(){
        $(".content-wrap.academic.2").toggleClass("change");
    })
})
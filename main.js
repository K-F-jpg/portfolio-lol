$(document).ready(function(){
    $("#academic").hide();
    $("#personal").hide();
    $("#professional").hide();

    $(".next-button.1").click(function(){
        $("#academic").show();
        $(".left-container.academic").toggleClass("show");
        $(".content-wrap.academic").toggleClass("show");
        $(".next-button.1").toggleClass("change");
        $(".content-container").css("content-visibility", "hidden");
        // if ($(".left-container.personal").is(":visible")) {
        //     $("#personal").hide();
        //     $("#academic").show();
        //     // $(".next-button.2").toggleClass("change");
        //     if ($(".next-button.2").is(".change")) {
        //         $(".next-button.2").toggleClass("change");
        //     }
        // }
        // if ($(".left-container.professional").is(":visible")) {
        //     $("#professional").hide();
        //     $("#personal").show();
        //     // $(".next-button.1").toggleClass("change");
        //     if ($(".next-button.3").is(".change")) {
        //         $(".next-button.3").toggleClass("change");
        //     }
        // }
    })
    if ($(".academic").is(":hidden")) {
        console.log("'academic' is hidden.");
        $("#professional").show();
        $("#personal").show();
    } else if ($(".academic").is(":visible")) {
        console.log("'academic' is visible.")
        $("#professional").hide();
        $("#personal").hide();
    }
    $(".next-button.2").click(function(){
        $(".left-container.personal").toggleClass("show");
        $(".content-wrap.personal").toggleClass("show");
        $(".next-button.2").toggleClass("change");
        // $(".left-container.academic").is("show") ? $(".left-container.academic").hide() : $(".left-container.academic").show();
        // if ($('.left-container.academic').length) {
        //     $('.left-container.academic').hide();
        //     $('.next-button.1').toggleClass("change");
        // }
        // if ($(".left-container.academic").is(":visible")) {
        //     $(".left-container.academic").toggleClass("show");
        //     $(".next-button.1").toggleClass("change");
        // }

        //this one seems to be working for now, just going to toggle it while I check for simpler, more consistent solutions.
        // if ($(".left-container.academic").is(":visible")) {
        //     $("#academic").hide();
        //     $("#personal").show();
        //     // $(".next-button.1").toggleClass("change");
        //     if ($(".next-button.1").is(".change")) {
        //         $(".next-button.1").toggleClass("change");
        //     }
        // }
        // if ($(".left-container.professional").is(":visible")) {
        //     $("#professional").hide();
        //     $("#personal").show();
        //     // $(".next-button.1").toggleClass("change");
        //     if ($(".next-button.3").is(".change")) {
        //         $(".next-button.3").toggleClass("change");
        //     }
        // }
    })
    $(".next-button.3").click(function(){
        $(".left-container.professional").toggleClass("show");
        $(".content-wrap.professional").toggleClass("show");
        $(".next-button.3").toggleClass("change");
        // if ($(".left-container.academic").is(":visible")) {
        //     $("#academic").hide();
        //     $("#professional").show();
        //     // $(".next-button.1").toggleClass("change");
        //     if ($(".next-button.1").is(".change")) {
        //         $(".next-button.1").toggleClass("change");
        //     }
        // }
        // if ($(".left-container.personal").is(":visible")) {
        //     $("#personal").hide();
        //     $("#professional").show();
        //     // $(".next-button.2").toggleClass("change");
        //     if ($(".next-button.2").is(".change")) {
        //         $(".next-button.2").toggleClass("change");
        //     }
        // }
    })
    $(".content-wrap.academic.1").click(function(){
        $(".content-container").toggleClass("show");
        // $(".vert-layout").toggleClass("show");
        $(".content-wrap.academic.1").toggleClass("change");
    })
    $(".content-wrap.academic.2").click(function(){
        $(".content-wrap.academic.2").toggleClass("change");
    })
})
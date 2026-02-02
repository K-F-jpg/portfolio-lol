// $(".next-button.1").click(function(){
//     $("#academic").show();
//     $(".left-container.academic").toggleClass("show");
//     $(".content-wrap.academic").toggleClass("show");
//     $(".next-button.1").toggleClass("change");
//     if ($("#academic").is(":visible")) {
//         if ($(".left-container.professional").hasClass("show")) {
//             $(".left-container.professional").toggleClass("show");
//             $(".content-wrap.professional").toggleClass("show");
//             $(".next-button.3").toggleClass("change");
//         }
//         if ($(".left-container.personal").hasClass("show")) {
//             $(".left-container.personal").toggleClass("show");
//             $(".content-wrap.personal").toggleClass("show");
//             $(".next-button.2").toggleClass("change");
//         }
//         if ($(".left-container.aboutMe").hasClass("show")) {
//             $(".left-container.aboutMe").toggleClass("show");
//             $(".content-wrap.aboutMe").toggleClass("show");
//             $(".next-button.6").toggleClass("change");
//         }
//         if ($(".left-container.contactMe").hasClass("show")) {
//             $(".left-container.contactMe").toggleClass("show");
//             $(".content-wrap.contactMe").toggleClass("show");
//             $(".next-button.7").toggleClass("change");
//         }
//     }
// })

$(document).ready(function(){
    //academic
    $("#MH").hide();
    $("#grates").hide();
    $("#zine").hide();
    $("#fridge").hide();
    $("#academicContainer").hide();
    $("#personalContainer").hide();
    //personal
    $("#worms").hide();
    $("#potions").hide();
    $("#pot").hide();
    //professional
    $("#bookmark").hide();
    $("#WAVE").hide();
    $("#HTU").hide();

    //academic
    $(".content-wrap.academic.1").click(function(){
        $("#academicContainer").show(); //this could be the key
        $("#MH").show();
        $("#grates").hide();
        $("#zine").hide();
        $("#fridge").hide();
        $("#slice").hide();
        $("#book").hide();
        $("#cards").hide();
        $(".content-container.academic").toggleClass("show");
        // if ($("#MH").is(":visible")) {
        //     if ($(".vert-layout.grates").hasClass("show")) {
        //         $(".vert-layout.grates").toggleClass("show");
        //         $(".content-wrap.academic.2").toggleClass("change");
        //     }
        // }
        $(".vert-layout.MH").toggleClass("show");
        $(".content-wrap.academic.1").toggleClass("change");
        // console.log($("#MH").is(":visible"))
    })
    $(".content-wrap.academic.2").click(function(){
        $("#academicContainer").show();
        $("#grates").show();
        $("#MH").hide();
        $("#zine").hide();
        $("#fridge").hide();
        $("#slice").hide();
        $("#book").hide();
        $("#cards").hide();
        console.log($("#grates").is(":visible"))
        // if ($("#grates").is(":visible")) {
        //     if ($(".vert-layout.MH").hasClass("show")) {
        //         $(".vert-layout.MH").toggleClass("show");
        //         $(".content-wrap.academic.1").toggleClass("change");
        //     }
        // }
        $(".content-container.academic").toggleClass("show");
        $(".vert-layout.grates").toggleClass("show");
        $(".content-wrap.academic.2").toggleClass("change");
    })
    $(".content-wrap.academic.3").click(function(){
        $("#academicContainer").show();
        $("#zine").show();
        $("#MH").hide();
        $("#grates").hide();
        $("#fridge").hide();
        $("#slice").hide();
        $("#book").hide();
        $("#cards").hide();
        console.log($("#zine").is(":visible"))
        $(".content-container.academic").toggleClass("show");
        $(".vert-layout.zine").toggleClass("show");
        $(".content-wrap.academic.3").toggleClass("change");
    })
    $(".content-wrap.academic.4").click(function(){
        $("#academicContainer").show();
        $(".content-container.academic").toggleClass("show");
        $(".content-wrap.academic.4").toggleClass("change");
        $(".vert-layout.fridge").toggleClass("show");
        $("#MH").hide();
        $("#grates").hide();
        $("#zine").hide();
        $("#fridge").show();
        $("#slice").hide();
        $("#book").hide();
        $("#cards").hide();
    })
    $(".content-wrap.academic.5").click(function(){
        $("#academicContainer").show();
        $(".content-container.academic").toggleClass("show");
        $(".content-wrap.academic.5").toggleClass("change");
        $("#MH").hide();
        $("#grates").hide();
        $("#zine").hide();
        $("#fridge").hide();
        $("#slice").show();
        $("#book").hide();
        $("#cards").hide();
    })
    $(".content-wrap.academic.6").click(function(){
        $("#academicContainer").show();
        $(".content-container.academic").toggleClass("show");
        $(".content-wrap.academic.6").toggleClass("change");
        $("#MH").hide();
        $("#grates").hide();
        $("#zine").hide();
        $("#fridge").hide();
        $("#slice").hide();
        $("#book").show();
        $("#cards").hide();
    })
    $(".content-wrap.academic.7").click(function(){
        $("#academicContainer").show();
        $(".content-container.academic").toggleClass("show");
        $(".content-wrap.academic.7").toggleClass("change");
        $("#MH").hide();
        $("#grates").hide();
        $("#zine").hide();
        $("#fridge").hide();
        $("#slice").hide();
        $("#book").hide();
        $("#cards").show();
    })

    //personal
    $(".content-wrap.personal.1").click(function(){
        $("#worms").show();
        $("#potions").hide();
        $("#pot").hide();
        $("#personalContainer").show();
        $(".content-container.personal").toggleClass("show");
        $(".content-wrap.personal.1").toggleClass("change");
    })
    $(".content-wrap.personal.2").click(function(){
        $("#potions").show();
        $("#worms").hide();
        $("#pot").hide();
        $("#personalContainer").show();
        $(".content-container.personal").toggleClass("show");
        $(".content-wrap.personal.2").toggleClass("change");
    })
    $(".content-wrap.personal.3").click(function(){
        $("#pot").show();
        $("#potions").hide();
        $("#worms").hide();
        $("#personalContainer").show();
        $(".content-container.personal").toggleClass("show");
        $(".content-wrap.personal.3").toggleClass("change");
    })

    //professional
    $(".content-wrap.professional.1").click(function(){
        $("#bookmark").show();
        $("#WAVE").hide();
        $("#HTU").hide();
        $("#rofessionalContainer").show();
        $(".content-container.professional").toggleClass("show");
        $(".content-wrap.professional.1").toggleClass("change");
    })
    $(".content-wrap.professional.2").click(function(){
        $("#WAVE").show();
        $("#bookmark").hide();
        $("#HTU").hide();
        $("#rofessionalContainer").show();
        $(".content-container.professional").toggleClass("show");
        $(".content-wrap.professional.2").toggleClass("change");
    })
    $(".content-wrap.professional.3").click(function(){
        $("#HTU").show();
        $("#WAVE").hide();
        $("#bookmark").hide();
        $("#rofessionalContainer").show();
        $(".content-container.professional").toggleClass("show");
        $(".content-wrap.professional.3").toggleClass("change");
    })
})
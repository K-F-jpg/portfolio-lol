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
    $("#MH").hide();
    $("#grates").hide();
    $("#zine").hide();
    $("#academicContainer").hide();
    console.log($("#MH").is(":visible"))
    console.log($("#grates").is(":visible"))
    console.log($("#zine").is(":visible"))

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
        if ($("#MH").is(":visible")) {
            if ($(".vert-layout.grates").hasClass("show")) {
                $(".vert-layout.grates").toggleClass("show");
                $(".content-wrap.academic.2").toggleClass("change");
            }
        }
        $(".vert-layout.MH").toggleClass("show");
        $(".content-wrap.academic.1").toggleClass("change");
        // console.log($("#MH").is(":visible"))
    })
    $(".content-wrap.academic.2").click(function(){
        $("#grates").show();
        $("#MH").hide();
        $("#zine").hide();
        $("#fridge").hide();
        $("#slice").hide();
        $("#book").hide();
        $("#cards").hide();
        console.log($("#grates").is(":visible"))
        if ($("#grates").is(":visible")) {
            if ($(".vert-layout.MH").hasClass("show")) {
                $(".vert-layout.MH").toggleClass("show");
                $(".content-wrap.academic.1").toggleClass("change");
            }
        }
        $(".content-container.academic").toggleClass("show");
        $(".vert-layout.grates").toggleClass("show");
        $(".content-wrap.academic.2").toggleClass("change");
    })
    $(".content-wrap.academic.3").click(function(){
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
    // $(".content-wrap.academic.4").click(function(){
    //     $(".content-container.academic").toggleClass("show");
    //     $(".content-wrap.academic.4").toggleClass("change");
    //     $("#MH").hide();
    //     $("#grates").hide();
    //     $("#zine").hide();
    //     $("#fridge").show();
    //     $("#slice").hide();
    //     $("#book").hide();
    //     $("#cards").hide();
    // })
    // $(".content-wrap.academic.5").click(function(){
    //     $(".content-container.academic").toggleClass("show");
    //     $(".content-wrap.academic.5").toggleClass("change");
    //     $("#MH").hide();
    //     $("#grates").hide();
    //     $("#zine").hide();
    //     $("#fridge").hide();
    //     $("#slice").show();
    //     $("#book").hide();
    //     $("#cards").hide();
    // })
    // $(".content-wrap.academic.6").click(function(){
    //     $(".content-container.academic").toggleClass("show");
    //     $(".content-wrap.academic.6").toggleClass("change");
    //     $("#MH").hide();
    //     $("#grates").hide();
    //     $("#zine").hide();
    //     $("#fridge").hide();
    //     $("#slice").hide();
    //     $("#book").show();
    //     $("#cards").hide();
    // })
    // $(".content-wrap.academic.7").click(function(){
    //     $(".content-container.academic").toggleClass("show");
    //     $(".content-wrap.academic.7").toggleClass("change");
    //     $("#MH").hide();
    //     $("#grates").hide();
    //     $("#zine").hide();
    //     $("#fridge").hide();
    //     $("#slice").hide();
    //     $("#book").hide();
    //     $("#cards").show();
    // })
})
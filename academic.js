$(document).ready(function(){
    $("#MH").hide();
    $("#grates").hide();
    $("#zine").hide();
    console.log($("#MH").is(":visible"))
    console.log($("#grates").is(":visible"))
    console.log($("#zine").is(":visible"))

    $(".content-wrap.academic.1").click(function(){
        $("#MH").show();
        if ($("#MH").is(":visible")) {
            // if ($("#grates").is(":visible")) {
            //     console.log($("#grates").is(":visible"));
            // }
            console.log("hi");
            $("#grates").hide();
            $("#zine").hide();
            $("#fridge").hide();
            $("#slice").hide();
            $("#book").hide();
            $("#cards").hide()

            $(".content-container.1").toggleClass("show");
            $(".vert-layout.MH").toggleClass("show");
            $(".content-wrap.academic.1").toggleClass("change");
        }
        // console.log($("#MH").is(":visible"))
    })
    $(".content-wrap.academic.2").click(function(){
        $("#grates").show();
        console.log($("#grates").is(":visible"))
        $(".content-container.1").toggleClass("show");
        $(".content-wrap.academic.2").toggleClass("change");
        $("#MH").hide();
        $("#zine").hide();
        $("#fridge").hide();
        $("#slice").hide();
        $("#book").hide();
        $("#cards").hide();
    })
    $(".content-wrap.academic.3").click(function(){
        $("#zine").show();
        console.log($("#zine").is(":visible"))
        $(".content-container.1").toggleClass("show");
        $(".content-wrap.academic.3").toggleClass("change");
        $("#MH").hide();
        $("#grates").hide();
        $("#fridge").hide();
        $("#slice").hide();
        $("#book").hide();
        $("#cards").hide();
    })
    // $(".content-wrap.academic.4").click(function(){
    //     $(".content-container.1").toggleClass("show");
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
    //     $(".content-container.1").toggleClass("show");
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
    //     $(".content-container.1").toggleClass("show");
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
    //     $(".content-container.1").toggleClass("show");
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
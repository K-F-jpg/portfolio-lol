$(document).ready(function(){
    //buttons
    $("#academic").hide();
    $("#personal").hide();
    $("#professional").hide();
    $("#about").hide();
    $("#contact").hide();

    $(".next-button.1").click(function(){
        $("#academic").show();
        // if ($(".academic").is(":visible")) {
        //     console.log($("#academic").is(":visible"));
        //     $("#professional").hide();
        //     console.log($("#professional").is(":visible"));
        //     $("#personal").hide();
        //     console.log($("#personal").is(":visible"));
        // }
        $(".left-container.academic").toggleClass("show");
        $(".content-wrap.academic").toggleClass("show");
        $(".next-button.1").toggleClass("change");
        if ($("#academic").is(":visible")) {
            if ($(".left-container.professional").hasClass("show")) {
                $(".left-container.professional").toggleClass("show");
                $(".content-wrap.professional").toggleClass("show");
                $(".next-button.3").toggleClass("change");
            }
            if ($(".left-container.personal").hasClass("show")) {
                $(".left-container.personal").toggleClass("show");
                $(".content-wrap.personal").toggleClass("show");
                $(".next-button.2").toggleClass("change");
            }
            if ($(".left-container.aboutMe").hasClass("show")) {
                $(".left-container.aboutMe").toggleClass("show");
                $(".content-wrap.aboutMe").toggleClass("show");
                $(".next-button.6").toggleClass("change");
            }
            if ($(".left-container.contactMe").hasClass("show")) {
                $(".left-container.contactMe").toggleClass("show");
                $(".content-wrap.contactMe").toggleClass("show");
                $(".next-button.7").toggleClass("change");
            }
        }
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

        //the second one works
        // if ($(".personal").is(":visible")) {
        //     console.log($("#personal").is(":visible"));
        //     $("#academic").hide();
        //     console.log($("#academic").is(":visible"));
        //     $("#professional").hide();
        //     console.log($("#professional").is(":visible"));
        // }

        if ($("#personal").is(":visible")) {
            if ($(".left-container.professional").hasClass("show")) {
                $(".left-container.professional").toggleClass("show");
                $(".content-wrap.professional").toggleClass("show");
                $(".next-button.3").toggleClass("change");
            }
            if ($(".left-container.academic").hasClass("show")) {
                $(".left-container.academic").toggleClass("show");
                $(".content-wrap.academic").toggleClass("show");
                // $(".content-container.1").toggleClass("show"); //seeing if this will get rid of opened elements when I switch tabs //ok; it worked, I just need to format it like I did the others. Cool.
                // if ($(".content-container.1").is(":visible")) {
                //     $(".content-container.1").toggleClass("show");
                //     $(".content-wrap.academic.1").toggleClass("change");
                // } //I'll figure this out later, for now I have working code.
                $(".next-button.1").toggleClass("change");
            }
            if ($(".left-container.aboutMe").hasClass("show")) {
                $(".left-container.aboutMe").toggleClass("show");
                $(".content-wrap.aboutMe").toggleClass("show");
                $(".next-button.6").toggleClass("change");
            }
            if ($(".left-container.contactMe").hasClass("show")) {
                $(".left-container.contactMe").toggleClass("show");
                $(".content-wrap.contactMe").toggleClass("show");
                $(".next-button.7").toggleClass("change");
            }
        }
    })

    $(".next-button.3").click(function(){
        $("#professional").show();
        $(".left-container.professional").toggleClass("show");
        $(".content-wrap.professional").toggleClass("show");
        $(".next-button.3").toggleClass("change");
        if ($("#professional").is(":visible")) {
            if ($(".left-container.academic").hasClass("show")) {
                $(".left-container.academic").toggleClass("show");
                $(".content-wrap.academic").toggleClass("show");
                $(".next-button.1").toggleClass("change");
            }
            if ($(".left-container.personal").hasClass("show")) {
                $(".left-container.personal").toggleClass("show");
                $(".content-wrap.personal").toggleClass("show");
                $(".next-button.2").toggleClass("change");
            }
            if ($(".left-container.aboutMe").hasClass("show")) {
                $(".left-container.aboutMe").toggleClass("show");
                $(".content-wrap.aboutMe").toggleClass("show");
                $(".next-button.6").toggleClass("change");
            }
            if ($(".left-container.contactMe").hasClass("show")) {
                $(".left-container.contactMe").toggleClass("show");
                $(".content-wrap.contactMe").toggleClass("show");
                $(".next-button.7").toggleClass("change");
            }
        }
    })

    $(".next-button.5").click(function(){
        $(".content-container.CV").toggleClass("show");
        $(".vert-layout.CV").toggleClass("show");
        $(".next-button.5").toggleClass("change");
        $("body").toggleClass("CV");
    })

    $(".next-button.6").click(function(){
        $("#about").show();
        $(".left-container.aboutMe").toggleClass("show");
        $(".content-wrap.aboutMe").toggleClass("show");
        $(".next-button.6").toggleClass("change");

        if ($(".left-container.academic").hasClass("show")) {
            $(".left-container.academic").toggleClass("show");
            $(".content-wrap.academic").toggleClass("show");
            $(".next-button.1").toggleClass("change");
        }
        if ($(".left-container.personal").hasClass("show")) {
            $(".left-container.personal").toggleClass("show");
            $(".content-wrap.personal").toggleClass("show");
            $(".next-button.2").toggleClass("change");
        }
        if ($(".left-container.professional").hasClass("show")) {
            $(".left-container.professional").toggleClass("show");
            $(".content-wrap.professional").toggleClass("show");
            $(".next-button.3").toggleClass("change");
        }
        if ($(".left-container.contactMe").hasClass("show")) {
            $(".left-container.contactMe").toggleClass("show");
            $(".content-wrap.contactMe").toggleClass("show");
            $(".next-button.7").toggleClass("change");
        }
    })
    $(".next-button.7").click(function(){
        $("#contact").show();
        $(".left-container.contactMe").toggleClass("show");
        $(".content-wrap.contactMe").toggleClass("show");
        $(".next-button.7").toggleClass("change");

        if ($(".left-container.academic").hasClass("show")) {
            $(".left-container.academic").toggleClass("show");
            $(".content-wrap.academic").toggleClass("show");
            $(".next-button.1").toggleClass("change");
        }
        if ($(".left-container.personal").hasClass("show")) {
            $(".left-container.personal").toggleClass("show");
            $(".content-wrap.personal").toggleClass("show");
            $(".next-button.2").toggleClass("change");
        }
        if ($(".left-container.professional").hasClass("show")) {
            $(".left-container.professional").toggleClass("show");
            $(".content-wrap.professional").toggleClass("show");
            $(".next-button.3").toggleClass("change");
        }
        if ($(".left-container.aboutMe").hasClass("show")) {
            $(".left-container.aboutMe").toggleClass("show");
            $(".content-wrap.aboutMe").toggleClass("show");
            $(".next-button.6").toggleClass("change");
        }
    })
})
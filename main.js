$(document).ready(function(){
    // $(".draggable1").draggable(
    //     // {containment: ".outer_container"}
    // );

    // $( function() {
    //     $(".draggable1").draggable(
    //         {containment: ".outer_container"}
    //     );
    //   } );

    $(function(){
        $(".draggable").draggable(
            {containment: "body"}
        );
    });

    $(function(){
        $("#resizable").resizable(
            {aspectRatio: 7/4}
            // {aspectRatio: 8/5}
        );
    }); //it works :)
})
/*$("button").on("click", function () {
    $("div").fadeToggle("1000", function () {
        console.log("fade completed");
        //$("div").fadeOut();
        //$("div").fadeIn();
        // $(this).remove();
        //why to write this inside a function, because its
        // completes console the log after the fade out is completed 
        // properly
    });
});
*/


$("button").on("click", function () {
    //$("div").slideDown();
    //$("div").slideUp();
    // in slide up display is automatically set to none
    $("div").slideToggle(1000, function () {
        //does both if slide up or down
        console.log("this shit works");
        $(this).remove();
        // removes this thing from the console log property

    });
});
$(document).ready(function () {
    var imgSrc = ["AvaimetOppimiseen", "Joki", "tehtava3", "saimakahvila", "teht3", "teht1", "kelo1", "teht2", "Lehma"];
    var image = document.getElementById("tabImg");

    $("p.navTabAlt").on("click", function() {
        $("p.navTabAlt").removeClass("navTabSelected");
        $(this).addClass("navTabSelected");

        var index = $(this).index();

        image.src=`kuvat/${imgSrc[index]}.png`;
        image.alt=`${imgSrc[index]}`;
    });
});

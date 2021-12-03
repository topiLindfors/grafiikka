$(document).ready(function () {
    var imgSrc = ["AvaimetOppimiseen", "Joki", "tehtava3", "saimakahvila", "teht3", "teht1", "kelo1", "teht2", "Lehma"];
    var imgAlt = ["Avaimet Oppimiseen", "Joki", "Tulva", "Saimakahvila", "Auto", "Jopo", "Kelo", "Värisokea", "Yo mama"]

    $("p.navTabAlt").on("click", function() {
        let image = document.getElementById("tabImg");

        $("p.navTabAlt").removeClass("navTabSelected");
        $(this).addClass("navTabSelected");

        let index = $(this).index();

        image.src=`kuvat/${imgSrc[index]}.png`;
        image.alt=`${imgSrc[index]}`;
    });

    $("img.gallery").on("click", function() {
        let image = document.getElementById("gallery");
        let index = $(this).index();

        $("img.gallery").css({"opacity": "50%"});
        $(this).css({"opacity": "100%"});

        image.src=`kuvat/${imgSrc[index]}.png`;
        image.alt=`${imgSrc[index]}`;
    })

    $("p#left, p#right").on("click", function() {
        let image = document.getElementById("gallery");
        let source = image.src;
        let index = galleryIndex(source);

        if ($(this).attr("id") === "left") {
            if (index === 0) {
                index = 8;
            }
            else {
                index--;
            }
        }
        else if ($(this).attr("id") === "right") {
            if (index === 8) {
                index = 0;
            }
            else {
                index++;
            }
        }

        image.src = `kuvat/${imgSrc[index]}.png`
        image.alt = `${imgSrc[index]}`
        $("#subtitle").text(imgAlt[index]);

        $("img.gallery").css({"opacity": "50%"})
                        .eq(index).css({"opacity": "100%"});
    });

    function galleryIndex(source) {
        for (let i = 0; i < imgSrc.length; i++) {
            if (source.endsWith(imgSrc[i] + ".png")) {
                return i;
            }
        }
    }
});
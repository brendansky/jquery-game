$(document).ready(function () {


    var characters = {
        obiWan: { "name": "obi wan kenobi", "health": 125, "attack": 20, "card": $(".obi-wan") },
        maceWindu: { "name": "mace windu", "health": 125, "attack": 20, "card": $(".mace-windu") },
        yoda: { "name": "yoda", "health": 125, "attack": 20 },
        palpatine: { "name": "palpatine", "health": 125, "attack": 20 },
        dooku: { "name": "dooku", "health": 125, "attack": 20 },
        anakin: { "name": "anakin", "health": 125, "attack": 20 }

    }

    var characterChosen = false


    $.each(characters, function () {
        $.each(this, function (key, value) {
            console.log(key + ": " + value)
        });
    });

    $(".obi-wan").on("click", ".image", function () {
        console.log("hello there");
        $(".character-lobby").removeClass("hidden");
        $(".your-character").append(characters.obiWan.card);

    });

    $(".mace-windu").on("click", ".image", function () {
        console.log("hello there");
        $(".character-lobby").removeClass("hidden");
        $(".your-character").append(characters.maceWindu.card);

    });







});

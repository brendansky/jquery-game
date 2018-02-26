$(document).ready(function () {


    var obiWan = {
        "name": "Obi Wan Kenobi",
        "health": 125,
        "attack": 20,
        "counter": 10,
        "image": "obi-wan.jpg",
        "id": "obi-wan",
        "side": "light",
    };

    var maceWindu = {
        "name": "Mace Windu",
        "health": 140,
        "attack": 20,
        "counter": 10,
        "image": "mace-windu.jpg",
        "id": "mace-windu",
        "side": "light",
    };

    var yoda = {
        "name": "Yoda",
        "health": 175,
        "attack": 20,
        "counter": 10,
        "image": "yoda.jpg",
        "id": "yoda",
        "side": "light",
    };

    var anakin = {
        "name": "Anakin",
        "health": 100,
        "attack": 20,
        "counter": 10,
        "image": "anakin.jpg",
        "id": "anakin",
        "side": "dark",
    };

    var dooku = {
        "name": "Dooku",
        "health": 110,
        "attack": 20,
        "counter": 10,
        "image": "dooku.jpg",
        "id": "dooku",
        "side": "dark",
    };

    var palpatine = {
        "name": "Palpatine",
        "health": 195,
        "attack": 20,
        "counter": 10,
        "image": "palpatine.png",
        "id": "palpatine",
        "side": "dark",
    };

    var characters = [obiWan, maceWindu, yoda, anakin, dooku, palpatine];

    var characterChosen = false;

    var yourCharacter;

    var opponent;

    for (i = 0; i < characters.length; i++) {

        var characterButton = $("<div>");
        var characterImage = $('<img src="assets/images/' + characters[i].image + '">')
        characterImage.addClass("image");
        characterButton.addClass("card col-3");
        characterButton.text(characters[i].name);
        characterButton.append(characterImage);
        characterButton.data("character", characters[i]);
        $(".character-buttons").append(characterButton);
    };

    $(".character-buttons").on("click", ".card", function () {

        console.log("hello there");
        console.log($(this).data("character"));
        console.log($(this).data("character").health);

        yourCharacter = this;

        $(this).addClass("player-character");    
        $(".character-selection").addClass("hidden");
        $(".character-lobby").removeClass("hidden");
        $(".your-character").append(this);


        if ($(this).data("character").side === "light") {

            for (i = 3; i < characters.length; i++) {

                var characterButton = $("<div>");
                var characterImage = $('<img src="assets/images/' + characters[i].image + '">')
                characterImage.addClass("image");
                characterButton.addClass("card col-3 opponent");
                characterButton.text(characters[i].name);
                characterButton.append(characterImage);
                characterButton.data("character", characters[i]);
                $(".enemies-remaining").append(characterButton);
            };
        } else {
            for (i = 0; i < 3; i++) {

                var characterButton = $("<div>");
                var characterImage = $('<img src="assets/images/' + characters[i].image + '">')
                characterImage.addClass("image");
                characterButton.addClass("card col-3 opponent");
                characterButton.text(characters[i].name);
                characterButton.append(characterImage);
                characterButton.data("character", characters[i]);
                $(".enemies-remaining").append(characterButton);
            };
        }

        $(".enemies-remaining").on("click", ".card", function () {

            var opponent = this;

            console.log("hello there");
            console.log($(this).data("character"));
            console.log($(this).data("character").health);

            $(".character-lobby").addClass("hidden");
            $(".combat-area").removeClass("hidden");
            $(".defender").append(this);

            var attackButton = $("<button>");
            attackButton.addClass("attack");
            attackButton.text("attack");
            $(".combat-area").append(attackButton);

            var yourHealth = $(yourCharacter).data("character").health;
            var opponentHealth = $(opponent).data("character").health;

            


            $(".attack").on("click", function () {


                opponentHealth -= $(yourCharacter).data("character").attack;
                yourHealth -= $(opponent).data("character").attack;

                console.log(yourHealth);
                console.log(opponentHealth);

            });



        })




    });



});

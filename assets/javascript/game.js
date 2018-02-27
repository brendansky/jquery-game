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
        "attack": 40,
        "counter": 10,
        "image": "palpatine.png",
        "id": "palpatine",
        "side": "dark",
    };

    var characters = [obiWan, maceWindu, yoda, anakin, dooku, palpatine];

    var enemiesRemaining = 0;

    var yourCharacter;

    var opponent;

    for (i = 0; i < characters.length; i++) {

        var characterButton = $("<div>");
        var characterImage = $('<img src="assets/images/' + characters[i].image + '">')
        var characterHealth = $("<div>");

        characterImage.addClass("image");
        characterButton.addClass("card");
        characterHealth.addClass("player-health health")
        characterHealth.text(characters[i].health);
        characterButton.text(characters[i].name);
        characterButton.append(characterImage);
        characterButton.append(characterHealth);
        characterButton.data("character", characters[i]);
        $(".character-buttons").append(characterButton);

    };

    $(".character-buttons").on("click", ".card", function () {

        console.log("hello there");
        console.log($(this).data("character"));
        console.log($(this).data("character").health);

        yourCharacter = this;
        var yourHealth = $(yourCharacter).data("character").health;


        $(this).addClass("player-character");

        $(".character-selection").addClass("hidden");
        $(".character-lobby").removeClass("hidden");
        $(".your-character").append(this);


        if ($(this).data("character").side === "light") {

            for (i = 3; i < characters.length; i++) {

                var characterButton = $("<div>");
                var characterImage = $('<img src="assets/images/' + characters[i].image + '">')
                var characterHealth = $("<div>");

                characterImage.addClass("image");
                characterButton.addClass("card");
                characterHealth.addClass("health")
                characterHealth.text(characters[i].health);
                characterButton.text(characters[i].name);
                characterButton.append(characterImage);
                characterButton.append(characterHealth);
                characterButton.data("character", characters[i]);
                $(".enemies-remaining").append(characterButton);


                enemiesRemaining ++;
                console.log(enemiesRemaining);


            };
        } else {
            for (i = 0; i < 3; i++) {

                var characterButton = $("<div>");
                var characterImage = $('<img src="assets/images/' + characters[i].image + '">')
                var characterHealth = $("<div>");

                characterImage.addClass("image");
                characterButton.addClass("card");
                characterHealth.addClass("health")
                characterHealth.text(characters[i].health);
                characterButton.text(characters[i].name);
                characterButton.append(characterImage);
                characterButton.append(characterHealth);
                characterButton.data("character", characters[i]);
                $(".enemies-remaining").append(characterButton);


                enemiesRemaining ++;
                console.log(enemiesRemaining);


            };
        }

        $(".enemies-remaining").on("click", ".card", function () {

            if ($(this).hasClass("defeated")) {
                alert("defeated!");

            } else {

                var opponent = this;

                $(this).find(".health").addClass("opponent-health");


                console.log("hello there");
                console.log($(this).data("character"));


                $(opponent).addClass("opponent");
                $(".character-lobby").addClass("hidden");
                $(".combat-area").removeClass("hidden");
                $(".defender").append(this);

                var attackButton = $("<button>");
                attackButton.addClass("attack");
                attackButton.text("attack");
                $(".combat-button").html(attackButton);

                var opponentHealth = $(opponent).data("character").health;


                $(".attack").on("click", function () {

                    opponentHealth -= $(yourCharacter).data("character").attack;
                    yourHealth -= $(opponent).data("character").counter;

                    console.log(yourHealth);
                    $(".player-health").text(yourHealth);
                    console.log(opponentHealth);
                    $(".opponent-health").text(opponentHealth);

                    if (yourHealth <= 0) {
                        var defeatAlert = $("<div>");
                        defeatAlert.addClass("alert alert-primary");
                        defeatAlert.html("<h2>you lose!<h2><a href='index.html'><h2>play again?<h2></a>");
                        $("body").append(defeatAlert);

                    }

                    else if (opponentHealth <= 0) {

                        console.log(opponent);

                        $(".character-lobby").removeClass("hidden");
                        $(".combat-area").addClass("hidden");

                        $(".opponent-health").text("Defeated!");
                        $(".opponent-health").removeClass("opponent-health");
                        $(".opponent").addClass("defeated");
                        $(".enemies-remaining").append(opponent);

                        enemiesRemaining -= 1 ;

                        if ( enemiesRemaining === 0) {

                            console.log(enemiesRemaining);
                            var victoryAlert = $("<div>");
                            victoryAlert.addClass("alert alert-primary");
                            victoryAlert.html("<h2>you are victorious!<h2><a href='index.html'><h2>play again?<h2></a>");
                            $("body").append(victoryAlert);
    
                        }

                    };

                });

            };

        })

    });

});

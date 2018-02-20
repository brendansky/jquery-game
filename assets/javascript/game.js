$(document).ready(function () {


    function game() {

        var characterChosen = false

        var anakin = {

            card: $(".anakin"),
            health: 100,
            attack: 25,
        };

        var obiWan = {

            card: $(".obi-wan"),
            health: 125,
            attack: 20,
        };

        // selects obi-wan as main chatacter //
        $(".obi-wan").on("click", ".image", function () {
            if (characterChosen === false) {

                $(".your-character").append(obiWan.card);
                $(".defender").append(anakin.card);
                characterChosen = true
            }


            $(".obi-wan").on("click", ".attack-button", function () {
                anakin.health -= obiWan.attack;
                obiWan.attack += 1;
                $(".anakin-health").text("health: " + anakin.health);


            });

            $(".anakin").on("click", ".attack-button", function () {
                obiWan.health -= anakin.attack;
                $(".obi-wan-health").text("health: " + obiWan.health);

            });


        });
        
        
        
        // selects anakin as main character //
        $(".anakin").on("click", ".image", function () {
            if (characterChosen === false) {
                $(".your-character").append(anakin.card);
                $(".defender").append(obiWan.card);
                characterChosen = true;
            }

            $(".obi-wan").on("click", ".attack-button", function () {
                anakin.health -= obiWan.attack;
                $(".anakin-health").text("health: " + anakin.health);

            });

            $(".anakin").on("click", ".attack-button", function () {
                obiWan.health -= anakin.attack;
                $(".obi-wan-health").text("health: " + obiWan.health);

            });

        });


    }

    game();




















});

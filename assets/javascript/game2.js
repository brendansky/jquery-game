$(document).ready(function () {


    var characters = {
        obiWan: { "name": "Obi Wan Kenobi", "health": 125, "attack": 20, "image": "obi-wan.jpg", "class": "obi-wan" },
        maceWindu: { "name": "Mace Windu", "health": 125, "attack": 20, "image": "mace-windu.jpg" },
        yoda: { "name": "Yoda", "health": 125, "attack": 20, "image": "yoda.jpg" },
        palpatine: { "name": "Palpatine", "health": 125, "attack": 20, "image": "palpatine.png" },
        dooku: { "name": "Dooku", "health": 125, "attack": 20, "image": "dooku.jpg" },
        anakin: { "name": "Anakin", "health": 125, "attack": 20, "image": "anakin.jpg" },

    }

    var characterChosen = false

    $.each(characters, function () {
        $.each(this, function (key, value) {
            console.log(key + ": " + value)

        });

        var characterButton = $("<div>");
        var characterImage = $('<img src="assets/images/' + this.image + '">')
        characterImage.addClass("image");
        characterButton.addClass("card col-3");
        characterButton.text(this.name);
        characterButton.append(characterImage);
        $(".character-buttons").append(characterButton);

         

        $(".card").on("click", ".image", function () {
            console.log("hello there");
    
            $(".character-selection").addClass("hidden");
    
            var characterLobby = $(".character-lobby");
            characterLobby.removeClass("hidden");
    
            $(".your-character").append(characterButton);
    
    
        });
    

    });


    $(".card").on("click", ".image", function () {
        console.log("hello there");

        $(".character-selection").addClass("hidden");

        var characterLobby = $(".character-lobby");
        characterLobby.removeClass("hidden");

        $(".your-character").append(characterButton);


    });





});

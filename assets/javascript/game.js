$(document).ready(function () {

    var anakin = {

        card : $(".anakin"),
        health : 100,
        attack : 25,
    };

    var obiWan = {

        card : $(".obi-wan"),
        health : 125,
        attack : 20,
    };



    $(".obi-wan").on("click", ".normal-button", function () {
     
        $(".anakin-health").text( anakin.health - obiWan.attack);
    

        
    });
});

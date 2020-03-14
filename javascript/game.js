//Declaring Game Variables 
$(document).ready(function () {
    // function to initialize game
    function initGame() {
        // game variables
        var winQuotes = [
            "Martin thanks you for your divine intervention, and buys drugs.",
            "Martin thanks you for your service, and finally hires that hitman",
            "Martin thanks you for your assistance, and then offers your cash in exchange for beer",
            "Martin thanks you for your effort, and asks when you'd like to go clubbing.",
            "Martin thanks you, but secretly wishes you had secured more.",
        ];
        var lossQuotes = [
            "The Tooth Fairy thanks you for the premature ejection! You think 'Poor Martin', but you feel no guilt.",
            "The Tooth Fairy informs you that children's teeth are full of calcium! You make nothing of this. Martin eventually does.",
            "The Tooth Fairy reveals she keeps your adolescent teeth in a jar underneath her pillow",
            "The Tooth Fairy tells you she never forgives and immediately lunges for your teeth",
            "The Tooth Fairy asks for a ride into the city to pick up an oral debtor."
        ];
        var userTotal = 0;
        var success = 0;
        var failure = 0;
        var randOne = 0;
        var randTwo = 0;
        var randThree = 0;
        var randFour = 0;
        var target = 0;
        var win;
        var loss;
        //function to randomize game numbera 
        function randomizer() {
            userTotal = 0;
            target = 0;
            randOne = Math.floor(Math.random() * 12 + 1);
            randTwo = Math.floor(Math.random() * 12 + 1);
            randThree = Math.floor(Math.random() * 12 + 1);
            randFour = Math.floor(Math.random() * 12 + 1);
            target = Math.floor(Math.random() * 120 + 20);
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
        };
        // function to update score
        function score() {
            $("#points").text(target);
            $("#score").text("$" + userTotal);
            $("#tally").text(success);
            $("#failure").text(failure);
        };
        // function to determine whether game is won or lost
        function winOrLose() {
            if (userTotal === target) {
                alert(win);
                success++;
                randomizer();
            }
            if (userTotal > target) {
                alert(loss);
                failure++;
                randomizer();
            }
        };
        // determining user click
        $("#left").click(function () {
            userTotal += randOne;
            score();
            winOrLose();
        });
        $("#middle").click(function () {
            userTotal += randTwo;
            score();
            winOrLose();
        });
        $("#right").click(function () {
            userTotal += randThree;
            score();
            winOrLose();
        });
        $("#far").click(function () {
            userTotal += randFour;
            score();
            winOrLose();
        });
        randomizer();
    };
    initGame();
});

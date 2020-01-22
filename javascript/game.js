//Declaring Game Variables / Randomizer
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
// ];
var teethOne = Math.floor(Math.random() * 12 + 1);
var teethTwo = Math.floor(Math.random() * 12 + 1);
var teethThree = Math.floor(Math.random() * 12 + 1);
var teethFour = Math.floor(Math.random() * 12 + 1); 
var target = Math.floor(Math.random() * 120 + 20);
var win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
var loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
var userTotal = 0;
var success = 0;
var failure = 0;
// console.log(win)

$(document).ready(function() {
    $("#left").click(function() {
        userTotal += teethOne;
        if (userTotal === target) {
            alert(win);
            teethOne = Math.floor(Math.random() * 12 + 1);
            teethTwo = Math.floor(Math.random() * 12 + 1);
            teethThree = Math.floor(Math.random() * 12 + 1);
            teethFour = Math.floor(Math.random() * 12 + 1); 
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
            target = Math.floor(Math.random() * (19, 120) + 1);
            userTotal = 0;
            success++;
        }
        if (userTotal > target) {
            alert(loss);
            teethOne = Math.floor(Math.random() * 12 + 1);
            teethTwo = Math.floor(Math.random() * 12 + 1);
            teethThree = Math.floor(Math.random() * 12 + 1);
            teethFour = Math.floor(Math.random() * 12 + 1); 
            target = Math.floor(Math.random() * (19, 120) + 1);
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
            userTotal = 0;
            failure++;
        }
        document.getElementById("points").innerHTML = target;
        document.getElementById("score").innerHTML = "$" + userTotal;
        document.getElementById("tally").innerHTML = success;
        document.getElementById("failure").innerHTML = failure;
        // console.log(userTotal);
    });
});
$(document).ready(function() {
    $("#middle").click(function() {
        userTotal += teethTwo;
        if (userTotal === target) {
            alert(win);
            teethOne = Math.floor(Math.random() * 12 + 1);
            teethTwo = Math.floor(Math.random() * 12 + 1);
            teethThree = Math.floor(Math.random() * 12 + 1);
            teethFour = Math.floor(Math.random() * 12 + 1); 
            target = Math.floor(Math.random() * (19, 120) + 1);
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
            userTotal = 0;
            success++;
        }
        if (userTotal > target) {
            alert(loss);
            teethOne = Math.floor(Math.random() * 12 + 1);
            teethTwo = Math.floor(Math.random() * 12 + 1);
            teethThree = Math.floor(Math.random() * 12 + 1);
            teethFour = Math.floor(Math.random() * 12 + 1); 
            target = Math.floor(Math.random() * (19, 120) + 1);
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
            userTotal = 0;
            failure++;
        }
        document.getElementById("points").innerHTML = target;
        document.getElementById("score").innerHTML = "$" + userTotal;
        document.getElementById("tally").innerHTML = success;
        document.getElementById("failure").innerHTML = failure;
    });
});
$(document).ready(function() {
    $("#right").click(function() {
        userTotal += teethThree;
        if (userTotal === target) {
            alert(win);
            teethOne = Math.floor(Math.random() * 12 + 1);
            teethTwo = Math.floor(Math.random() * 12 + 1);
            teethThree = Math.floor(Math.random() * 12 + 1);
            teethFour = Math.floor(Math.random() * 12 + 1); 
            target = Math.floor(Math.random() * (19, 120) + 1);
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
            userTotal = 0;
            success++;
        }
        if (userTotal > target) {
            alert(loss);
            teethOne = Math.floor(Math.random() * 12 + 1);
            teethTwo = Math.floor(Math.random() * 12 + 1);
            teethThree = Math.floor(Math.random() * 12 + 1);
            teethFour = Math.floor(Math.random() * 12 + 1);                                                                                    
            target = Math.floor(Math.random() * (19, 120) + 1);
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
            userTotal = 0;
            failure++;
        }
        document.getElementById("points").innerHTML = target;
        document.getElementById("score").innerHTML = "$" + userTotal;
        document.getElementById("tally").innerHTML = success;
        document.getElementById("failure").innerHTML = failure;      
    });
});
$(document).ready(function() {
    $("#far").click(function() {
        userTotal += teethFour;
        if (userTotal === target) {
            alert(win);
            // document.getElementById("nar").innerHTML = win;
            teethOne = Math.floor(Math.random() * 12 + 1);
            teethTwo = Math.floor(Math.random() * 12 + 1);
            teethThree = Math.floor(Math.random() * 12 + 1);
            teethFour = Math.floor(Math.random() * 12 + 1); 
            target = Math.floor(Math.random() * (19, 120) + 1);
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
            userTotal = 0;
            success++;
        }
        if (userTotal > target) {
            alert(loss);
            // document.getElementById("nar").innerHTML = loss;
            teethOne = Math.floor(Math.random() * 12 + 1);
            teethTwo = Math.floor(Math.random() * 12 + 1);
            teethThree = Math.floor(Math.random() * 12 + 1);
            teethFour = Math.floor(Math.random() * 12 + 1); 
            target = Math.floor(Math.random() * (19, 120) + 1);
            win = winQuotes[Math.floor(Math.random() * winQuotes.length)];
            loss = lossQuotes[Math.floor(Math.random() * lossQuotes.length)];
            userTotal = 0;         
            failure++;
        }
        document.getElementById("points").innerHTML = target;
        document.getElementById("score").innerHTML = "$" + userTotal;
        document.getElementById("tally").innerHTML = success;
        document.getElementById("failure").innerHTML = failure;
    });
});

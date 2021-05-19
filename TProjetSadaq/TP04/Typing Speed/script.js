/* Timer Elements */
var ms = document.getElementById("ms");
var sec = document.getElementById("sec");
var min = document.getElementById("min");

/* Text and Text Input Elements */
var text = document.getElementById("text-nd");
var typing_text = document.getElementById("typing-text-area");

/* Benjamin Buttons */
var reset = document.getElementById("reset-btn");

var textArray = ["The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable.", "You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose to not pay a price. You get to choose which poison you're going to take.", "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice", "However hard he threw himself onto his right, he always rolled back to where he was. He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.", "Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them.", ];

class Texting {

    randomText() {
        var randNum = Math.floor(Math.random() * textArray.length)
        text.innerText = textArray[randNum];
        return textArray[randNum];
    }

    writingtoTextarea() {
        const f = function() { typing_text.innerHTML = typing_text.value; };
        setInterval(f, 100)
    }

    Accuracy(currentext) {
        var track = typing_text.innerHTML.length;
        var acc = typing_text.innerHTML.slice(0, track) == currentext.slice(0, track);
        if (!acc) {
            typing_text.style.border = "12px solid red";
        } else if (this.fullTest()) {
            typing_text.style.border = "12px solid yellow";
        } else {
            typing_text.style.border = "12px solid green";
        }

    }

    fullTest() {
        return typing_text.innerHTML === text.innerHTML;

    }
    reseT() {
        location.reload();
    }

}

function Start() {
    var isec = 0;
    var imin = 0;
    var ims = 0;
    var m = setInterval(() => {
        ims += 1;
        if (ims > 100) {
            isec++;
            ims = 0;
            if (isec > 59) {
                imin++;
                isec = 0;
            }
        }
        ms.innerHTML = ims;
        sec.innerHTML = isec;
        min.innerHTML = imin;
    }, 10)
    setInterval(() => {
        if (starting.fullTest()) { clearInterval(m) }
    }, 1);
}


var starting = new Texting();

var cu = starting.randomText();
starting.writingtoTextarea();
reset.addEventListener("click", () => starting.reseT());
typing_text.addEventListener("input", () => {
    setInterval(() => {
        starting.Accuracy(cu);
    }, 10)
});

typing_text.addEventListener("input", () => Start(), { once: true });

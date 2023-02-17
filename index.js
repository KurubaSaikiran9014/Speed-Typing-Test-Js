let resetBtn = document.getElementById("resetBtn");
let submitBtn = document.getElementById("submitBtn");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let quoteDisplay = document.getElementById("quoteDisplay");
let timer = document.getElementById("timer");
let spinner = document.getElementById("spinner");
let speedTypingTest = document.getElementById("speedTypingTest");
let time = 0;
timer.textContent = time;
let intervalId = setInterval(function() {
    time = time + 1;
    timer.textContent = time;

}, 1000);

function getquote() {
    spinner.classList.add("d-none");
    let url = "https://apis.ccbp.in/random-quote";

    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(text) {
            quoteDisplay.textContent = (text.content);
        });

}

submitBtn.addEventListener("click", function() {
    if (quoteInput.value === quoteDisplay.textContent) {
        result.textContent = "You typed in " + timer.textContent + " seconds";
        clearInterval(intervalId);
    } else {
        result.textContent = "You typed incorrect sentence";
    }
});

getquote();
resetBtn.addEventListener("click", function() {
    spinner.classList.remove("d-none");
    clearInterval(intervalId);
    let time = 0;
    timer.textContent = time;
    let intervalId1 = setInterval(function() {
        time = time + 1;
        timer.textContent = time;

    }, 1000);
    getquote();
});

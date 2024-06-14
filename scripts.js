function checkAnswers() {
    var answer1 = document.getElementById("answer1").value.trim().toUpperCase();
    var answer2 = document.getElementById("answer2").value.trim().toUpperCase();
    var answer3 = document.getElementById("answer3").value.trim().toUpperCase();
    var answer4 = document.getElementById("answer4").value.trim().toUpperCase();
    var answer5 = document.getElementById("answer5").value.trim().toLowerCase();

    if (answer1 === "L" && answer2 === "U" && answer3 === "C" && answer4 === "K" && answer5 === "now") {
        window.location.href = "https://cysx.000webhostapp.com/";
    } else {
        alert("One or more answers are incorrect. Please try again.");
    }
}

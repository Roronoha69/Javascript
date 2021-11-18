
userInput = prompt('Ecris-ici :');

analyse = userInput.split(" ");


if (analyse[analyse.length - 1] == "?") {
    console.log("Ouais Ouais...") 
}

else if (userInput == userInput.toUpperCase() && userInput.length != 0) {
    console.log("Calmez-vous monseigneur ! ")
}

else if (userInput.length != 0 && analyse.includes("Fortnite")) { 
    console.log("on s' fait une partie soum-soum ?") }
        
else if (userInput.length == 0) {
    console.log("t'es en PLS ?");
}

else {
    console.log("Oui Maitre")
}

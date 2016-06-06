//========= Timer Control =========//





//========= The Game Section  =========//

//--- User choice buttons ----//
var rock = document.querySelector('.rock')
var paper = document.querySelector('.paper')
var scissors = document.querySelector('.scissors')

var uChoice = document.querySelector(".userChoice")


$(rock).click(function() {
	console.log("rock")
	alert( "Rock Choosen")
});

$(paper).click(function() {
	console.log("paper")
	alert( "Paper Choosen")
});


$(scissors).click(function() {
	console.log("scissor")
	alert( "Scissor Choosen")
});




//--- Bot choice ----//

// var bChoice = document.querySelector(".botChoice")

var botChoice = math.random();
console.log(botChoice)

if(botChoice <=0.33){
	botChoice = "rock"
	console.log("botChoice>>>", botChoice)
}
else if(botChoice <=0.66){
	botChoice = "paper"
	console.log("botChoice>>>", botChoice)
}
else{
	botChoice = "scissors"
	console.log("botChoice>>>", botChoice)
}




//--- Comparing Choices ----//





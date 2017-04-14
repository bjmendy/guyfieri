//name property
//age property
//eat METHOD
//hunger value property
//evolve METHOD
//happiness property
//sleeping property (boolean)
//go to sleep METHOD

var tomagotchi ={
	name: "Guy Fieri",
	age: 0,
	hungerValue: 10,
	isSleeping: false,
	currentForm: "Pastrami",
	eat: function(){
		this.hungerValue -= 3;
		if (this.hungerValue += 11){
			this.currentForm = "Gordon Ramsay";
		}
		this.happiness += 1;
	},
	morph: function(){
		if(this.age === 0){
			this.currentForm = "Pastrami";
		}else if (this.age === 5){
			this.currentForm = "Meat Mayonaise";
		}else if (this.age >=25){
			this.currentForm = "Winner Winner Chicken Dinner";
		} else if (this.age === 35){
			this.currentForm = "Gordon Ramsay";
		}
	},
	wakeUp: function(){
		this.isSleeping = false
		this.happiness +1
		console.log("Up and at 'em here in Flavortown!");
	},

	isAsleep: function(){
		this.isSleeping = true
		this.happiness += 1
		console.log("Even the beef gods need beauty sleep");
	},

	increaseAge: function(){
		this.age += 1;
		this.morph(this.age);
	},
	increaseHappiness: function(){
		if(this.happiness <= 5){
			console.log("I don't feel very bomb dot com");
		}else if (this.happiness > 5){
			console.log("I feel super duper, OUTTA BOUNDS!");
		}
	},

	death: function(){
		if (this.happiness === 0){
			this.currentForm = "Gordon Ramsay"
			console.log(name + ", you fucking died, you donkey!");
		}else if (this.age <= 35)
		console.log(name + ", you fucking died, you old piece of shit!");
		this.currentForm = "Gordon Ramsay"
	},

	checkDeathByAging: function(){
		if(this.age > 35){
			console.log("Guy Fieri is rolling out RIP")
			this.death = true;
		}
	}
}

var feed = document.getElementById("feedbtn");
var hungerMeter = document.getElementByTagName("h2")[0];

feed.addEventListener('click', function(){
	tomagotchi.eat();
});

//UPDATE THE FRAME???
// var i = 1;
// setInterval(function(){
// 	var firstDiv = document.getElementById(i);
// 	if (i % 2 === 0){
// 		i = 1;
// 	}else{
// 		i += 1;
// 	}
// 	var secondDiv = document.getElementById(i);
// 	firstDiv.classList.add("hidden");
// 	secondDiv.classList.remove("hidden");
// }, 6000)

////function to evolve////add a label for happiness//
var  happiness = document.getElementById("happinessbtn");
var happinessMeter = document.getElementsByTagName("h2")[1];

happiness.addEventListener('click', function(){
  tomagotchi.happiness();
});

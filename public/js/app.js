//name property
//age property
//eat METHOD
//hunger value property
//evolve METHOD
//happiness property
//sleeping property (boolean)
//go to sleep METHOD

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the window, open the modal 
 $(document).ready(function(){
 	modal.style.display = "inline-block";
    });

 // $('#myModal').modal('show');

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//define username, pull in from controllers?
// var username = 

var tomagotchi ={
	name: "Guy Fieri",
	age: 0,
	hungerValue: 1,
	happiness: 1,
	isSleeping: false,
	currentForm: "Pastrami",
	eat: function(){
		this.hungerValue += 2;
		if (this.hungerValue === 35){
			this.currentForm = "Gordon Ramsay";
		}
		this.happiness += 1;
		this.age +=1;

		$('#hungernumber').text(this.hungerValue);
		$('#currentformtext').text(this.currentForm);
		$('#issleeping').text(this.isSleeping);
		$('#agenumber').text(this.age);
		$('#happinessnumber').text(this.happiness);

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
		$('#hungernumber').text(this.hungerValue);
		$('#currentformtext').text(this.currentForm);
		$('#issleeping').text(this.isSleeping);
		$('#agenumber').text(this.age);
		$('#happinessnumber').text(this.happiness);
	},
	wakeUp: function(){
		this.isSleeping = false;
		this.happiness -= 1;
		this.age += 2;
		// $('#issleeping').empty();
		$('#issleeping').text("false");
		// $('#speechbubble').empty();
		$('#speechbubble').text("Up and at 'em here in Flavortown!");
		console.log("Up and at 'em here in Flavortown!");
		$('#hungernumber').text(this.hungerValue);
		$('#currentformtext').text(this.currentForm);
		$('#issleeping').text(this.isSleeping);
		$('#agenumber').text(this.age);
		$('#happinessnumber').text(this.happiness);


	},

	isAsleep: function(){
		this.isSleeping = true;
		this.happiness += 1;
		this.age +1;
		// $('#issleeping').empty();
		$('#issleeping').text("true");
		// $('#speechbubble').empty();
		$('#speechbubble').text("Even the beef gods need beauty sleep");
		console.log("Even the beef gods need beauty sleep");
		$('#hungernumber').text(this.hungerValue);
		$('#currentformtext').text(this.currentForm);
		$('#issleeping').text(this.isSleeping);
		$('#agenumber').text(this.age);
		$('#happinessnumber').text(this.happiness);

	},

	increaseAge: function(){
		this.age += 1;
		if (this.happiness <= 5){
			this.age +1;
		}
		this.morph(this.age);
		$('#hungernumber').text(this.hungerValue);
		$('#currentformtext').text(this.currentForm);
		$('#issleeping').text(this.isSleeping);
		$('#agenumber').text(this.age);
		$('#happinessnumber').text(this.happiness);
	},
	increaseHappiness: function(){
		this.happiness +=1;
		if(this.happiness <= 5){
			$('#speechbubble').text("I don't feel very bomb dot com");
			console.log("I don't feel very bomb dot com");
		}else if (this.happiness > 5){
			$('#speechbubble').text("I feel super duper, OUTTA BOUNDS!");
			console.log("I feel super duper, OUTTA BOUNDS!");
			$('#happinessnumber').text(this.happiness);

		}
	},

	death: function(){
		if (this.happiness === 0){
			this.currentForm = "Gordon Ramsay";
			$('#speechbubble').text(this.username + ", you fucking died, you donkey!");
			console.log(this.username + ", you fucking died, you donkey!");
		}else if (this.age <= 35){
			$('#one').replaceWith("<img src='photos/gordon.png' />");
			$('#speechbubble').text(this.username + ", you fucking died, you old piece of shit!");
			console.log(this.username + ", you fucking died, you old piece of shit!");
			this.currentForm = "Gordon Ramsay";
		}else if (this.hungerValue <= 35){
			$('#speechbubble').text(this.username + ", you ate too much, you idiot!");
		}
	},

	checkDeathByAging: function(){
		if(this.age > 35){
			$('#rip').text("Guy Fieri is rolling out RIP");
			console.log("Guy Fieri is rolling out RIP");
			this.death = true;
		}
	}
}


//jQuery events
$('#hamburger').click(function(){
	$('#hamburgermenu').toggleClass('hidden');
});

$('#feedbtn').click(function(){
	tomagotchi.eat();
	$('#one').addClass('hidden');
	$('#two').removeClass('hidden');
	setTimeout(function(){
		$('#two').addClass('hidden');
		$('#one').removeClass('hidden');
	}, 1000)
});

$('#happinessbtn').click(function(){
	// console.log("this is happening");
	tomagotchi.increaseHappiness();
	$('#one').addClass('hidden');
	$('#two').removeClass('hidden');
	setTimeout(function(){
		$('#two').addClass('hidden');
		$('#one').removeClass('hidden');
	}, 1000)
});

$('#sleepbtn').click(function(){
	tomagotchi.isAsleep();
	$('#one').addClass('hidden');
	$('#two').removeClass('hidden');
	setTimeout(function(){
		$('#two').addClass('hidden');
		$('#one').removeClass('hidden');
	}, 1000)
});



//Vanilla event listeners just in case
var happiness = document.getElementById("happinessbtn");
var happinessMeter = document.getElementById("happinessMeter");
var ageMeter = document.getElementById("ageMeter");
var sleepMeter = document.getElementById("sleepMeter");
var hungerMeter = document.getElementById("hungerMeter");
var feed = document.getElementById("feedbtn");
var happiness = document.getElementById("happinessbtn");
var sleep = document.getElementById("sleepbtn");
var face = document.getElementById("one");



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







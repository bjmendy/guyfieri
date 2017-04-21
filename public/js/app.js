//name property
//age property
//eat METHOD
//hunger value property
//evolve METHOD
//happiness property
//sleeping property (boolean)
//go to sleep METHOD
var username;
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the window, open the modal 
 $(document).ready(function(){
 	//ajax call should go here, but unfortunately
 	//it messed up with some jquery functions
 	//and I couldn't implement it

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
		}else if (this.age >= 5){
			this.currentForm = "Gravy Train";
			$('#currentformtext').text(this.currentForm);
		}else if (this.age >=10){
			this.currentForm = "Winner Winner Chicken Dinner";
			$('#currentformtext').text(this.currentForm);
			console.log("this is greater than 10");
		} else if (this.age >= 12){
			this.currentForm = "Gordon Ramsay";
			$('#one').css('background-image', 'url(/styles/photos/gordon.png)');
			$('#currentformtext').text(this.currentForm);
		}
		$('#hungernumber').text(this.hungerValue);
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

			$('#one').css('background-image', 'url(/styles/photos/gordon.png)');
		}else if (this.age >= 16){
			$('#one').css('background-image', 'url(/styles/photos/gordon.png)');
			$('#speechbubble').text(this.username + ", you fucking died, you old piece of shit!");
			console.log(this.username + ", you fucking died, you old piece of shit!");
			this.currentForm = "Gordon Ramsay";
			$('#one').css('background-image', 'url(/styles/photos/gordon.png)');
		}else if (this.hungerValue >= 35){
			$('#speechbubble').text(this.username + ", you ate too much, you idiot!");
			$('#one').css('background-image', 'url(/styles/photos/gordon.png)');
		}
	},

	checkDeathByAging: function(){
		if(this.age > 35){
			$('#rip').text("Guy Fieri is rolling out RIP");
			console.log("Guy Fieri is rolling out RIP");
			this.death = true;
			$('#one').css('background-image', 'url(/styles/photos/gordon.png)');
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

	//put in a counter that is disvisible by 2
});

$('#agebtn').click(function(){
	tomagotchi.morph();
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


//this will call the functions to show death and death
//by aging, which has jquery in it that will render
//different photos and end the game
$('.btn').click(function(){
	tomagotchi.death();
	tomagotchi.checkDeathByAging();
	// $('#one').css('background-image', 'url(/styles/photos/gordon.png)');
});

//sound files
// var audioElement = document.createElement('audio');
// audioElement.setAttribute('/styles/soundfiles/LAMBSAUCE.mp3');



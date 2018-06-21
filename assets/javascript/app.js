// Defined variables 

numberRight = 0;
numberWrong = 0;
numberUnanswered = 0;
var userAnswers = [];


var questions = [ {
	question: "How many lanes are there in league of legends?",
	choices: ["1", "2", "3", "4"],
	correctAnswer: "3"
}, {
	question: "What year did league of legends come out?",
	choices: ["2013", "2014", "2015", "2009"],
	correctAnswer: "2009"
}, {
	question: "What is the yearly tournament called?",
	choices: ["Worlds", "Legends", "Tournament", "There is none"],
	correctAnswer: "Worlds"
}, {
	question: "What is each different charachter called in league of legends?",
	choices: ["Champion", "Player", "Summoner", "Monster"],
	correctAnswer: "Champion"
}, {
	question: "What is the primary map called?",
	choices: ["Summoner's Rift", "The arena", "ARAM", "The colliseum"],
	correctAnswer: "Summoner's Rift"
},  {
	question: "Who is my favorite champion?",
	choices: ["Katarina", "Nidalee", "Renekton", "Talon"],
	correctAnswer: "Katarina"
},  {
	question: "What is it killed when you kill the entire opposing team at once?",
	choices: ["Megakill", "Superkill", "Pentakill", "Unstoppable"],
	correctAnswer: "Pentakill"
},	{
	question: "WHow many players are on each team?",
	choices: ["1", "3", "5", "4"],
	correctAnswer: "5"
},	{
	question: "Which of the following is not a league of legends champion?",
	choices: ["Akali", "Lux", "Annie", "Arthas"],
	correctAnswer: "Arthas"
},	{
	question: "How many active league of legends accounts are there?",
	choices: ["5", "30 million", "27 million", "50 million"],
	correctAnswer: "27 million"
}
];


for (var i = 0; i < questions.length; i++) {
	var pTag = $("<p>");
	var form = $("<form class='question'>");

	pTag.html(questions[i].question);
	
	for(var j = 0; j < questions[i].choices.length; j++){
		
		var label = $("<label class='radio-inline'>");

		var choice = $("<input type='radio' name='optradio'>");

		choice.attr("value", questions[i].choices[j]);
		label.append(choice);
		label.append(questions[i].choices[j]);
		form.append(label);
		pTag.append(form);
	}

	$('#questionDiv').append(pTag);


}


var n = 50;
setTimeout(countDown,1000);

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }

   $("#countdown").html(n);

   if (n === 0){
   	grader();
   }


} 


function grader(){


    var selected = $('.question');
    $.each(selected, function(){
    	var checkBox = $(this).find("input[type=radio]:checked");

    	if (!checkBox.val()){
    		console.log("unanswered");
    		userAnswers.push("unanswered");
    	}
    	if (checkBox.val()) {
    		console.log(checkBox.val());
    		userAnswers.push(checkBox.val());
    	}
    	console.log(userAnswers);
    }) 

	
	for (var i = 0; i < questions.length; i++) {
		if (userAnswers[i]=="unanswered") {
			numberUnanswered++;
		}
		else {

			if (questions[i].correctAnswer==userAnswers[i]) {
				numberRight++;
			}
			if (questions[i].correctAnswer!=userAnswers[i]){
				numberWrong++;
			}
		}
		$("#correct").html(numberRight);
		$("#wrong").html(numberWrong);
		$("#unanswered").html(numberUnanswered);
		console.log(numberUnanswered);
		console.log(numberRight);
		console.log(numberWrong);
	}

} 




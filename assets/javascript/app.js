
var number = 31;
var intervalId;
var questionInterval;

var correct = 0;
var incorrect = 0;

var nextQuestion;
var questions = [

    //Question 1
    {  
        answer: "Mr. Pink",
        question: "In what role did Steve Buscemi claim he did not believe in tipping?",
        options: ["Enoch Thompson", "Mr. Pink", "Romero", "Donny"]
    },

    //Question 2
    {
        answer: "John Waters",
        question: "To which director does Steve Buscemi bear a passing resemblance?",
        options: ["John Waters", "Francis Ford Coppola", "Steven Spielberg", "Orson Welles"]
    },

    //Question 3
    {
        answer: "30 Rock",
        question: "On what TV show did Steve Buscemi play an undercover investigator at a high school?",
        options: ["Boardwalk Empire", "The Office", "The Sopranos", "30 Rock"]
    },

    //Question 4
    {
        answer: "Firefighter",
        question: "What job did Steve Buscemi have prior to becoming an actor?",
        options: ["Paramedic", "Mailman", "Firefighter", "911 Operator"]
    }
   
];



$("#start").on("click", run); //The run function does not need to be called later because it is called when the user clicks the start button.

function run() {

    //The count starts over
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {
    
    //The countdown will continue until it reaches 0 and then it stops
    number--;
    $("#time-left").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stop();
      alert("Time's Up!");
    }
  }

function stop() {

    //The countdown stops and clears the count
    clearInterval(intervalId);
}

//A function to show questions one at a time
function nextQuestion(currentQuestion) {

    //Removes the previous question
    $("#options").empty();

    //Shows the next question
    $("#question").text(currentQuestion.question);

    //Adds the corresponding multiple choice answers with radio inputs to each question
    for(var i=0; i < currentQuestion.options.length; i++) {
        $("#options").append("<input type='radio' name='choice' value=''>" + currentQuestion.options[i] + "</input>"); //Adding a name makes it so only one answer can be selected per question
    };

}

//A click event to change to a new question every 15 seconds
$("#start").on("click", function(){

    //like in a for loop, we need the function to know to start at index 0
    var i = 0;
   
    //Here we are running the previous function on the questions array
    nextQuestion(questions[i]);

    //We define the global variable questionInterval as a setInterval function
    questionInterval = setInterval(
        function() {

            //The game will mark the answer the user selected
            var selected = $("input:checked").val();

            //And compare it to the correct answer
            console.log(selected);
            console.log("Questions I answer: ");
            if (selected === questions[i].answer) {
                correct++;
                console.log("Correct: " + correct);
            }

            if (selected !== questions[i].answer) {
                incorrect++;
                console.log("Incorrect: " + incorrect);
            }

            //Proceeds to the next question in the array after checking both if statements
            i++;
            
            //Once we get to the last question, the timer stops and clears
            if (i >= questions.length) {
                clearInterval(questionInterval);

                if (correct >= 3) {
                    $("#correct").text("YOU WON!" + "Correct: " + correct);
                    $("#incorrect").text("Incorrect: " + "Incorrect: " + incorrect);
                } else {
                    $("#incorrect").text("YOU LOST!" + "Incorrect: " + incorrect);
                    $("#correct").text("Correct: " + "Correct: " + correct);
                }
               

            } else {
                nextQuestion(questions[i]);
            }

        },

        //This is how long the user will have to answer each question
        6000
    );
    
    
})
    
    
    

//Within a timer function?
//series of questions
    //four possible answers each
    //each question is a form requirng input
//Display question
//User responds to question
//Computer stores user choice
//when timer runs out computer tells user how many questions they got right out of questions they were asked.

var number = 60;
var intervalId;
var nextQuestion;
setTimeout(nextQuestion, 1000 * 15);

//correct += correct answer guessed by user
var correct = []

//incorrect += incorrect answer guessed by user
var incorrect = []

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
   
]

//var text = questions[questionnumber2].text; //to access question 2
//var answer = questions[questionnumber2].answer; to access the answer

var answer

$("#start").on("click", run); //The run function does not need to be called later because it is called when the user clicks the start button.

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {
    number--;
    $("#time-left").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stop();
      alert("Time Up!");
    }
  }
function stop() {
clearInterval(intervalId);
}



//A function to show questions one at a time
$("#start").on("click", function(){

    //for (var i=0; i < 5; i++) {
        $("#question").html(questions[i].question);
        $("#options").html("<input type='radio'" + questions[i].options + "</input>");
        console.log("next question");
    //};

})
    
    
    

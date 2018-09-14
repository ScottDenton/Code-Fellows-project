// 1. create list of dog breeds
function dog (breed, build, activityLevel, inside, hair) {
   this.breed = breed;
   this.build = build;
   this.activityLevel = activityLevel;
   this.inside = inside;
   this.hair = hair;
   }

   var labrador = new dog ('Labrador','large', 'average', 'both', 'short' );

   var frenchBulldog = new dog('French Bulldog','small','low','inside', 'short');
   
   var germanShepherd = new dog ('German Shepherd', 'large', 'very high', 'outside', 'medium')

   var pug = new dog ('Pug', 'small', 'very low', 'inside', 'short')

   var italianGreyhound = new dog ('Italian Greyhound', 'small', 'low', 'inside', 'very short')

   var maltese = new dog ('Maltese', 'small', 'low', 'inside', 'long')

   var bearededCollie = new dog ('Bearded Collie', "medium",'medium', 'inside', 'long' )

   
// Place breeds into an array
var dogBreeds = [labrador, frenchBulldog, germanShepherd, pug, italianGreyhound, maltese, bearededCollie];

// list out questions and answers
var question1 = "What size dog would you prefer ?";
var answerQ1 = ["Small", "Medium", "Large"];


var question2 = "How active would you like your new dog to be ?";
var answerQ2 = ["Not Very", "Moderate", "Very Active"];


var question3 = "Would you like an inside or an outside dog ?";
var answerQ3 = ["Inside", "Either", "Outside"];


var question4 = "Do you prefer long hair or short haired dogs";
var answerQ4 = ["Short", "Medium", "Long"];

var allQuestions = [question1, question2, question3, question4];
var allAnswers = [answerQ1, answerQ2, answerQ3, answerQ4]

var question = 0;

var mainDisplay = document.getElementById("questions-section");
var questionText = document.getElementById("question-text");
var nextButton = document.getElementById('next-button');
var questionText =  document.getElementById("question-text");
var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var restartButton = document.getElementById('restart-button');

function restart(){
    question = 0;
    questionText.textContent = allQuestions[0];
    label1.textContent = allAnswers[0][0];
    label2.textContent = allAnswers[0][1];
    label3.textContent = allAnswers[0][2];
    nextButton.textContent = "Next";
    nextButton.style.backgroundColor = 'rgba(5, 103, 148, 0.5)';
}

function displayDog(){
    mainDisplay.innerHTML = '<img class ="finalDogPic" src = "https://i.imgur.com/Pc97aRj.jpg">';
    restartButton.addEventListener('click',restart)
}

// Next button and question/answer cycling
    nextButton.addEventListener ('click', function(){
    if(question < allQuestions.length-1) {question++;
        questionText.textContent = allQuestions[question];

        // insert answer options into UI
        label1.textContent = allAnswers[question][0];
        label2.textContent = allAnswers[question][1];
        label3.textContent = allAnswers[question][2];

        if(question === 3) {
            nextButton.innerHTML = '<input id ="submit-button" type="button" value ="Submit" onclick = "displayDog();">'
            nextButton.style.backgroundColor = 'rgba(255,30,45,0.5)';
       }
       /************ RESTART BUTTON NEEDS TO REPLACE THE HTML BACK TO NORMAL */
        
        //restart button and reseting questions
        restartButton.addEventListener('click',restart)
    }
   })


    
//when  question is answered remove dogs from array that dont suit answer given

//move onto next questions when button is pressed

// continue to remove dogs until all questions are asked

// display the result


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



// insert question into UI
// ********************************* section im working on
var question = 0;
document.getElementById("question-text").textContent = allQuestions[question];

// insert answer options into UI
document.getElementById("label1").textContent = allAnswers[question][0];
document.getElementById('label2').textContent = allAnswers[question][1];
document.getElementById('label3').textContent = allAnswers[question][2];


//when  question is answered remove dogs from array that dont suit answer given

//move onto next questions

// continue to remove dogs until all questions are asked

// display the result


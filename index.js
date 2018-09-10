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
var question1 = "Would you prefer a small or a large dog ?";
var answer1_1 = "Small";
var answer1_2 = "Medium";
var answer1_3 = "Large";

var question2 = "How active would you like your new dog to be ?";
var answer2_1 = "Not Very";
var answer2_2 = "Moderate";
var answer2_3 = "Very Active";

var question3 = "Would you like an inside or an outside dog ?";
var answer3_1 = "Inside";
var answer3_2 = "Both";
var answer3_3 = "Outside";

var question4 = "Do you prefer long hair or short haired dogs";
var answer4_1 = "Short";
var answer4_2 = "Medium";
var answer4_3 = "Long";

var allQuestions = [question1, question2, question3, question4];


// insert question into UI
// ********************************* section im working on
for(var i = 0; i < allQuestions.length; i++) {

document.getElementById("question-text").textContent = allQuestions[i];
console.log(allQuestions[i]);

}

// insert answer options into UI
document.getElementById("label1").textContent = answer1_1;
document.getElementById('label2').textContent = answer1_2;
document.getElementById('label3').textContent = answer1_3;


//when  question is answered remove dogs from array that dont suit answer given

//move onto next questions

// continue to remove dogs until all questions are asked

// display the result


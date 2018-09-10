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

// list out questions
var question1 = "Would you prefer a small or a large dog ?";
var question2 = "How active would you like your new dog to be ?";
var question3 = "Would you like an inside or an outside dog ?";
var question4 = "Do you prefer long hair or short haired dogs"

// insert question into UI
document.getElementById("question-text").textContent = question2;

// insert answer options into UI


//when  question is answered remove dogs from array that dont suit answer given

//move onto next questions

// continue to remove dogs until all questions are asked

// display the result


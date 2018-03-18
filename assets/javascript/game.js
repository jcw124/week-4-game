
// set intital displays 
$( document ).ready(function() {
});

//define variables
var numStart;
var wins = 0;
var losses =0;
var score=0;
var jwla; 
var jwlb;
var jwlc;
var jwld;
var usersjwl;

document.onclick = function setupGame(){
    //starting number numStart (array range 19-120)
    numStart = Math.floor(Math.random() * 120) + 19;
    console.log(numStart);
     //jewel variables   jwla jwlb jwlc jwlc (random  1-12)
    jwla =  Math.floor(Math.random() * 12) + 1;
    jwlb = Math.floor(Math.random() * 12) + 1;
    jwlc =  Math.floor(Math.random() * 12) + 1;
    jwld = Math.floor(Math.random() * 12) + 1;
    console.log("value A is " + jwla + " value B is " + jwlb + " value C is " + jwlc + " value D is " + jwld);
    $("#random").html(numStart);
}


 // current wins   wins
 //current losses losses
 // total score    score

 //userscurrent jewel selection value jwlval


//define random #  for starting num
//define random vales for jewels

//when user clicks on a jewel set that value to jewel selection variable
//add currentl jewel selection value to score
//check  if the score matches starting number
// if score is less than the starting number allow the user to continue
// if score matches the starting number  mark it as a win, and display a win
// if score it greater than starting number mark it as a lose and display a loss


//lwhen win or loss start a new game */}



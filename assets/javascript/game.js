
// set intital displays 
// $( document ).ready(function() {
// });

//define variables

//define random #  for starting num
var numStart;
//define variables for wins and loses
var wins = 0;
var losses =0;
//define variable for the score
var score=0;
//define random vales for jewels
var jwla; 
var jwlb;
var jwlc;
var jwld;



    // starting number numStart (array range 19-120)
    numStart = Math.floor(Math.random() * 120) + 19;
    console.log(numStart);
     //jewel variables   jwla jwlb jwlc jwlc (random  1-12)
    jwla =  Math.floor(Math.random() * 12) + 1;
    jwlb = Math.floor(Math.random() * 12) + 1;
    jwlc =  Math.floor(Math.random() * 12) + 1;
    jwld = Math.floor(Math.random() * 12) + 1;
    console.log('test here')
    console.log("value A is " + jwla + " value B is " + jwlb + " value C is " + jwlc + " value D is " + jwld);
    $("#random").html(numStart);
    $("#score").html(score);



// add clickable buttons and setting the value

//look jquery.this.onclick



    $("#jwla").on("click", function(e){
        // e.preventDefault();
      score = score + jwla;
      console.log("jwla is" + jwla );
      console.log(score);
      $("#score").html(score);
    });

    $("#jwlb" ).click(function(){
    console.log("jwlb is" + jwlb );
    score = score + jwlb;
    console.log(score);
    $("#score").html(score);
    });


    $("#jwlc" ).click(function(){
        console.log("jwlc is" + jwlc );
        score = score + jwlc;
        console.log(score);
        $("#score").html(score);
    });


    $("#jwld" ).click(function(){
        console.log("jwld is" + jwld );
        score = score + jwld;
        console.log(score);
        $("#score").html(score);
    });

//if score is less than the starting number allow the user to continue
//if numStart < score {
// console.log (numStart + "is less than" + score);   
//} else

// if score matches the starting number  mark it as a win, and display a win
//if numStart === score {
  //  console.log (numStart + "equals" + score); 
//} else


// if score it greater than starting number mark it as a lose and display a loss
//if numStart > score {
 //   console.log (numStart + "is greater than" + score);
//}


//}



 //userscurrent jewel selection value jwlval

//when user clicks on a jewel set that value to jewel selection variable
//add currentl jewel selection value to score



//when win or loss start a new game */}


//use to apply css to a new div for a Win or a lose
 // We then apply that CSS to our newDiv.
 //newDiv.setAttribute("class", "fancy");
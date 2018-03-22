 $(document).ready(function () {});


 //define variables

 //define random #  for starting num
 var numStart;
 //define variables for wins and loses
 var wins = 0;
 var losses = 0;
 //define variable for the score
 var score = 0;
 //define random vales for jewels
 var jewela;
 var jewelb;
 var jewelc;
 var jeweld;

 function playGame() {
     score = 0;
     // starting number numStart (array range 19-120)
     numStart = Math.floor(Math.random() * 120) + 19;
     console.log(numStart);
     //jewel variables   jewela jewelb jewelc jewelc (random  1-12)
     jewela = Math.floor(Math.random() * 12) + 1;
     jewelb = Math.floor(Math.random() * 12) + 1;
     jewelc = Math.floor(Math.random() * 12) + 1;
     jeweld = Math.floor(Math.random() * 12) + 1;
     console.log("value A is " + jewela + " value B is " + jewelb + " value C is " + jewelc + " value D is " + jeweld);
     $("#random").html(numStart);
     $("#scores").html("Current Score: " + score);
     checkScore()
 }

 function checkScore() {
     //if numStart === score
     if (score === numStart) {
         console.log("Your a Winner");
         console.log(score + " equals " + numStart);
         wins++;
         $("#wins").html("Wins: " + wins);
         console.log("the number of wins " + wins);
         playGame();
     } else
         //if numStart < score 
         if (score < numStart) {
             console.log(score + " less than " + numStart);
         } else
             // // if score matches the starting number  mark it as a win, and display a win
             // if (score === numStart) {
             //     console.log(score + "equals" + numStart);
             //     wins++;
             //     console.log("the number or wins " + wins)
             // }
             //if numStart > score 
             if (score > numStart) {
                 console.log("Your a Loser");
                 console.log(score + "is greater than" + numStart);
                 losses++;
                 $("#losses").html("Losses: " + losses);
                 console.log("the number or losses " + losses);
                 playGame();
             }

 }


 //when user clicks on a jewel set that value to jewel selection variable
 //add currentl jewel selection value to score
 $("#jewela").on("click", function () {
     score = score + jewela;
     console.log("jewela is " + jewela);
     console.log(score);
     $("#scores").html("Current Score: " + score);
     checkScore();
 });

 $("#jewelb").click(function () {
     console.log("jewelb is " + jewelb);
     score = score + jewelb;
     console.log(score);
     $("#scores").html("Current Score: " + score);
     checkScore();
 });


 $("#jewelc").click(function () {
     console.log("jewelc is " + jewelc);
     score = score + jewelc;
     console.log(score);
     $("#scores").html("Current Score: " + score);
     checkScore();
 });


 $("#jeweld").click(function () {
     console.log("jeweld is " + jeweld);
     score = score + jeweld;
     console.log(score);
     $("#scores").html("Current Score: " + score);
     checkScore();
 });

 playGame();


 //when win or loss start a new game */}

 //use to apply css to a new div for a Win or a lose
 // We then apply that CSS to our newDiv.
 //newDiv.setAttribute("class", "fancy");
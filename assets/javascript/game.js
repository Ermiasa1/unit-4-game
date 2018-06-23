$(document).ready (function(){
 
    var ranNum = Math.floor(Math.random()*101+19);
    $("#container-one").text(ranNum);
 
  
   var redNum= Math.floor(Math.random()*11+1);
     console.log(redNum);
 
   var blueNum= Math.floor(Math.random()*11+1);
   console.log(blueNum);
 
   var greenNum= Math.floor(Math.random()*11+1);
   console.log(greenNum);
 
   var yellowNum= Math.floor(Math.random()*11+1);
   console.log(yellowNum);
 
 var scoreCounter= 0;
 var winsCounter= 0;
 var lossesCounter= 0;
 
  console.log(scoreCounter);
  console.log(redNum);
 $("#score").text(scoreCounter);
 $("#wins").text(winsCounter);
 $("#losses").text(lossesCounter);
 
 function reset(){
    ranNum= Math.floor(Math.random()*101+19);
    $("#container-one").text(ranNum);
 
  
   var redNum= Math.floor(Math.random()*11+1);
     console.log(redNum);
 
   var blueNum= Math.floor(Math.random()*11+1);
   console.log(blueNum);
 
   var greenNum= Math.floor(Math.random()*11+1);
   console.log(greenNum);
 
   var yellowNum= Math.floor(Math.random()*11+1);
   console.log(yellowNum);
   scoreCounter= 0;
   console.log("scoreCounter");
   $("#score").text(scoreCounter);
 }
 
 
 $("#red").on("click", function(){
   scoreCounter= scoreCounter +  redNum;
   alert(scoreCounter);
   $("#score").text(scoreCounter);
   
   if (scoreCounter==ranNum){
     alert("you won!");
     winsCounter++;
     $("#wins").text(winsCounter);
     reset();
   } else if(scoreCounter > ranNum){
     alert("you lose!");
     lossesCounter++;
     $("#losses").text(lossesCounter);
     reset();
   }
 });
   
 $("#blue").on("click", function(){
   scoreCounter= scoreCounter +  blueNum;
   alert(scoreCounter);
   $("#score").text(scoreCounter);
   
   if (scoreCounter==ranNum){
     alert("you won!");
     winsCounter++;
     $("#wins").text(winsCounter);
     reset();
   } else if(scoreCounter > ranNum){
     alert("you lose!");
     lossesCounter++;
     $("#losses").text(lossesCounter);
     reset();
   }
 });
 
 $("#yellow").on("click", function(){
   scoreCounter= scoreCounter +  yellowNum;
   alert(scoreCounter);
   $("#score").text(scoreCounter);
   
   if (scoreCounter==ranNum){
     alert("you won!");
     winsCounter++;
     $("#wins").text(winsCounter);
     reset();
   } else if(scoreCounter > ranNum){
     alert("you lose!");
     lossesCounter++;
     $("#losses").text(lossesCounter);
     reset();
   }
 });
 
 $("#green").on("click", function(){
   scoreCounter= scoreCounter +  greenNum;
   alert(scoreCounter);
   $("#score").text(scoreCounter);
   
   if (scoreCounter==ranNum){
     alert("you won!");
     winsCounter++;
     $("#wins").text(winsCounter);
     reset();
   } else if(scoreCounter > ranNum){
     alert("you lose!");
     lossesCounter++;
     $("#losses").text(lossesCounter);
     reset();
   }
 });
 
 });
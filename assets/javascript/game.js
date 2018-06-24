$(document).ready (function(){
 
    var ranNum = Math.floor(Math.random()*101+19);
    $("#container-one").text(ranNum);
 
  
   var redNum= Math.floor(Math.random()*11+1);
    
 
   var blueNum= Math.floor(Math.random()*11+1);
   
 
   var greenNum= Math.floor(Math.random()*11+1);
  
 
   var yellowNum= Math.floor(Math.random()*11+1);
   
 
 var scoreCounter= 0;
 var winsCounter= 0;
 var lossesCounter= 0;
 
  
 $("#score").text(scoreCounter);
 $("#wins").text(winsCounter);
 $("#losses").text(lossesCounter);
 
 function reset(){
    ranNum= Math.floor(Math.random()*101+19);
    $("#container-one").text(ranNum);
 
  
   var redNum= Math.floor(Math.random()*11+1);
    
 
   var blueNum= Math.floor(Math.random()*11+1);
   
 
   var greenNum= Math.floor(Math.random()*11+1);
   
 
   var yellowNum= Math.floor(Math.random()*11+1);
   
   scoreCounter= 0;
   
   $("#score").text(scoreCounter);
 }
 
 
 $("#red").on("click", function(){
   scoreCounter= scoreCounter +  redNum;
   
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
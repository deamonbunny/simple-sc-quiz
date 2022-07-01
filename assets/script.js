//General Variables
var score = 0;
var timeLeft = 90;

//Container Variables
var welcome = document.querySelector('#welcome')
var game = document.querySelector('#game')
var end = document.querySelector('#end')
var q1 = document.querySelector('#question1')
var q2 = document.querySelector('#question2')
var q3 = document.querySelector('#question3')
var q4 = document.querySelector('#question4')
var q5 = document.querySelector('#question5')
var q6 = document.querySelector('#question6')
var q7 = document.querySelector('#question7')
var q8 = document.querySelector('#question8')
var q9 = document.querySelector('#question9')
var q10 = document.querySelector('#question10')

// Button Variables
//play
var button0 = document.querySelector('#play');
//question 1
var button1 = document.querySelector('#incorrect1');
var button2 = document.querySelector('#correct');
var button3 = document.querySelector('#incorrect2');
var button4 = document.querySelector('#incorrect3');
//question 2
var button5 = document.querySelector('#correct2');
var button6 = document.querySelector('#incorrect4');
var button7 = document.querySelector('#incorrect5');
var button8 = document.querySelector('#incorrect6');
//question 3
var button9 = document.querySelector('#incorrect7');
var button10 = document.querySelector('#incorrect8');
var button11 = document.querySelector('#incorrect9');
var button12 = document.querySelector('#correct3');
//question 4
var button13 = document.querySelector('#incorrect10');
var button14 = document.querySelector('#incorrect11');
var button15 = document.querySelector('#correct4');
var button16 = document.querySelector('#incorrect12');
//question 5
var button17 = document.querySelector('#incorrect13');
var button18 = document.querySelector('#incorrect14');
var button19 = document.querySelector('#incorrect15');
var button20 = document.querySelector('#correct5');
//question 6
var button21 = document.querySelector('#correct6');
var button22 = document.querySelector('#incorrect16');
var button23 = document.querySelector('#incorrect17');
var button24 = document.querySelector('#incorrect18');
//question 7
var button25 = document.querySelector('#incorrect19');
var button26 = document.querySelector('#correct7');
var button27 = document.querySelector('#incorrect20');
var button28 = document.querySelector('#incorrect21');
//question 8
var button29 = document.querySelector('#incorrect22');
var button30 = document.querySelector('#incorrect23');
var button31 = document.querySelector('#incorrect24');
var button32 = document.querySelector('#correct8');
//question 9
var button33 = document.querySelector('#incorrect25');
var button34 = document.querySelector('#incorrect26');
var button35 = document.querySelector('#correct9');
var button36 = document.querySelector('#incorrect27');
//question 10
var button37 = document.querySelector('#correct10');
var button38 = document.querySelector('#incorrect28');
var button39 = document.querySelector('#incorrect29');
var button40 = document.querySelector('#incorrect30');
//replay button
var button41 = document.querySelector('#replay');

//Play Game
button0.addEventListener("click", function() {
    welcome.setAttribute("style", "display:none");
    game.setAttribute("style", "display:block");
    q1.setAttribute('style', "display:block")
});


//Question 1
button1.addEventListener("click", function() {
    q1.setAttribute("style", "display:none");
    q2.setAttribute("style", "display:block");
});
//winning button
button2.addEventListener("click", function() {
    q1.setAttribute("style", "display:none");
    q2.setAttribute("style", "display:block");
});

button3.addEventListener("click", function() {
    q1.setAttribute("style", "display:none");
    q2.setAttribute("style", "display:block");
});

button4.addEventListener("click", function() {
    q1.setAttribute("style", "display:none");
    q2.setAttribute("style", "display:block");
});


//Question 2
button5.addEventListener("click", function() {
    q2.setAttribute("style", "display:none");
    q3.setAttribute("style", "display:block");
});
//winning button
button6.addEventListener("click", function() {
    q2.setAttribute("style", "display:none");
    q3.setAttribute("style", "display:block");
});

button7.addEventListener("click", function() {
    q2.setAttribute("style", "display:none");
    q3.setAttribute("style", "display:block");
});

button8.addEventListener("click", function() {
    q2.setAttribute("style", "display:none");
    q3.setAttribute("style", "display:block");
});


//Question 3
button9.addEventListener("click", function() {
    q3.setAttribute("style", "display:none");
    q4.setAttribute("style", "display:block");
});
//winning button
button10.addEventListener("click", function() {
    q3.setAttribute("style", "display:none");
    q4.setAttribute("style", "display:block");
});

button11.addEventListener("click", function() {
    q3.setAttribute("style", "display:none");
    q4.setAttribute("style", "display:block");
});

button12.addEventListener("click", function() {
    q3.setAttribute("style", "display:none");
    q4.setAttribute("style", "display:block");
});

//Question 4
button13.addEventListener("click", function() {
    q4.setAttribute("style", "display:none");
    q5.setAttribute("style", "display:block");
});
//winning button
button14.addEventListener("click", function() {
    q4.setAttribute("style", "display:none");
    q5.setAttribute("style", "display:block");
});

button15.addEventListener("click", function() {
    q4.setAttribute("style", "display:none");
    q5.setAttribute("style", "display:block");
});

button16.addEventListener("click", function() {
    q4.setAttribute("style", "display:none");
    q5.setAttribute("style", "display:block");
});


//Question 5
button17.addEventListener("click", function() {
    q5.setAttribute("style", "display:none");
    q6.setAttribute("style", "display:block");
});
//winning button
button18.addEventListener("click", function() {
    q5.setAttribute("style", "display:none");
    q6.setAttribute("style", "display:block");
});

button19.addEventListener("click", function() {
    q5.setAttribute("style", "display:none");
    q6.setAttribute("style", "display:block");
});

button20.addEventListener("click", function() {
    q5.setAttribute("style", "display:none");
    q6.setAttribute("style", "display:block");
});

//Question 6
button21.addEventListener("click", function() {
    q6.setAttribute("style", "display:none");
    q7.setAttribute("style", "display:block");
});
//winning button
button22.addEventListener("click", function() {
    q6.setAttribute("style", "display:none");
    q7.setAttribute("style", "display:block");
});

button23.addEventListener("click", function() {
    q6.setAttribute("style", "display:none");
    q7.setAttribute("style", "display:block");
});

button24.addEventListener("click", function() {
    q6.setAttribute("style", "display:none");
    q7.setAttribute("style", "display:block");
});


//Question 7
button25.addEventListener("click", function() {
    q7.setAttribute("style", "display:none");
    q8.setAttribute("style", "display:block");
});
//winning button
button26.addEventListener("click", function() {
    q7.setAttribute("style", "display:none");
    q8.setAttribute("style", "display:block");
});

button27.addEventListener("click", function() {
    q7.setAttribute("style", "display:none");
    q8.setAttribute("style", "display:block");
});

button28.addEventListener("click", function() {
    q7.setAttribute("style", "display:none");
    q8.setAttribute("style", "display:block");
});

//Question 8
button29.addEventListener("click", function() {
    q8.setAttribute("style", "display:none");
    q9.setAttribute("style", "display:block");
});
//winning button
button30.addEventListener("click", function() {
    q8.setAttribute("style", "display:none");
    q9.setAttribute("style", "display:block");
});

button31.addEventListener("click", function() {
    q8.setAttribute("style", "display:none");
    q9.setAttribute("style", "display:block");
});

button32.addEventListener("click", function() {
    q8.setAttribute("style", "display:none");
    q9.setAttribute("style", "display:block");
});


//Question 9
button33.addEventListener("click", function() {
    q9.setAttribute("style", "display:none");
    q10.setAttribute("style", "display:block");
});
//winning button
button34.addEventListener("click", function() {
    q9.setAttribute("style", "display:none");
    q10.setAttribute("style", "display:block");
});

button35.addEventListener("click", function() {
    q9.setAttribute("style", "display:none");
    q10.setAttribute("style", "display:block");
});

button36.addEventListener("click", function() {
    q9.setAttribute("style", "display:none");
    q10.setAttribute("style", "display:block");
});


//Question 10
button37.addEventListener("click", function() {
    game.setAttribute("style", "display:none");
    q10.setAttribute("style", "display:none");
    end.setAttribute("style", "display:block");
});
//winning button
button38.addEventListener("click", function() {
    game.setAttribute("style", "display:none");
    q10.setAttribute("style", "display:none");
    end.setAttribute("style", "display:block");
});

button39.addEventListener("click", function() {
    game.setAttribute("style", "display:none");
    q10.setAttribute("style", "display:none");
    end.setAttribute("style", "display:block");
});

button40.addEventListener("click", function() {
    game.setAttribute("style", "display:none");
    q10.setAttribute("style", "display:none");
    end.setAttribute("style", "display:block");
});


// Replay
button41.addEventListener("click", function() {
    end.setAttribute("style", "display:none");
    welcome.setAttribute("style", "display:block");
});




var gameTimer = setInterval(function(){
  if(timeLeft <= 0){
    clearInterval(gameTimer);
  }
  document.getElementById("timer").value = 90 - timeLeft;
  timeLeft -= 1;
}, 1000);



//add event listener for each button
//write logic to check if true or false
//
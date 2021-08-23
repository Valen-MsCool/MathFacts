answer_turn = 2;
player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn " + player2_name;
function send() {
   
var number1 = document.getElementById("word").value;
var number2 = document.getElementById("clue").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_word="<h4 id='word_display'>Q. " + number1 + "*"+number2+"</h4>";

input_box="<br> Answer : <input type = 'text' id = 'input_check_box'>";
check_button="<br> <br> <button class= 'btn btn-info' onclick='check()'>Check</button>";
row = question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value=""; 
document.getElementById("clue").value=""; 
}
function check(){
    console.log("check");
var getanswer = document.getElementById("input_check_box").value;

    if (getanswer == actual_answer){
if (answer_turn == 1){
    player1_score=player1_score+1;
    answerturn=2;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player_question").innerHTML="Question Turn "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn "+player2_name;
answer_turn=2;

}else if (answer_turn == 2) {
    player2_score=player2_score+1;
    answerturn=2;
    document.getElementById("player2_score").innerHTML=player2_score;
    document.getElementById("player_question").innerHTML="Question Turn "+player2_name;
    document.getElementById("player_answer").innerHTML="Answer Turn "+player1_name;
    answer_turn=1;
}

document.getElementById("output").innerHTML="";


    }else{
        if (answer_turn == 1){
            
            answerturn=2;
        document.getElementById("player1_score").innerHTML=player1_score;
        document.getElementById("player_question").innerHTML="Question Turn "+player1_name;
        document.getElementById("player_answer").innerHTML="Answer Turn "+player2_name;
        answer_turn=2;
        
        }else if (answer_turn == 2) {
         
            answerturn=2;
            document.getElementById("player2_score").innerHTML=player2_score;
            document.getElementById("player_question").innerHTML="Question Turn "+player2_name;
            document.getElementById("player_answer").innerHTML="Answer Turn "+player1_name;
            answer_turn=1;
        }
        document.getElementById("output").innerHTML="";



        
    }





}

function logout(){

localStorage.removeItem("player_1");

localStorage.removeItem("player_2");
window.location="index.html";

}

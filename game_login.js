document.getElementById("1p").style.display="none";
function addUser(){
player1_name=document.getElementById("player1_name_input").value;
player2_name=document.getElementById("player2_name_input").value;
document.getElementById("player1_name_input").value="";
document.getElementById("player2_name_input").value="";
localStorage.setItem("player_1" , player1_name);
localStorage.setItem("player_2" , player2_name);
window.location="game_page.html";
}
function next() {
    var x = document.getElementById("2p");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("1p").style.display="none";
    } else {
      x.style.display = "none";
      document.getElementById("1p").style.display="block";
    }
  }
  function onep(){

player1_name=document.getElementById("name_input").value;
localStorage.setItem("player_1" , player1_name);
window.location="oneplayer.html";

  }
function add_user(){
    player1_name=document.getElementById("p1_name_input").value;
    localStorage.setItem("player1",player1_name);
    player2_name=document.getElementById("p2_name_input").value;
    localStorage.setItem("player2",player2_name);
    window.location="quiz_game_page.html";
}
function addUser()
{
    player1_name = document.getElementById("player1_name_output").value;
    player2_name = document.getElementById("player2_name_output").value;

      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);

      Window.location = "game_page.html";
}
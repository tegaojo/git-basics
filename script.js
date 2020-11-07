   //we are going to make the button behave like a link
   const gitbutton = document.getElementById("git-button");

   gitbutton.addEventlistener("click", function (){
       alert("you clicked me..... silly Baba")
       window.location.href = "https://github.com";
   });
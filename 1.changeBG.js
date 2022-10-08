 
 let bgButton = document.querySelector("button");

//  let body = document.body;        
//  let currentColor = document.getElementById("current-color");


  // we create a function (manual function)
  function randomColorGenetator()
  {
 
   let red = Math.floor(Math.random() * 256);
   let green = Math.floor(Math.random() * 256);
   let blue = Math.floor(Math.random() * 256);
 
   let rgbColor = `rgb( ${red}, ${green} , ${blue})`
   return rgbColor;
 
  }
 
 bgButton.addEventListener("click", function(){
                   let randomColor = randomColorGenetator();

                   let body = document.body;
                   body.style.backgroundColor = randomColor;    

                   let currentColor = document.getElementById("current-color");
                   currentColor.textContent = randomColor;
 })







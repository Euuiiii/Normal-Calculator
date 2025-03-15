const display = document.getElementById("display");

// this function will add the input character on the display section
function appendCharacter(character){
    display.value += character;
}

// this function works when the user clicks on C & this will balnk the display section
function clearDisplay(){
    display.value=("");
} 

//this function provides the result when the user clicks on = sign
function calculateResult(){
  try{
    display.value = eval(display.value);
  } 
  catch{
    display.value= "Error";
  }
}

// function to erase the last character user provides as an input
function eraseLastCharacter(){
    if(display.value){
 display.value = display.value.slice(0, -1);
    }
}

// To calculate %
function calculatePercentage(){
  try{
    display.value = eval(display.value) / 100;
  } catch{
    display.value = "Error"
  } 
}


// this function detects the numerical key user inputs using keyboard and display it 
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
      appendCharacter(key); 
  } else if (key === "Enter") {
      calculateResult(); 
  } else if (key === "Backspace") {
      eraseLastCharacter(); 
  } else if (key === "Escape") {
      clearDisplay(); 
  }
});


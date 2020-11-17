function validateForm() {
    var x = document.forms["Form1"]["fname"].value;
    if (x === null) {
      alert("Name must be filled");
      return false;
    }
    var y = documents.forms["Form1"]["vname"].value;
    if(y===null){
   alert("Please enter your aadhar/voter number")
    }
  
//Code starts 
//creating a shortnames(const) for Matter.Engine,Matter.World and Matter.Bodies
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//creating variables
var Searching;
var rand = Random(1,10)
var Response2;
//using function setup
//creating canvas
function setupStart(){
var canvas = createCanvas(0,0)
//creating engine and world
engine = Engine.create();
world = engine.world;
//ask permission to search nearby
Searching = prompt("Welcom to stay fit Please type SEARCH below to search for people doing exercise nearby")
if(Searching === SEARCH){
if(rand===1){
var found1 = prompt("Congratulations a perfect match has been found for you Here are the details Name:- fskbf, phone number:-983290687,Write Yes to confirm if not interested Write anything")
}else if(Searching !== SEARCH){
var wrongCODE = alert("Sorry We cannot understand What have you written Please press CTRL+R to try again ")
}
}

//using function draw
//setting background color
background(0);
//updating engine
Engine.update(engine);
}
//console.log(Response1,Response2)
//code ends
//written by Karan Aggarwal
}
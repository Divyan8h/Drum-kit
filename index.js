var noOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var whichButton = this.innerHTML;
    sound(whichButton);

    animation(whichButton);
  });
}

document.addEventListener("keydown", function(event) {
  sound(event.key);

  animation(event.key);
})

function sound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log("nothing is triggered");

  }
}

function animation(currentKey)
{
  var animationCall = document.querySelector("." + currentKey);
  animationCall.classList.add("pressed");

  setTimeout(function ()
{
  animationCall.classList.remove("pressed");
},100)
}

// alert("I got clicked ");
// this.style.color = "white";

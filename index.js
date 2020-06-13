

for(var i=0;i<document.querySelectorAll(".drum").length;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var innerH=this.innerHTML;
    makeSound(innerH);
    Animation(innerH);

    document.addEventListener("keydown",function (event){
      makeSound(event.key);
      Animation(event.key);
    });

    function makeSound(key){
switch (key) {
  case 'w':
  var audio=new Audio("sounds/tom-1.mp3");
  audio.play();
    break;
    case 'a':
    var audio1=new Audio("sounds/tom-2.mp3");
    audio1.play();
      break;
      case 's':
      var audio2=new Audio("sounds/tom-3.mp3");
      audio2.play();
        break;
        case 'd':
        var audio3=new Audio("sounds/tom-4.mp3");
        audio3.play();
          break;
          case 'j':
          var audio=new Audio("sounds/snare.mp3");
          audio.play();
            break;
            case 'k':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
              break;
              case 'l':
              var audio=new Audio("sounds/crash.mp3");
              audio.play();
                break;
  default:
console.log("error::");
}
}
function Animation(word){
  var activeButton=document.querySelector("."+word);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},200);

}
  });
}

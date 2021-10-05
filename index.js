

for(var i=0;i<7;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {
    var x=this.innerHTML;
    makeSound(x);
    buttonAnimation(x);
  }
  );
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(x)
{
  if(x==='w')
  {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if(x=='a')
  {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if(x=='s')
  {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if(x=='d')
  {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  else if(x=='j')
  {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if(x=='k')
  {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  else if(x=='l')
  {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
}

function buttonAnimation(key)
{
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  },100)
}

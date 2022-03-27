var i = 0;

while(i < document.querySelectorAll(".drum").length)
{
document.querySelectorAll(".set button")[i].addEventListener("click" , handler);
i++;
}

function handler()
{
   var letter = this.innerHTML;
       playsound(letter);
       addanimation(letter);

}


document.addEventListener("keydown", function(event)
{
    playsound(event.key);
    addanimation(event.key);

});


function playsound(key)
{
    switch(key)
        {
         
                          case 'w' : var audiow  = new Audio("sounds/crash.mp3");
                         audiow.play();
                         break;
     
                         case 'a' : var audioa  = new Audio("sounds/kick-bass.mp3");
                         audioa.play();
                         break;
     
                         case 's' : var audios  = new Audio("sounds/snare.mp3");
                         audios.play();
                         break;
     
                         case 'd' : var audiod  = new Audio("sounds/tom-1.mp3");
                         audiod.play();
                         break;
     
                         case 'j' : var audioj  = new Audio("sounds/tom-2.mp3");
                         audioj.play();
                         break;
     
                         case 'k' : var audiok = new Audio("sounds/tom-3.mp3");
                         audiok.play();
                         break;
     
                         case 'l' : var audiol  = new Audio("sounds/tom-4.mp3");
                         audiol.play();
                         break;
     
                         default : break;
        }   
}

function addanimation(letter)
{
    var animation = document.querySelector("." + letter);
    animation.classList.add("pressed");

    setTimeout(function() { animation.classList.remove("pressed"); } , 100);
    
}




 
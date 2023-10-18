const music = document.getElementById("control");
const pl = document.getElementById("play");
const random = document.getElementById("random")
let track = Math.floor(Math.random() * 10) +1;
music.src = `./music/${track}.mp3`;

function play(){
    
    music.play();
    pl.setAttribute("class","fa fa-pause");
    pl.setAttribute("onclick","pause()");
}

function pause(){
    music.pause();
    pl.setAttribute("class","fa fa-play");
    pl.setAttribute("onclick","play()");
}

function next(){
    track = (track+1)%11;
    music.src = `./music/${track}.mp3`;
    music.play()
    rand()
    pl.setAttribute("class","fa fa-pause");
    pl.setAttribute("onclick","pause()");


}

function previous(){
    track = track-1;

    if(track==0){
        track=10
    }
    music.src = `./music/${track}.mp3`;
    music.play()
    rand()
    pl.setAttribute("class","fa fa-pause");
    pl.setAttribute("onclick","pause()");
   
}
let toggle =200
function rand(){
    toggle++
        random.src = `https://picsum.photos/${toggle}`
        

  
}

music.addEventListener("ended", function() 
{
    
     next();
});


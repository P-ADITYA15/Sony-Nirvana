const music = document.getElementById("control");
const pl = document.getElementById("play");
const random = document.getElementById("random")
const body = document.getElementById("body")
const title= document.getElementById("title")
const box = document.getElementById("musicbox")
const dict = {
    1: "https://www.youtube.com/watch?v=LKP-vZvjbh8",
    2: "https://www.youtube.com/watch?v=VJ-o8y8JqCQ",
    3: "https://www.youtube.com/watch?v=WTJSt4wP2ME",
    4: "https://www.youtube.com/watch?v=SlPhMPnQ58k",
    5: "https://www.youtube.com/watch?v=4jg8hZI7MrE",
    6: "https://www.youtube.com/watch?v=syFZfO_wfMQ",
    7: "https://www.youtube.com/watch?v=Lo4_K4relMg",
    8: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
    9: "https://www.youtube.com/watch?v=34Na4j8AVgA",
    10: "https://www.youtube.com/watch?v=q0hyYWKXF0Q"
}


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
    if(track==0){
        track=1
    }
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


function dark(){
    body.classList.toggle("body")
    title.classList.toggle("title")
    box.classList.toggle("boxdance")

}

function youtube(){
    window.open(dict[track]);
}

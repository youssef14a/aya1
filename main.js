let stars = document.getElementById('stars');
let mon = document.getElementById('mon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let agatha = document.querySelector(".agatha");
window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px';
    mon.style.top = value *4 +'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value *3 + 'px';
    agatha.style.fontSize = value + 'px';
    if(scrollY >= 35){
        agatha.style.fontSize =  35 + 'px';
        agatha.style.position = 'fixed';

        if(scrollY >=394.6666564941406){
            agatha.style.display = 'none';
        }else{
            agatha.style.display = 'block';
        }
        if(scrollY >=82){
            document.querySelector('.main').style.background ='linear-gradient(#376281,#10001f)'
        }else(
            document.querySelector('.main').style.background ='linear-gradient(#200016,#10001f)'

        )
    }
}

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctricon = document.getElementById("ctricon");

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause() {
  if (ctricon.classList.contains("fa-pause")) {
    song.pause();
    ctricon.classList.remove("fa-pause");
    ctricon.classList.add("fa-play");
  } else {
    song.play();
    ctricon.classList.add("fa-pause");
    ctricon.classList.remove("fa-play");
  }
  if(song.play){
   setInterval(()=>{
    progress.value = song.currentTime;
   },500);
  }
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value
    ctricon.classList.add("fa-pause");
    ctricon.classList.remove("fa-play");
}

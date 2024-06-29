
function function2() {
    var dropdowncnt = document.getElementById('dropdown');
    dropdowncnt.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


// song player

let songs = [
  {songIndex: "0", songDuration:"3:09", songAlbum:"COD Classic Hits", songName: "Euta Pari", songArtist:"Crew on Destiny", filePath: "../assets/audio/euta-pari-basthyo.mp3", coverPath: "../assets/songCover/euta-pari-bashtyo.jpg"},
  {songIndex: "1", songDuration:"3:37", songAlbum:"Kya Kardiya (2024)",songName: "Kya Kardiya", songArtist:"Sushant KC", filePath: "../assets/audio/kya-kardiya.mp3", coverPath: "../assets/songCover/kya-kardiya.jpg"},
  {songIndex: "2", songDuration:"3:14", songAlbum:"Nayan (2024)",songName: "Nayan", songArtist:"Bibash JK", filePath: "../assets/audio/nayan.mp3", coverPath: "../assets/songCover/nayan.jpg"},
  {songIndex: "3", songDuration:"2:35", songAlbum:"Samjhana Cha Baki (2022)",songName: "Samjhana Cha Baki", songArtist:"Bibash JK", filePath: "../assets/audio/samjhana-chaa-baki.mp3", coverPath: "../assets/songCover/samjhana-chaa-baki.jpg"},
  {songIndex: "4", songDuration:"4:20", songAlbum:"Sapana Ko Mayalu (2019)",songName: "Sapana Ko Mayalu", songArtist:"The Elements", filePath: "../assets/audio/sapana-ko-mayalu.mp3", coverPath: "../assets/songCover/sapana-ko-mayalu.jpg"},
]

let audioElement = new Audio(songs[0].filePath);
let songIndex=0;
let mainPlay = document.getElementById("start");
let main = document.getElementById("main-play")
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('playerProgressBar');
let songArt = Array.from(document.getElementsByClassName('songArt'));
let songTitle  = Array.from(document.getElementsByClassName('songTitle'));
let songArtist  = Array.from(document.getElementsByClassName('songArtist'));
let songAlbum = Array.from(document.getElementsByClassName('songAlbum'));
let songDate = Array.from(document.getElementsByClassName('songDate'));
let songDuration = Array.from(document.getElementsByClassName('songDuration'));
let playerName = document.getElementById('playerName');
let playerAuthor = document.getElementById('playerArtist');
let footerLogo = document.getElementById('footer-logo');
let songItemPlay = Array.from(document.getElementsByClassName("songitemplay"));
let previousItem = document.getElementById('prev');
let nextItem = document.getElementById('next');



//setting data in html
songs.forEach((element, i)=>{
  songArt[i].src = songs[i].coverPath
  songTitle[i].innerText = songs[i].songName
  songArtist[i].innerText = songs[i].songArtist
  songDuration[i].innerText = songs[i].songDuration;
  songAlbum[i].innerText = songs[i].songAlbum;
  songDate[i].innerText = "1 day ago"
})

const playerData = () =>{
  playerName.innerText = songs[songIndex].songName;
  playerAuthor.innerText =  songs[songIndex].songArtist;
  footerLogo.src = songs[songIndex].coverPath; 

  console.log(playerName);
  console.log(playerAuthor);
  console.log(footerLogo);
}


function play(element){
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      element.classList.remove('fa-play')
      element.classList.add('fa-pause')
  } else {
      audioElement.pause();
      element.classList.add('fa-play')
      element.classList.remove('fa-pause')
  }

  playerData();

  songItemPlay.forEach((element) =>{
    if(element.id == songIndex){
      element.classList.remove('fa-play')
      element.classList.add('fa-music')
    }
  })
}

const makeAllPlay = () =>{
  songItemPlay.forEach((element)=>{
    if(!element.classList.contains('fa-play')){
      element.classList.add('fa-play');
      element.classList.remove('fa-music');
    }
  })
}

const navigation = () =>{
  audioElement.src= songs[songIndex].filePath;
  makeAllPlay();
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');

  songItemPlay.forEach((element) =>{
    if(element.id == songIndex){
      element.classList.remove('fa-play')
      element.classList.add('fa-music')
    }
  })
  playerData()
}


masterPlay.addEventListener('click', ()=>{
  play(masterPlay);
})

mainPlay.addEventListener('click', () =>{
  play(main);
  if(masterPlay.classList.contains("fa-play")){
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  } else{
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
  }
})

audioElement.addEventListener('timeupdate', () =>{
  let progress = parseInt((audioElement.currentTime)/(audioElement.duration)*100)
  progressBar.value = progress;
});

progressBar.addEventListener('change', ()=>{
  audioElement.currentTime = progressBar.value * audioElement.duration/100;
})


songItemPlay.forEach((element ,i)=>{
  element.addEventListener('click', (e) =>{
    console.log(e.target);
    songIndex= e.target.id;
    makeAllPlay();
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-music');
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    playerData()
  })
})

progressBar.addEventListener('ended', ()=>{
  if(audioElement.currentTime == audioElement.duration){
    if(songIndex >= 4){
      songIndex = 0
    } else{
      songIndex++;
    }
  }  
  navigation();
})

previousItem.addEventListener('click', () =>{
  if(songIndex <= 0){
    songIndex = 4
  } else{
    songIndex--;
  }
  navigation();
})

nextItem.addEventListener('click', ()=>{
    if(songIndex >= 4){
      songIndex = 0
    } else{
      songIndex++;
    }
    navigation();
})


let volumeSlider = document.getElementById("volume");
let volumeIcon = document.getElementById("vol-icon");

volumeSlider.addEventListener('input', ()=>{
  if(volumeSlider.value <= 0 ){
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.add("fa-volume-mute");
  }else if (volumeSlider.value <= 0.7 && volumeSlider.value > 0.3 ){
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.remove("fa-volume-mute");
    volumeIcon.classList.add("fa-volume-low");
  } else if(volumeSlider.value <= 1 && volumeSlider.value >0.7){
    volumeIcon.classList.remove("fa-volume-low");
    volumeIcon.classList.remove("fa-volume-mute");
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.add("fa-volume-high");
  }
  audioElement.volume = volumeSlider.value;
})





function function2() {
  var dropdowncnt = document.getElementById('dropdown');
  dropdowncnt.classList.toggle("show");
}

window.onclick = function (event) {
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

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


let playlists=[
  { playlistName: "Beast Mode", playlistAuthor: "nefo", playlistCover: "" },
  { playlistName: "Nepali Aesthetics", playlistAuthor: "nefoli", playlistCover: "" },
  { playlistName: "Nepali Vibes", playlistAuthor: "siri", playlistCover: ""} ,
  { playlistName: "song to vibe on", playlistAuthor: "n_rani", playlistCover: "" },
  { playlistName: "songs to study", playlistAuthor: "sp4090_", playlistCover: "" },
  { playlistName: "nepali hit songs", playlistAuthor: "intrinix", playlistCover: "" },
  { playlistName: "vibeful nepali", playlistAuthor: "scttasla", playlistCover: "" },
  { playlistName: "mero playlist", playlistAuthor: "cwabc", playlistCover: "" }
]

var pName = Array.from(document.getElementsByClassName('tile-title'));
var pAuthor = Array.from(document.getElementsByClassName('tile-type'));
var pName2 = Array.from(document.getElementsByClassName('playlists-name'));

console.log(pName)
console.log(pAuthor)
console.log(pName2)

playlists.forEach((e, i) =>{
  pName[i].innerHTML = playlists[i].playlistName
  pAuthor[i].innerHTML = "Playlist • " + playlists[i].playlistAuthor
})

if(pName2.length != 0){
  playlists.forEach((e, i) =>{
    pName2[i].innerHTML = playlists[i].playlistName
  })
}

let songs = [
  { songName: "Khaseka Tara", songArtist: "Albatross", songAlbum: "Albatross Hits", songDuration: "5:01", filePath: "../assets/audio/khasekatara-albatross.mp3", coverPath: "../assets/img/songCover/khasekatara.jpg" },
  { songName: "Marijau", songArtist: "Bikki Gurung", songAlbum: "Bikki Gurung Hits", songDuration: "4:25", filePath: "../assets/audio/marijau-bikki.mp3", coverPath: "../assets/img/songCover/marijau.jpg" },
  { songName: "Manaka Kura", songArtist: "Purna Rai", songAlbum: "Purna Rai Hits", songDuration: "2:52", filePath: "../assets/audio/manakakura-purna.mp3", coverPath: "../assets/img/songCover/manakakura.jpg" },
  { songName: "Sapana Ko Mayalu", songArtist: "The Elements", songAlbum: "The Elements Hits", songDuration: "3:04", filePath: "../assets/audio/sapanakomayalu-elements.mp3", coverPath: "../assets/img/songCover/sapanakomayalu.jpg" },
  { songName: "Birsiney Hau Ki", songArtist: "The Elements", songAlbum: "The Elements Hits", songDuration: "3:06", filePath: "../assets/audio/birsiney-elements.mp3", coverPath: "../assets/img/songCover/birsineyhauki.jpg" },
  { songName: "Euta Pari", songArtist: "Crew On Destiny", songAlbum: "COD Hits", songDuration: "3:40", filePath: "../assets/audio/eutapari-cod.mp3", coverPath: "../assets/img/songCover/eutapari.jpg" },
  { songName: "Timi Bhane", songArtist: "Albatross", songAlbum: "Albatross Hits", songDuration: "5:28", filePath: "../assets/audio/timibhane-albatross.mp3", coverPath: "../assets/img/songCover/timibhane.jpg" },
  { songName: "Rail Garee", songArtist: "Bipul Chettri", songAlbum: "Bipul Chettri Hits", songDuration: "3:06", filePath: "../assets/audio/railgaree-bipul.mp3", coverPath: "../assets/img/songCover/railgaree.jpg" },
  { songName: "Sadhana", songArtist: "John Rai", songAlbum: "John Rai Hits", songDuration: "2:01", filePath: "../assets/audio/sadhana-johnrai.mp3", coverPath: "../assets/img/songCover/sadhana.jpg" },
  { songName: "Mero Prem", songArtist: "AXIX", songAlbum: "AXIX Hits", songDuration: "3:42", filePath: "../assets/audio/meroprem-axix.mp3", coverPath: "../assets/img/songCover/meroprem.jpg" },
  { songName: "Syndicate", songArtist: "Bipul Chettri", songAlbum: "Bipul Chettri Hits", songDuration: "4:44", filePath: "../assets/audio/syndicate-bipul.mp3", coverPath: "../assets/img/songCover/syndicate.jpg" },
  { songName: "Samarpan", songArtist: "Sabin Rai", songAlbum: "Sabin Rai Hits", songDuration: "3:46", filePath: "../assets/audio/samarpan-sabinrai.mp3", coverPath: "../assets/img/songCover/samarpan.jpg" },
  { songName: "Adhuro Prem", songArtist: "AXIX", songAlbum: "AXIX Hits", songDuration: "4:15", filePath: "../assets/audio/adhuroprem-axix.mp3", coverPath: "../assets/img/songCover/adhuroprem.jpg" },
  { songName: "Nachaheko Hoina", songArtist: "The Edge Band", songAlbum: "Edge Band Hits", songDuration: "5:27", filePath: "../assets/audio/nachahekohoina-theedge.mp3", coverPath: "../assets/img/songCover/nachahekohoina.jpg" },
  { songName: "Samjhana Chaa Baki", songArtist: "Bibash JK", songAlbum: "Bibash Hits", songDuration: "2:35", filePath: "../assets/audio/samjhana-bibash.mp3", coverPath: "../assets/img/songCover/samjhanachaabaki.jpg" },
  { songName: "Putali", songArtist: "The Elements", songAlbum: "The Elements Hits", songDuration: "4:30", filePath: "../assets/audio/putali-elements.mp3", coverPath: "../assets/img/songCover/putali.jpg" },
  { songName: "Aaudai Jadai", songArtist: "The Uglyz", songAlbum: "The Uglyz Hits", songDuration: "4:09", filePath: "../assets/audio/aaudaijadai-theuglyz.mp3", coverPath: "../assets/img/songCover/aaudaijadai.jpg" },
  { songName: "Mercedez Benz", songArtist: "Cobweb", songAlbum: "Cobweb Hits", songDuration: "5:04", filePath: "../assets/audio/mercedezbenz-cobweb.mp3", coverPath: "../assets/img/songCover/mercedezbenz.jpg" },
]

shuffle(songs)

var length = songs.length - 1;
document.getElementById('time').innerText = length + 1 + " songs"
let audioElement = new Audio(songs[0].filePath);
let songIndex = 0;
let mainPlay = document.getElementById("start");
let main = document.getElementById("main-play")
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('playerProgressBar');
let songArt = Array.from(document.getElementsByClassName('songArt'));
let songTitle = Array.from(document.getElementsByClassName('songTitle'));
let songArtist = Array.from(document.getElementsByClassName('songArtist'));
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
songs.forEach((element, i) => {
  songArt[i].src = songs[i].coverPath
  songTitle[i].innerText = songs[i].songName
  songArtist[i].innerText = songs[i].songArtist
  songDuration[i].innerText = songs[i].songDuration;
  songAlbum[i].innerText = songs[i].songAlbum;
  songDate[i].innerText = "1 day ago"
})

const playerData = () => {
  playerName.innerText = songs[songIndex].songName;
  playerAuthor.innerText = songs[songIndex].songArtist;
  footerLogo.src = songs[songIndex].coverPath;
}

function play(element) {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    element.classList.remove('fa-play')
    element.classList.add('fa-pause')
  } else {
    audioElement.pause();
    element.classList.add('fa-play')
    element.classList.remove('fa-pause')
  }

  playerData();

  songItemPlay.forEach((element) => {
    if (element.id == songIndex) {
      element.classList.remove('fa-play')
      element.classList.add('fa-music')
    }
  })
}

const makeAllPlay = () => {
  songItemPlay.forEach((element) => {
    if (!element.classList.contains('fa-play')) {
      element.classList.add('fa-play');
      element.classList.remove('fa-music');
    }
  })
}

const navigation = () => {
  audioElement.src = songs[songIndex].filePath;
  makeAllPlay();
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');

  songItemPlay.forEach((element) => {
    if (element.id == songIndex) {
      element.classList.remove('fa-play')
      element.classList.add('fa-music')
    }
  })
  playerData()
}


masterPlay.addEventListener('click', () => {
  play(masterPlay);
})

mainPlay.addEventListener('click', () => {
  play(main);
  if (masterPlay.classList.contains("fa-play")) {
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  } else {
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
  }
})

audioElement.addEventListener('timeupdate', () => {
  let progress = parseInt((audioElement.currentTime) / (audioElement.duration) * 100)
  progressBar.value = progress;
});

progressBar.addEventListener('change', () => {
  audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})


songItemPlay.forEach((element, i) => {
  element.addEventListener('click', (e) => {
    console.log(e.target);
    songIndex = e.target.id;
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

previousItem.addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = length
  } else {
    songIndex--;
  }
  navigation();
})

nextItem.addEventListener('click', () => {
  if (songIndex >= length) {
    songIndex = 0
  } else {
    songIndex++;
  }
  navigation();
})


let volumeSlider = document.getElementById("volume");
let volumeIcon = document.getElementById("vol-icon");

volumeSlider.addEventListener('change', () => {
  if (volumeSlider.value <= 0) {
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.add("fa-volume-mute");
  } else if (volumeSlider.value <= 0.7 && volumeSlider.value > 0.3) {
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.remove("fa-volume-mute");
    volumeIcon.classList.add("fa-volume-low");
  } else if (volumeSlider.value <= 1 && volumeSlider.value > 0.7) {
    volumeIcon.classList.remove("fa-volume-low");
    volumeIcon.classList.remove("fa-volume-mute");
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.add("fa-volume-high");
  }
  audioElement.volume = volumeSlider.value;
})
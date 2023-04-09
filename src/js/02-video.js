import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on("timeupdate", throttle(onPlay, 1000));

function onPlay({seconds}) {
    
    localStorage.setItem(LOCALSTORAGE_KEY, seconds)
    
    // console.log(seconds)
    // console.log(typeof seconds)
      
} 
console.log(localStorage.getItem(LOCALSTORAGE_KEY))
const time = localStorage.getItem(LOCALSTORAGE_KEY)

player.setCurrentTime(time)








 




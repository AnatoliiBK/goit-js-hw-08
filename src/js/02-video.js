import Player from '@vimeo/player';
import LodashTh from 'lodash.throttle';

const throttle = LodashTh('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on("timeupdate", onPlay);

function onPlay({seconds}) {
    
    localStorage.setItem(LOCALSTORAGE_KEY, seconds)
    
    // console.log(seconds)
    // console.log(typeof seconds)
      
} 
console.log(localStorage.getItem(LOCALSTORAGE_KEY))
const time = localStorage.getItem(LOCALSTORAGE_KEY)

player.setCurrentTime(time)



// .then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });






 




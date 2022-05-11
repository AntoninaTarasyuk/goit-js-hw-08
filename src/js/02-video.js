import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

function updateCurrentTime({seconds}) {
  localStorage.setItem(TIME_KEY, seconds);
  console.log(seconds);
};

function setCurrentTime() {
  const currentTime = localStorage.getItem(TIME_KEY);
  if (currentTime !== null) { player.setCurrentTime(currentTime) };
};

player.on('timeupdate', throttle(updateCurrentTime, 1000));
setCurrentTime();


// const currentTime = localStorage.getItem(TIME_KEY);
// currentTime ? player.setCurrentTime(currentTime) : null;

//  player.setCurrentTime(currentTime)
//    .then(function (seconds) { })
//    .catch(function (error) {
//      switch (error.name) { case 'Error': break; default: break; }
//    });
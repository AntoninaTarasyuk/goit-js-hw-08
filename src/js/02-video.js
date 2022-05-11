import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

function updatePlaybackTime({seconds}) {
  localStorage.setItem(TIME_KEY, seconds);
  console.log(seconds);
};

function onPageReload() {
  const currentTime = localStorage.getItem(TIME_KEY);
  if (currentTime !== null) { player.setCurrentTime(currentTime) };
};

player.on('timeupdate', throttle(updatePlaybackTime, 1000));
onPageReload();


// const currentTime = localStorage.getItem(TIME_KEY);
// currentTime ? player.setCurrentTime(currentTime) : null;

//  player.setCurrentTime(localStorage.getItem(TIME_KEY))
//    .then(function (seconds) { })
//    .catch(function (error) {
//      switch (error.name) { case 'Error': break; default: break; }
//    });
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const timeFunction = function(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data.seconds);
};

player.on('timeupdate', throttle(timeFunction, 1000));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) { })
  .catch(function (error) {
    switch (error.name) { case 'Error': break; default: break; }
  });
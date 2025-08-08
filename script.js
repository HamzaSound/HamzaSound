const playPauseBtn = document.getElementById('play-pause');
const audio = document.getElementById('audio');
const trackInfo = document.getElementById('track-info');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = '▶️';
    trackInfo.textContent = 'Lecture arrêtée';
  } else {
    audio.play();
    playPauseBtn.textContent = '⏸️';
    trackInfo.textContent = 'Lecture en cours : Sample Audio';
  }
  isPlaying = !isPlaying;
});

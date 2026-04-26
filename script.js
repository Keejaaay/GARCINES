const audioPlayer = document.getElementById('audio-player');
const albums = document.querySelectorAll('.album');
let currentAlbum = null;

albums.forEach(album => {
  const button = album.querySelector('.play-btn');
  const audioSrc = album.dataset.audio;

  button.addEventListener('click', () => {
    if (currentAlbum === album) {
      if (!audioPlayer.paused) {
        audioPlayer.pause();
        button.textContent = '▶';
      } else {
        audioPlayer.play();
        button.textContent = '⏸';
      }
    } else {
      if (currentAlbum) {
        currentAlbum.querySelector('.play-btn').textContent = '▶';
      }
      currentAlbum = album;
      audioPlayer.src = audioSrc;
      audioPlayer.play();
      button.textContent = '⏸';
    }
  });
});
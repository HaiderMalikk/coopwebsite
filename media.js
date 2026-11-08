const videoSource = document.querySelector('video source');
const videoStatus = document.querySelector('#video-status');

if (videoSource && videoStatus) {
  videoSource.addEventListener('error', () => {
    videoStatus.hidden = false;
  });
}
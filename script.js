function openWindow(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

function openSpotify() {
  window.open('https://open.spotify.com/playlist/1YZUuEKazJpGqbxfM36Gl2?si=EBfXRqDbS92zfHrBJWpuPg', '_blank');
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Make windows draggable
const windows = document.querySelectorAll('.window');
windows.forEach(win => {
  const header = win.querySelector('.window-header');
  header.onmousedown = function (e) {
    const offsetX = e.clientX - win.offsetLeft;
    const offsetY = e.clientY - win.offsetTop;

    function moveAt(e) {
      win.style.left = e.clientX - offsetX + 'px';
      win.style.top = e.clientY - offsetY + 'px';
    }

    function onMouseMove(e) {
      moveAt(e);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      document.onmouseup = null;
    };
  };
});

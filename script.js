function openWindow(id) {
  const el = document.getElementById(id);
  el.style.display = 'flex';
}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

function openSpotify() {
  window.open('https://open.spotify.com/playlist/your-playlist-id', '_blank');
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

function playClick() {
  const click = document.getElementById('clickSound');
  if (click) click.play().catch(() => {});
}

// Draggable windows
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

// Draggable computer
const computer = document.getElementById('computer');
let isDragging = false;
let offsetX, offsetY;
computer.onmousedown = function (e) {
  if (e.target.closest('.light-dark-toggle') || e.target.closest('.icon') || e.target.closest('.window')) return;
  isDragging = true;
  offsetX = e.clientX - computer.offsetLeft;
  offsetY = e.clientY - computer.offsetTop;
};
document.onmousemove = function (e) {
  if (!isDragging) return;
  computer.style.left = e.clientX - offsetX + 'px';
  computer.style.top = e.clientY - offsetY + 'px';
};
document.onmouseup = function () {
  isDragging = false;
};
function playClick() {
  const click = document.getElementById('clickSound');
  if (click) click.play().catch(() => {});
}

function playOpen() {
  const open = document.getElementById('openSound');
  if (open) open.play().catch(() => {});
}

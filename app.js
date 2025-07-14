// Geolocation API
const getLocationBtn = document.getElementById('getLocationBtn');
const locationDisplay = document.getElementById('locationDisplay');

getLocationBtn.addEventListener('click', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationDisplay.textContent = `Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`;
      },
      (error) => {
        locationDisplay.textContent = `Error: ${error.message}`;
      }
    );
  } else {
    locationDisplay.textContent = 'Geolocation is not supported by your browser.';
  }
});

// Canvas Drawing
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let lastX = 0, lastY = 0;
const colorPicker = document.getElementById('colorPicker');
const penSize = document.getElementById('penSize');

ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = penSize.value;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

colorPicker.addEventListener('input', () => {
  ctx.strokeStyle = colorPicker.value;
});
penSize.addEventListener('change', () => {
  ctx.lineWidth = penSize.value;
});

canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', (e) => {
  if (!drawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseleave', () => drawing = false);
document.getElementById('clearCanvasBtn').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Notes with localStorage
const noteInput = document.getElementById('noteInput');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const notesList = document.getElementById('notesList');

function saveNote(note) {
  const notes = JSON.parse(localStorage.getItem('travelNotes') || '[]');
  notes.push({ content: note, timestamp: new Date().toISOString() });
  localStorage.setItem('travelNotes', JSON.stringify(notes));
  displayNotes();
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem('travelNotes') || '[]');
  notesList.innerHTML = '';
  notes.slice().reverse().forEach(note => {
    const div = document.createElement('div');
    div.className = 'note-item';
    div.textContent = `${note.content} (Saved at: ${new Date(note.timestamp).toLocaleString()})`;
    notesList.appendChild(div);
  });
}

saveNoteBtn.addEventListener('click', () => {
  const note = noteInput.value.trim();
  if (note) {
    saveNote(note);
    noteInput.value = '';
  }
});

displayNotes(); 
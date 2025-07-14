# Travel Journal

A modern, interactive web app for logging your travels, drawing on a virtual map, and saving notes. Built with HTML, CSS, and vanilla JavaScript.

## Features

- **Geolocation API**: Log and display your current location with a single click.
- **Canvas API**: Draw or write on a virtual map with customizable color and pen size.
- **Notes (localStorage)**: Write, save, and view travel notes, which are persisted in your browser.

## APIs Used

### 1. Geolocation API
- **Purpose**: Retrieve the user's current latitude and longitude.
- **How it works**: Uses `navigator.geolocation.getCurrentPosition()` to prompt the user for permission and then fetches their location.
- **Reference**: [MDN Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

### 2. Canvas API
- **Purpose**: Provide a drawable area for users to sketch or write on a virtual map.
- **How it works**: Uses the `<canvas>` element and its 2D context (`CanvasRenderingContext2D`) to handle drawing, color, and pen size.
- **Reference**: [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

### 3. localStorage API
- **Purpose**: Persist user notes in the browser so they remain after refresh or closing the tab.
- **How it works**: Uses `localStorage.setItem` and `localStorage.getItem` to save and retrieve notes as JSON.
- **Reference**: [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Setup & Usage

1. **Clone or Download** this repository.
2. Place all files (`index.html`, `styles.css`, `app.js`, `README.md`) in the same directory.
3. Open `index.html` in your web browser.
4. Use the app to log your location, draw on the map, and save notes!

## Screenshots
https://rainbow-salamander-9c4144.netlify.app/


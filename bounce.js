//npx electron index.js

const { app, BrowserWindow, screen } = require('electron');

let win;
let x = 0;
let y = 0;
let dx = 5; // horizontal speed
let dy = 5; // vertical speed

function createWindow() {
    const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;

    win = new BrowserWindow({
        width: 300,
        height: 200,
        frame: false,
        transparent: false,
        alwaysOnTop: true,
    });

    win.loadURL(`data:text/html,
        <html>
          <body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background:black; color:lime; font-family: monospace; font-size: 24px;">
            woah, look at me!
          </body>
        </html>`);

    setInterval(() => {
        x += dx;
        y += dy;

        if (x + 300 >= screenWidth || x <= 0) dx = -dx;

        if (y + 200 >= screenHeight || y <= 0) dy = -dy;

        win.setBounds({ x, y, width: 300, height: 200 });
    }, 20); //set the speed in ms
}

app.whenReady().then(createWindow);

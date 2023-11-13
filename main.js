const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Create a transparent browser window.
    const win = new BrowserWindow({
      width: 1920,
      height: 1080,
      webPreferences: {
        nodeIntegration: true,
        // contextIsolation: false, // only if needed
        enableRemoteModule: true, // only if needed
      },
      opacity: 0, // Start with a fully transparent window
    //   frame: false, // Optional: for a frameless window
      backgroundColor: '#00000000' // Fully transparent background
    });
  
    // Load the loading.html
    win.loadFile('loading.html');
  
    // Fade in the window
    win.once('ready-to-show', () => {
      win.setOpacity(1); // Fade in by setting opacity to 1
    });
  
    // After a delay, load the main content (landing.html)
setTimeout(() => {
    win.loadFile('landing.html'); // Load the main content after the fade-out animation is presumed to have completed
  }, 10000); // Wait for 10 seconds in total - 5 seconds for showing loading screen and 5 seconds for the fade-out animation
  }

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

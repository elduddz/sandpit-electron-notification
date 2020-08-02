const { app, BrowserWindow, Notification } = require('electron')

const { fork } = require('child_process')
const ps = fork(`${__dirname}/server.js`)

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})
const { app, BrowserWindow, Notification } = require('electron')
const { path } = require('path')
const { fork } = require('child_process')
const ps = fork(`${__dirname}/server.js`)

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
      }
    })
  
    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
  
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
  }

app.whenReady().then(() => {
    createWindow()
})
const { app, BrowserWindow, Notification } = require('electron')
const { path } = require('path')
const { fork } = require('child_process')
const ps = fork(`${__dirname}/server.js`)

app.whenReady().then(() => {
})
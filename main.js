const { app, BrowserWindow } = require('electron')
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        icon: path.join(__dirname, 'img', 'icon.png'),
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow()
})
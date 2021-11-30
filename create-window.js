const {BrowserWindow, ipcMain} = require('electron');
const url = require('url');
const path = require('path');
const myEmitter = require('./event-emitter');


module.exports = class CreateWindow{
    constructor()
    {
        this.fileName = undefined;
        this.mainWindow = new BrowserWindow({
            title: 'collaborative text editor'
        });

        this.mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'mainWindow.html'),
            protocol: 'file:',
            slashes: true
        }));

        this.mainWindow.on('close', () => {
            this.mainWindow = null;
        });
    }

    writeData(fileName, data)
    {
        this.fileName = fileName;
        this.mainWindow.webContents.send('dataReady', data);
        this.mainWindow.setTitle(`${this.mainWindow.getTitle()} - ${fileName}`);
    }

    getContent()
    {
        ipcMain.once('sentData', (event, text) =>{
            myEmitter.emit('saveData', this.fileName, text);
        });
        this.mainWindow.webContents.send('getData', null);
        
    }
};
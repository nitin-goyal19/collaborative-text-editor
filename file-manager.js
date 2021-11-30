const fs = require('fs');
const {dialog} = require('electron');
const myEmitter = require('./event-emitter');

function openFile(mainWindow)
{
    dialog.showOpenDialog((fileName) => {
        if(fileName === undefined){
            console.log("No file selected");
            return;
        }

        fs.readFile(fileName[0], 'utf-8', (err, data) => {
            if(err){
                alert(`An error ocurred: ${err.message}`);
                return;
            }

            mainWindow.writeData(fileName[0], data);
        });
    });
}

function saveFile(mainWindow)
{
    mainWindow.getContent();
    myEmitter.once('saveData', (fileName, data) => {
        saveFileUtil(fileName, data);
    });
    
}

function saveFileUtil(fileName, data)
{
    fs.writeFile(fileName, data, (err) => {
        if(err){
          console.log(`error: ${err}`);
          return;
        }
    });
}

module.exports = {openFile, saveFile};
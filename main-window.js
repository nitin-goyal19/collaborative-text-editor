const {ipcRenderer} = require('electron');

const textEdit = document.getElementById('text-editable');

ipcRenderer.on('dataReady', (event, arg) => {
    textEdit.value = `${arg}`;
});

ipcRenderer.on('getData',(event, arg) =>{
    let data = textEdit.value;
    event.sender.send('sentData', data);
});

const {app, Menu} = require('electron');
const CreateWindow = require('./create-window');
const fileManager = require('./file-manager');

let mainWindow;

app.on('ready', () => {
    mainWindow = new CreateWindow();

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});


const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New'
            },
            {
                label: 'Open',
                accelerator: 'Ctrl+O',
                click()
                {
                    fileManager.openFile(mainWindow);
                }
            },
            {
                label: 'Save',
                accelerator: 'Ctrl+S',
                click()
                {
                    fileManager.saveFile(mainWindow);
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'Ctrl+Q',
                click()
                {
                    app.quit();
                }
            }
        ]
    },

    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            }
        ]
    }
]


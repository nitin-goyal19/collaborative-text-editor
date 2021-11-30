const {app} = require('electron');
console.log(app);
module.exports = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Open'
            },
            {
                label: 'New'
            },
            {
                label: 'Quit',
                click(){
                    app.quit();
                }
            }
        ]
    }
]
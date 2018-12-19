const {app , BrowserWindow , Menu , MenuItem} = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow(){
  win = new BrowserWindow( {
    frame: false,
    transparent : true ,
    alwaysOnTop:true,
    width : 400 ,
    height: 300
  });

  win.loadURL(
    url.format(
    { pathname : path.join(__dirname , 'index.html'),
      protocol: 'file',
      slashes: true
    }
    )
  );

  win.on('closed' , () => {
    win = null;
  });

}

app.on('ready' , createWindow);
app.on('window-all-closed' , () => {
  if(process.platform !== 'darwin')
    app.quit();
});
app.on('activate' , () => {
  if(win == null )
    createWindow();
});

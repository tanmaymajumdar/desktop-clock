onclock = () => {
var currentTime, h, m , s;

currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30

var d = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

  h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
  m = 6 * d.getMinutes();
  s = 6 * d.getSeconds();

  //move hands
  setAttr('hours', h);
  setAttr('minutes', m);
  setAttr('seconds', s);
  //setAttr('s-tail', s+180);

  setTimeout(onclock , 1000);
}

function setAttr(id , value) {
  var v = 'rotate('+value+', 70 , 70 )';
  document.getElementById(id).setAttribute('transform' , v);
}

window.onload = onclock;

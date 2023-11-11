imgs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];

function changeBackground() {
  var i = Math.floor(Math.random() * imgs.length);
  document.body.style.backgroundImage = "url(" + imgs[i] + ")";
}

document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.zIndex = "-1";
changeBackground();

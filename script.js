const bulbImage = document.querySelector('#bulbImage')

function turnLightOn() {
  bulbImage.src = './assets/images/pic_bulbon.gif'
}

function turnLightOff() {
  bulbImage.src = './assets/images/pic_bulboff.gif'
}
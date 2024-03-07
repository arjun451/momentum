const images = ["0.jpeg","1.jpeg","2.jpeg"]

const selectedImage = images[Math.floor(Math.random()*images.length)]
console.log(selectedImage)

const bgImg = document.createElement('img')
bgImg.src = `image/${selectedImage}`
console.log(bgImg)

document.body.appendChild(bgImg)
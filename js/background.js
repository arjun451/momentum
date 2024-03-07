const images = ["0.jpeg","1.jpeg","2.jpeg"]

const selectedImage = images[Math.floor(Math.random()*images.length)]
 

const bgImg = document.createElement('img')
bgImg.classList.add("image")
bgImg.src = `image/${selectedImage}`
document.body.appendChild(bgImg)
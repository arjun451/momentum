const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();
 clock.innerText = `${date.getHours()<10?`0${date.getHours()}`:date.getHours()}:${date.getMinutes()<10?`0${date.getMinutes()}`:date.getMinutes()}:${date.getSeconds()<10?`0${date.getSeconds()}`:date.getSeconds()}`
}

getClock();

setInterval(getClock,1000)

const API_KEY = "d26ad7fd7b7a8979d5076523c70c7a3f"
function onGeoSuccess(position){
    const {latitude,longitude} = position.coords
    const uri = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    console.log(uri)

}

function onGeoError(){
alert("Can't find you. No weather for you!")
}


navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError)
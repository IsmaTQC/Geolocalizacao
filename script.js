const latitude  = document.getElementById("lati")
const longitude = document.getElementById("long")

if(navigator.geolocation){//se for verdadeiro
    navigator.geolocation.getCurrentPosition(localizacao,errolocalizacao)
}else {
    console.log("Geolocalização não encontrado")
}

function localizacao(pos){
    latitude.innerHTML  = `Latitude: ${pos.coords.latitude}`
    longitude.innerHTML = `Longitude: ${pos.coords.longitude}`
}

function errolocalizacao(){
    console.log("Erro de localização")
}
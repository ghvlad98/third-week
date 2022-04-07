function mostraPosizione(posizione) {
    console.log("Latitudine: " + posizione.coords.latitude);
    console.log("Longitudine: " + posizione.coords.longitude);
    console.log("Speed: " + posizione.coords.speed);

    document.getElementById('alt').innerHTML = 'Latitude: ' + posizione.coords.latitude;
    document.getElementById('lon').innerHTML = 'Longitude: ' + posizione.coords.longitude;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostraPosizione),
        null, {
            enableHighAccuracy: true,
            maximumAge: 60000,
            timeout: 1000
        }
}
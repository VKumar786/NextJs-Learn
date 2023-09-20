console.warn('location file loaded');
let x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.warn('latitude :: ' + position.coords.latitude);
    console.warn('longitude :: ' + position.coords.longitude);
}

getLocation()
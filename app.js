let loc = document.getElementById("location");
let tempValue = document.getElementById("temp-value");

window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=38cb0761d0ba0bb3e818b384f2a71601`;
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    const { name } = data;
                    const { temp } = data.main;
                    loc.textContent = name;
                    tempValue.textContent = Math.round(temp - 273);


                    console.log(data);

                })
        })
    }


})
function Samay() {
    var shape = document.getElementById("geometry").value;
    var Swaadd = document.getElementById("yum").value;
    var Texture = document.getElementById("styl").value;
    var garam = document.getElementById("temp-value").textContent;
    var rateTemp;
    var rateFlav;
    var rateStyle;
    var Meltrate;
    var Amountt = document.getElementById("wajan").value;
    alert(shape);
    alert(Swaadd);
    alert(Texture);
    if (shape = "cones") {
        rateTemp = 0.1;
        Meltrate = 3;
    }
    else if (shape = "sundae") {
        rateTemp = 0.3;
        Meltrate = 5;
    }

    if (Swaadd = "Chocolate") {
        rateFlav = 3;
    }
    else if (Swaadd = "Raspberry") {
        rateFlav = 1;
    }

    if (Texture = "Hard") {
        rateStyle = -1;
    }
    else if (Texture = "Lactose-Free") {
        rateStyle = 3;
    }


    alert(rateTemp);
    alert(rateFlav);
    alert(rateStyle);
    alert(Amountt);
    alert(garam);
    Meltrate = Meltrate + (rateTemp * garam) + rateFlav + rateStyle;
    alert(Meltrate);
    var ghadi = Math.round(Amountt / Meltrate);
    document.getElementById("waqt").textContent = ghadi;
    alert(ghadi);
}


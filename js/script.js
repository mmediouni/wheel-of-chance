// 0    29
// 31   93
// 95 153
// 155 212
// 214 269
// 271 328
// 330 387

function paly(min, max) {
    var degrees = Math.floor(Math.random() * (max - min + 1)) + min;
    var arrow = document.getElementById("arrow");
    var msg = document.getElementById("message");
    var counter = 5100;

    if (degrees >= 0 && degrees <= 29) {
        arrow.style.transform = "rotate(" + degrees + "deg)";
        setTimeout(() => {
            msg.innerHTML = "Vous avez gangé 10 DT";
            msg.style.backgroundImage = "url('img/winner-particles-2.gif')";
        }, counter);

    } else if (degrees >= 31 && degrees <= 93) {

        arrow.style.transform = "rotate(" + degrees + "deg)";
        setTimeout(() => {
            msg.innerHTML = "yellow";
            msg.style.backgroundImage = "";
        }, counter);

    } else if (degrees >= 95 && degrees <= 153) {
        setTimeout(() => { msg.innerHTML = "green"; }, counter);
        arrow.style.transform = "rotate(" + degrees + "deg)";
    } else if (degrees >= 155 && degrees <= 212) {
        arrow.style.transform = "rotate(" + degrees +
            "deg)";
        setTimeout(() => {
            msg.innerHTML = "red";
            msg.style.backgroundImage = "";
        }, counter);


    } else if (degrees >= 214 && degrees <= 269) {
        arrow.style.transform = "rotate(" + degrees + "deg)";
        setTimeout(() => {
            msg.innerHTML = "fluo";
            msg.style.backgroundImage = "";
        }, counter);


    } else if (degrees >= 271 && degrees <= 328) {
        arrow.style.transform = "rotate(" + degrees + "deg)";
        setTimeout(() => {
            msg.innerHTML = "rose";
            msg.style.backgroundImage = "";
        }, counter);


    }
    else if (degrees >= 330 && degrees <= 387) {
        arrow.style.transform = "rotate(" + degrees + "deg)";
        setTimeout(() => {
            msg.innerHTML = "Vous avez gangé 10 DT";
            msg.style.backgroundImage = "url('img/winner-particles.gif')";

        }, counter);


    }
    else {
        arrow.style.transform = "rotate(" + degrees + "deg)";
        setTimeout(() => {
            msg.innerHTML = "repeat";
            msg.style.backgroundImage = "";
        }, counter);

    }
}

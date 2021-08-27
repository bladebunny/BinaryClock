const onClass = "on";
const offClass = "off";

const second_lights = [
    ["", "s12", "s11", "s10"],
    ["s03", "s02", "s01", "s00"]
];

const minute_lights = [
    ["", "m12", "m11", "m10"],
    ["m03", "m02", "m01", "m00"]
];

const hour_lights = [
    ["", "", "h11", "h10"],
    ["h03", "h02", "h01", "h00"]
];


function doDate()
{
    var str = "";

    const now = new Date();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Get parts
    let hourHi = Math.floor(hours / 10);
    let hourLo = hours % 10;

    let minHi = Math.floor(minutes / 10);
    let minLo = minutes % 10;

    let secHi = Math.floor(seconds / 10);
    let secLo = seconds % 10;

    let secHiBits = toBinary(secHi);
    let secLoBits = toBinary(secLo);

    let minHiBits = toBinary(minHi);
    let minLoBits = toBinary(minLo);

    let hrHiBits = toBinary(hourHi);
    let hrLoBits = toBinary(hourLo);

    var hourString = "" + hours;
    if (hourString.length === 1) {
        hourString = "0" + hourString;
    }

    var minString = "" + minutes;
    if (minString.length === 1) {
        minString = "0" + minString;
    }

    var secString = "" + seconds;
    if (secString.length === 1) {
        secString = "0" + secString;
    }

    str += hourString + ":" + minString + ":" + secString;
    let log = document.getElementById("log");
    log.innerText = str;

    toggleClockBits(secHiBits, secLoBits, second_lights);
    toggleClockBits(minHiBits, minLoBits, minute_lights);
    toggleClockBits(hrHiBits, hrLoBits, hour_lights);
}

function toggleClockBits(hiBits, lowBits, elementIDs) {
    toggleBits(lowBits, elementIDs[1]);
    toggleBits(hiBits, elementIDs[0]);
}

function toggleBits(bits, elementIDs) {

    for(let index = 0; index < bits.length; index++) {
        let id = elementIDs[index];
        if(id === "") {
            continue;
        }

        let light = document.getElementById(id);
        if (bits[index] === "1") {
            turnOn(light);
        } else {
            turnOff(light)
        }
    }
}

function turnOn(element) {
    element.classList.remove(offClass);
    element.classList.add(onClass);
}

function turnOff(element) {
    element.classList.remove(onClass);
    element.classList.add(offClass);
}

function toBinary(base10Num) {

    var out = "";
    var raised = 1;

    while(base10Num >= raised) {
        if ((raised & base10Num) > 0) {
            out = "1" + out;
        } else {
            out = "0" + out;
        }

        raised *= 2;
    }

    var pad = 4 - out.length
    while(pad > 0) {
        out = "0" + out;
        pad--;
    }

    return out;
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(doDate, 850);
});
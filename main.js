let isOn = false;

const lightBulb = document.querySelector('.light-bulb-off');

const btn = document.querySelector('.btn');

btn.addEventListener('click', toggleLight);

function toggleLight() {
    isOn = !isOn;
    if(isOn){
        lightBulb.src = '/images/lightOn.png';
    } else {
        lightBulb.src = '/images/lightOff.png';
    }
}

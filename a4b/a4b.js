var context = new AudioContext(),

    drumpads = document.getElementsByClassName("drumpad"),

    soundBuffers = [];



for (let i = 0; i < drumpads.length; i++) {

    soundBuffers[i] = new Audio("sounds/sound" + (i+1) + ".wav");

    var soundNode = context.createMediaElementSource(soundBuffers[i]);

    var gainNode = context.createGain();



    gainNode.gain.value = 0.8;



    soundNode.connect(gainNode);

    gainNode.connect(context.destination);



    drumpads[i].addEventListener("mousedown", function (e) {playSound(i)});

}



function playSound(i) {

    soundBuffers[i].play();

}
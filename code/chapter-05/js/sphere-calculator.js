function calculate() {
    'use strict';
    var volume;
    var radius = document.getElementById('radius'); // get the radius element

    // make sure that radius is a positive number (get absolute value)
    //radius = Math.abs(radius);

    if (radius && (radius.value > 0) ) {
        // caluclate the volume
        volume = (4/3) * Math.PI * Math.pow(radius.value, 3);

        // format the volume
        volume = volume.toFixed(4);

        // display the volume
        document.getElementById('volume').value = volume;
    }

    return false; // to prevent form submission

}

function init() {
    'use strict';
    // add an event listener to the form's submission
    document.getElementById('theForm').onsubmit = calculate;
}

window.onload = init;

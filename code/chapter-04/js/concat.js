function concat() {
    'use strict';
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var formattedName = lastName + ", " + firstName;
    document.getElementById('formatted-name').value = formattedName;
    console.log(formattedName);
    return false;
}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = concat;
}

window.onload = init;



// the process function will be called when the form is submitted
function process() {
    'use strict';
    var okay = true;

    // get a reference to the first two form elements
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');

    // validate the email address
    if (!email || !email.value
        || (email.value.length<6)
        || (email.value.indexOf('@') == -1)) {
        okay = false;
        alert('please enter a valid email address');

    }

  // validate the comments
    if (!comments || ! comments.value || (comments.value.indexOf('<') != -1)) {
        okay = false;
        alert("please enter your comments without any html");
    }
    return okay;

}

function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
}

window.onload = init;

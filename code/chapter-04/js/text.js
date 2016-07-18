function limitText() {
    'use strict';

    // used to store the edited version of the the user-supplied text
    var limitedText;
    var originalText = document.getElementById('comments').value;

    // find the last space before the 100th character
    var lastSpace = originalText.lastIndexOf(' ', 100); // search will begin at the 100th character rather than at the very end

    // trim the text to the lastSpace
    limitedText = originalText.slice(0, lastSpace);
    console.log(limitedText);

    // show the user the number of characters submitted
   document.getElementById('count').value = originalText.length;

    // display the limitedText

    document.getElementById('result').value = limitedText;

    return false;
}

function init() {
    'use strict';
    // add an event listener to the form's submission
    console.log("init called")
    document.getElementById('theForm').onsubmit = limitText;
}

window.onload = init;

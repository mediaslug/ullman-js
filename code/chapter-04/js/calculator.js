function calculate() {
    'use strict';
    var total;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;

    total = quantity * price;
    tax = tax/100;
    tax++; // add 1 to tax to simplify calculation
    total = total * tax;
    total = total - discount;

    // format the total
    total = total.toFixed(2);
    document.getElementById('total').value = total;

    return false; // to prevent form submission

}

function init() {
    'use strict';
    // add an event listener to the form's submission
    document.getElementById('theForm').onsubmit = calculate;
}

window.onload = init;
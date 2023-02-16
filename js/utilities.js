

// Case Quantity modify 
function updateCaseQuantity(isIncrease) {
    const caseQuantityField = document.getElementById('case-quantity-field');
    const caseQuantityString = caseQuantityField.value;
    const previousCaseQuantity = parseInt(caseQuantityString);

    let newCaseQuantity;
    if (isIncrease == true) {
        newCaseQuantity = previousCaseQuantity + 1;
    }
    else {
        newCaseQuantity = previousCaseQuantity - 1;
    }
    caseQuantityField.value = newCaseQuantity;

    return newCaseQuantity;
}





// Phone Quantity modify 
function updatePhoneQuantity(isIncrease) {
    const PhoneQuantityField = document.getElementById('phone-quantity-field');
    const PhoneQuantityString = PhoneQuantityField.value;
    const previousPhoneQuantity = parseInt(PhoneQuantityString);

    let newPhoneQuantity;
    if (isIncrease == true) {
        newPhoneQuantity = previousPhoneQuantity + 1;
    }
    else {
        newPhoneQuantity = previousPhoneQuantity - 1;
    }
    PhoneQuantityField.value = newPhoneQuantity;

    return newPhoneQuantity;
}





// case total price 
function totalCasePrice(newCaseQuantity) {
    const caseTotalPrice = newCaseQuantity * 59;

    const totalCasePrice = document.getElementById('total-case-price');
    totalCasePrice.innerText = caseTotalPrice;
}







// phone total price 
function totalPhonePrice(newPhoneQuantity) {
    const phoneTotalPrice = newPhoneQuantity * 1219;

    const totalPhonePrice = document.getElementById('total-phone-price');
    totalPhonePrice.innerText = phoneTotalPrice;
}







// subtotal price  for case
function subtotalCasePrice(isIncreased) {
    const subtotalPrice = document.getElementById('subtotal');
    const subtotalString = subtotalPrice.innerText;
    const PreviousSubtotal = parseFloat(subtotalString);

    let subtotal
    if (isIncreased == true) {
        subtotal = PreviousSubtotal + 59;
    }
    else {
        subtotal = PreviousSubtotal - 59;

    }

    subtotalPrice.innerText = subtotal;
}





// subtotal price  for phone 

function subtotalPhonePrice(isIncreased) {
    const subtotalPrice = document.getElementById('subtotal');
    const subtotalString = subtotalPrice.innerText;
    const PreviousSubtotal = parseFloat(subtotalString);

    let subtotal
    if (isIncreased == true) {
        subtotal = PreviousSubtotal + 1219;
    }
    else {
        subtotal = PreviousSubtotal - 1219;
    }

    subtotalPrice.innerText = subtotal;
}
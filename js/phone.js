

// plus button  

document.getElementById('phone-plus').addEventListener('click', function () {

    const newPhoneQuantity = updatePhoneQuantity(true);

    totalPhonePrice(newPhoneQuantity);

    subtotalPhonePrice(true);

})





// Minus button  

document.getElementById('phone-minus').addEventListener('click', function () {

    const newPhoneQuantity = updatePhoneQuantity(false);

    totalPhonePrice(newPhoneQuantity);

    subtotalPhonePrice(false);
})
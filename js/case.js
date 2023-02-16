

// plus button  

document.getElementById('case-plus').addEventListener('click', function () {

    const newCaseQuantity = updateCaseQuantity(true);

    totalCasePrice(newCaseQuantity);

    subtotalCasePrice(true);

})





// Minus button  

document.getElementById('case-minus').addEventListener('click', function () {

    const newCaseQuantity = updateCaseQuantity(false);

    totalCasePrice(newCaseQuantity);

    subtotalCasePrice(false);
})
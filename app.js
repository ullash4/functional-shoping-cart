// Make common function 
function updateInput(product, isIncreasing, price, productPrice){
    const caseInput = document.getElementById(product);
    let caseInputNumber = parseInt(caseInput.value);
    if(isIncreasing == true){
        caseInputNumber = caseInputNumber+1;
    }
    else{
        if(caseInputNumber > 0){
            caseInputNumber = caseInputNumber-1;
        }
    }
    caseInput.value = caseInputNumber;
    const casePrice = document.getElementById(price);
    const caseInnerPrice = casePrice.innerText;
    const caseAllPrice = caseInputNumber * productPrice;
    casePrice.innerText = caseAllPrice;
    calculateTotal();
}
// Make common function for call subtotal,tax,totalPrice Input 
function commonCall(product){
    const inputTotal = document.getElementById(product);
    const inputTotalValue = inputTotal.value;
    return inputTotalValue;
}
// Calculate total 
function calculateTotal(){
   const phnPrice = commonCall('phn-input')*1219;
   const casePrice = commonCall('case-input')*59;
   const subtotal = phnPrice + casePrice;
   const taxAmount = subtotal / 50;
   const totalPrice = subtotal + taxAmount;
//    Update html 
    document.getElementById("sub-total").innerText = subtotal;
    document.getElementById("tax-amount").innerText = taxAmount;
    document.getElementById("total-price").innerText = totalPrice;
}
// Phone button functional 
document.getElementById('phn-plus-btn').addEventListener('click', function (){
    updateInput('phn-input', true, "phn-price", 1219);
})
document.getElementById('phn-minus-btn').addEventListener('click', function (){
    updateInput('phn-input', false, "phn-price", 1219);
})
// Case button functional 
document.getElementById('case-plus-btn').addEventListener('click', function (){
    updateInput('case-input', true, 'case-price', 59);
})
document.getElementById('case-minus-btn').addEventListener('click', function (){
    updateInput('case-input', false, 'case-price', 59);
})



function logBodyDimensions(){
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    localStorage.setItem('height',height);
    localStorage.setItem('weight',weight);
}

function logWater() {
    var amountInput = document.getElementById('amount');
    var amount = parseInt(amountInput.value);
    localStorage.setItem( amount); 
}

function setReminder() {
    var intervalInput = document.getElementById('interval');
    var interval = parseInt(intervalInput.value);
     localStorage.setItem( interval);

}
function convertKilometersToMiles() {
    let kilometersInput = document.getElementById('kilometersInput').value;
    let miles = kilometersInput / 1.60934;
    let result = document.getElementById('result');

if (isNaN(kilometersInput) || kilometersInput === '') {
    result.style.color = "red";
    result.innerHTML = `<h5>Please enter a valid number for kilometers.</h5>`;
    } else {
    result.innerHTML = `<h5>${kilometersInput} kilometers is equal to ${miles.toFixed(2)} miles.</h5>`;
    }
}
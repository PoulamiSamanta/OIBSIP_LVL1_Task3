function convertTemp() {
    const temp = parseFloat(document.getElementById('tempInput').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const output = document.getElementById('output');

    if (isNaN(temp)) {
        output.textContent = "Please enter a valid number!";
        return;
    }

    let result;
    switch (unit) {
        case 'celsius':
            result = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(temp + 273.15).toFixed(2)}K`;
            break;
        case 'fahrenheit':
            result = `Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C, Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case 'kelvin':
            result = `Celsius: ${(temp - 273.15).toFixed(2)}°C, Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
    }

    output.textContent = `Converted Temperature: ${result}`;
}
function clearFields() {
    document.getElementById('tempInput').value = '';
    document.getElementById('output').textContent = '';
}
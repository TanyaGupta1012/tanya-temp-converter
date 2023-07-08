const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (celsi) => {
        let fahrenheit = ((celsi * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fahren) => {
        let celsius = ((fahren - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'celsi') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}

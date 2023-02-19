/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtnEl = document.getElementById("convertBtn")
const resultNumberEl = document.getElementById("result-number")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

resultNumberEl.addEventListener("input", function() {
    if (!isNaN(parseFloat(resultNumberEl.value))) {
        convertBtnEl.disabled = false;
    }
});

convertBtnEl.addEventListener("click", function() {
    let baseValue = parseFloat(resultNumberEl.value)
    if (isNaN(baseValue)) {
        alert("Please enter a valid number.")
        convertBtnEl.disabled = true;
        return
    }
    const lengthResult = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet`
    const volumeResult = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons`
    const massResult = `${baseValue} kilos = ${(baseValue * kilogramToPound).toFixed(2)} pounds` 
    
    lengthEl.textContent = lengthResult
    volumeEl.textContent = volumeResult
    massEl.textContent = massResult
})
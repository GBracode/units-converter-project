let convertBtn = document.getElementById("convert-btn")
let inputGet = document.getElementById("input-get")
let convOne = document.getElementById("conv-one")
let convTwo = document.getElementById("conv-two")
let convThree = document.getElementById("conv-three")
const unit1 = 3.280839895   // meter2feet
const unit2 = 0.3048        // feet2meter
const unit3 = 0.2641720524  // liter2gal
const unit4 = 3.785411784   // gal2liter
const unit5 = 2.2046226218  // kg2lbs
const unit6 = 0.45359237    // lbs2kg

convertBtn.addEventListener("click", function() {
    if (isNaN(inputGet.value))    
    {
        alert("Must input numbers");
        return false;
    }
    meter2feet()
    liters2gals()
    kilos2pounds()    
})

function meter2feet() {
    let x = (inputGet.value * unit1).toFixed(3)
    let y = (inputGet.value * unit2).toFixed(3)
    convOne.textContent = `${inputGet.value} meters = ${x} fts | ${inputGet.value} feet = ${y} meters`
}

function liters2gals() {
    let x = (inputGet.value * unit3).toFixed(3)
    let y = (inputGet.value * unit4).toFixed(3)
    convTwo.textContent = `${inputGet.value} liters = ${x} gallons | ${inputGet.value} gallons = ${y} liters`
}

function kilos2pounds() {
    let x = (inputGet.value * unit5).toFixed(3)
    let y = (inputGet.value * unit6).toFixed(3)
    convThree.textContent = `${inputGet.value} kilos = ${x} pounds | ${inputGet.value} pounds = ${y} kilos`
}

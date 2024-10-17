let num1 = 12
let num2 = 6
function add() {
    let result = num1 + num2
    document.getElementById("res-el").innerHTML = "Result: " + result
}
function subtract() {
    result = num1 - num2
    document.getElementById("res-el").innerHTML = "Result: " + result
}
function divide() {
    result = num1 / num2
    document.getElementById("res-el").innerHTML = "Result: " + result
}
function multiply() {
    result = num1 * num2
    document.getElementById("res-el").innerHTML = "Result: " + result
}
document.getElementById("num1-el").innerHTML = num1
document.getElementById("num2-el").innerHTML = num2


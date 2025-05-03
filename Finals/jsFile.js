
function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById("result").textContent = sum;
}

function Subtract () {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var difference = num1 - num2;
    document.getElementById("result").textContent = difference;
}

function Multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var Multi = num1 * num2;
    document.getElementById("result").textContent = Multi;
}
function Divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var quo = num1 / num2;
    document.getElementById("result").textContent = quo;}
   


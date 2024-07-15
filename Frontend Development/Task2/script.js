let angleMode = 'DEG'; // Default angle mode

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendValue(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.innerText;
    try {
        expression = expression
            .replace(/√/g, 'Math.sqrt')
            .replace(/log10/g, 'Math.log10')
            .replace(/sin\(/g, angleMode === 'DEG' ? 'Math.sin(degToRad(' : 'Math.sin(')
            .replace(/cos\(/g, angleMode === 'DEG' ? 'Math.cos(degToRad(' : 'Math.cos(')
            .replace(/tan\(/g, angleMode === 'DEG' ? 'Math.tan(degToRad(' : 'Math.tan(');
        display.innerText = eval(expression.replace(/([0-9])\(/g, '$1*('));
    } catch {
        display.innerText = 'Error';
    }
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function toggleAngleMode() {
    angleMode = angleMode === 'DEG' ? 'RAD' : 'DEG';
    alert('Angle mode: ' + angleMode);
}

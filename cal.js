let x = document.getElementById('screen');

function solve(val) {   
    x.value += val;
}

function result() {
    let num1 = document.getElementById('screen').value;
    let num2 = eval(num1);
    document.getElementById('screen').value = num2;
}

function deletelastentry() {
    let ele = document.getElementById('screen');
    ele.value = ele.value.slice(0, -1);
}



let sum = '';

function addToSum(operator){
    sum = sum + operator;
    return document.getElementById("myOutput").innerText = sum;
}

function evaluateSum(){
    document.getElementById("history").innerText = sum;
    sum = eval(sum);
    document.getElementById("myOutput").innerText = sum;
}

function clearSum(){
    sum = '';
    document.getElementById("myOutput").innerText = sum;
    document.getElementById("history").innerText = sum;
}

function deleteNum(){
    sum = sum.slice(0,-1);
    document.getElementById("myOutput").innerText = sum;
}


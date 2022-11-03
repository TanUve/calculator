function addNumber(number) {
    document.getElementById("resultado").value += number;
}
function addPlus() {
    let plus = document.getElementById("plus").value;
    document.getElementById("resultado").value += plus;
}

function addMinus() {
    let minus = document.getElementById("minus").value;
    document.getElementById("resultado").value += minus;
}
function addMulti() {
    let multi = document.getElementById("x").value;
    document.getElementById("resultado").value += multi;
}
function addDivide() {
    let divide = document.getElementById("divide").value;
    document.getElementById("resultado").value += divide;
}
function addEqual() {
    let eq = document.getElementById("resultado").value;
    let total;
    let num1;
    let num2;
    if (eq.includes("+")) {
        let pos = eq.indexOf("+");
        num1 = parseInt(eq.slice(0, pos));
        num2 = parseInt(eq.slice(pos + 1, eq.length));
        total = num1 + num2;
        document.getElementById("resultado").value = total;
    }
    if (eq.includes("-")) {
        let pos = eq.indexOf("-");//ubicamos la posición del operando
        num1 = parseInt(eq.slice(0, pos));//le indicamos que el primer número lo tiene que coger desde la posicióon 0 hasta la posición del operador
        num2 = parseInt(eq.slice(pos + 1, eq.length));//le indicamos que el segundo número lo tiene que coger desde una posición después del operador hasta el final
        total = num1 - num2;
        document.getElementById("resultado").value = total;
    }
    if (eq.includes("x")) {
        let pos = eq.indexOf("x");
        num1 = parseInt(eq.slice(0, pos));
        num2 = parseInt(eq.slice(pos + 1, eq.length));
        total = num1 * num2;
        document.getElementById("resultado").value = total;
    }
    if (eq.includes("/")) {
        let pos = eq.indexOf("/");
        num1 = parseInt(eq.slice(0, pos));
        num2 = parseInt(eq.slice(pos + 1, eq.length));
        total = num1 / num2;
        document.getElementById("resultado").value = total;
    }

}
function addReset() {
    let reset = document.getElementById("reset").value;
    document.getElementById("resultado").value = reset;

}

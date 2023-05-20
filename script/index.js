let screen = document.getElementById('display');

function display(num) {
    screen.value += num
}

function evaluateSum() {
    screen.value = eval(screen.value)
}

function clearSum() {
    screen.value = "";
}

function del() {
    screen.value = screen.value.slice(0, -1)
}

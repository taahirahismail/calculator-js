let screen = document.getElementById('display');

function display(num) {
    screen.value += num
}

function calc() {
    screen.value = eval(screen.value)
}

function clr() {
    screen.value = "";
}

function del() {
    screen.value = screen.value.slice(0, -1)
}

let symbols = document.getElementsByClassName('.symbol')
if (screen.value == symbols) {
    screen.value = ''
}
const btnRed = document.getElementById('radio1');
btnRed.addEventListener('click', funcRed);
const btnGreen = document.getElementById('radio2');
btnGreen.addEventListener('click', funcGreen);
const btnBlue = document.getElementById('radio3');
btnBlue.addEventListener('click', funcBlue);




function funcRed() {
    document.getElementById("sample").style.backgroundColor = "red";
}

function funcGreen() {
    document.getElementById("sample").style.backgroundColor = "greeen";
}

function funcBlue() {
    document.getElementById("sample").style.backgroundColor = "blue";
}
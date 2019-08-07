// http://alphasis.info/2013/02/javascript-gyakubiki-click-button-call-function/

const click1 = document.getElementById("btn-1");
click1.addEventListener("click", funcAdd1);
const click2 = document.getElementById("btn-2");
click2.addEventListener("click", funcAdd2);


function funcAdd1() {
    document.getElementById("btn-1").innerHTML = parseInt(document.getElementById("btn-1").firstChild.nodeValue) + 1;
}

function funcAdd2() {
    document.getElementById("btn-2").innerHTML = parseInt(document.getElementById("sbtn-2").firstChild.nodeValue) + 2;
}
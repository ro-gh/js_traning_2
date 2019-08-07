//メッセージをランダムに表示
const btnClick = document.getElementById("button");
btnClick.addEventListener('click', omikuji);
function omikuji() {
    rand = Math.floor(Math.random() * 5);
    if (rand == 0) msg = "大吉";
    if (rand == 1) msg = "中吉";
    if (rand == 2) msg = "吉";
    if (rand == 3) msg = "凶";
    if (rand == 4) msg = "大凶";
    alert(msg);
}
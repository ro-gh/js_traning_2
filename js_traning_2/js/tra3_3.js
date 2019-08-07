//   おみくじ　3
//　異なる確率で表示
// ボタン押下時に乱数が決定
// 受け取る乱数に応じて表示が変わる
const clickBtn = document.getElementById('button');
clickBtn.addEventListener('click', omikuji);
function omikuji() {
    rand = Math.floor(Math.random() * 100);
    msg = "大吉";// 0~4(5%)
    if (rand > 4) msg = "吉";// 1(15%)
    if (rand > 14) msg = "中吉";//(25)
    if (rand > 49) msg = "末吉";//(35)
    if (rand > 83) msg = "凶";//(15)
    if (rand > 94) msg = "大凶";// 95~99(5)
    alert(msg);
}
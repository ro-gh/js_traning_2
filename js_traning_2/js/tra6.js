// clasList practice
//   https://javascript.step-learn.com/contents/J109-classlist.html
//javascriptでクラスを追加・削除するのは
// lassListで簡単に実現できる
/*
// 追加
element.classList.add('');
//　削除
element.classList.remove('');
//　追加・削除
elem.classList.toggle('')
//>指定したクラスがないと　追加　すでにあるなら　削除
*/
const d = document.getElementById('start');
console.log(start.classList); //a

// add 'b'
d.classList.add('add');
console.log(start.classList); // ab

// remove 'a'
d.classList.remove('a');
console.log(start.className); // b

// toggle'c'
d.classList.toggle('c');
console.log(start.className); //bc

// toggle'c'
d.classList.toggle('c');
console.log(start.className); //b

// 中身を見る
const list = d.classList;// 
console.log(list);

// 要素にclass='add'が含まれているか判定
const result = d.classList.contains('add');
console.log(result); //true

//　要素にclass="add"が含まれていれば削除、含まれてなければ追加
d.classList.toggle('add2');
console.log(result.classList);
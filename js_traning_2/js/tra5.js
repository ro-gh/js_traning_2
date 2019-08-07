/** 　「How to　use　　Array.map 」
 *  https://hfuji.hatenablog.jp/entry/2016/06/28/232820
 */
// case:1
const array = [1, 2, 3];
const newArray = array.map(function (value) {
    return 2 * value;
});

console.log(array)  
console.log(newArray)  
// => [1,2,3]
// => [2,4,6]
/**
 * ①map()は配列から配列を作るメソッドである
 * ②元の配列は変更されず、新しい配列を作る
 * ③引数として関数を渡す
 * ④引数となる関数は、元の配列の各要素を受け取って新たな
 * 　配列の要素を返り値としている
 * 詰まる所、map()　は配列の各要素に何らかの操作
 * (この場合、2倍にする　という操作)をして新しい配列を作る
 * 
 */

 // case:2 アロー関数を使用
const array = [1, 2, 3];
const newArray = array.map(value => 2 * value);

console.log(newArray);
// => [2,4,6]
// ※return  の記述が省ける

// case:3 文字列の配列を　map　で変換する
const array = ['japanese', 'english', 'chinese'];
const upper = array.map(language => language.toUpperCase());

console.log(upper);
// => ["JAPANESE", "ENGLISH", "CHINESE"]


// case:4 ただの配列からオブジェクト配列へ
const array = [1, 2, 3];
//const objects = array.map(key => ({ key: key }));
const objects = array.map(key => ({key}));//簡略化
console.log(objects);
// => [ {key: 1}, {key: 2}, {key: 3} ]

/**
 * keyという名前をつけ、プロパティを振り分ける
 * ここで　({　key:　key})　のようにオブジェクトに括弧をつけるのは
 * 「アロー関数」の都合
 * 中括弧だけではオブジェクトの外側なのか、
 * (引数)　=>　{処理}　に出てくる中括弧なのか曖昧なため、エラーになる
 */

 // case:5 オブジェトの配列からプロパティの配列へ
const persons = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }

];
const names = persons.map(person => person.name)

console.log(names);

// csase:6 map()の中でインデックスを使う
let array = [5, 5, 5];
array = array.map((value, index) => index);

console.log(array);
// [0, 1 ,2]
// mapにわたす関数の第二引数が配列のインデックスになる
// 使い所、2つの配列を合体させてオブジェクトの配列を作りたいとき
// names, ages は同じ長さの配列でないといけない
// case: 6-2
const names = ['Sato', 'Ito', 'Kyoto'];
const ages = [20, 24, 31];

const persons = names.map((name, i) => ({
    name: names[i],
    age: ages[i]
}));
console.log(persons);
// [{ name: 'Sato', age: 20 },
// { name: 'Ito', age: 24 },
// { name: 'Kato', age: 31}]

// case: 6-3
const numbers = Array(5).fill(null).map((_, i) => i + 1);
console.log(numbers);
// how to Array,fill()
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
// arr.fill(value[, start[, end]])
// value=配列に設定する値
// start=開始位置。既定値は 0
// end=終了位置.既定値はthis.length　array = [1,2]なら2
// 最大3つの引数value,start,end

const array1 = [1, 2, 3, 4];

// 1: fill with 0 from position 2 until position 4 
console.log(array1.fill(0, 2, 4));
//0=value,2=start=3=index,4=end=length
// ecpected putput [1, 2, 0, 0]

console.log(array1.fill(5,1))

//case:6-4
const numbers = Array(5).fill(null).map((_, i) => i + 1);
console.log(numbers);
// => [1,2,3,4,5]

// case:6-5 "1月"から"12"までの文字列の配列を作る
const months = Array(12)
    .fill(null)
    .map((_, i )=> i + 1)//forEach的な？
    .map(month => month + '月');

console.log(months);
// => ["1月","2月"...,"12月"]
// step-1: Array(12)= 要素が12個ある
// -2: null=空　形だけfill(x)=>[x,...x]
// -3: 
// -4: 3で作られた month関数に+’月’
//  [ Array.from 使い方例 ]

//  https://qiita.com/DeployCat/items/98f2e51c910a804d130c

//  1 Arrayっぽいもの(Array, string, Set, Map ...)から
//     Arrayを生成する
// 'en' Array-like object (arguments) to Array
function f() {
    return Array.from(arguments);
}

f(1, 2, 3);
// => [1,2,3]

// Any iterable object
// Set
const s = new Set(["foo", window]);
Array.from(s);
// => ["foo", window]

// Map
let m = new Map([ [1, 2], [2, 4], [4, 8] ]);
Array.from(m);
// => Array(2), Array(2), Array(2)
// => [ [1, 2], [2, 4], [4, 8] ] ??

// String
Array.from("foo");
// => ["f", "o", "o"]
// 文字列なら、一文字ずつ取得していく

// 第2引数にmapファンクションを渡すことで、Array.map　っぽいことも出来る
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
Array.from({ length: 5 }, (v, k) => k);
// [0,1,2,3,4]
// オブジェクト(from　ポケットリファレンス)
const obj1 = new Object('water');
const obj2 = { name : 'fall'};
document.getElementById('result').innerHTML = obj1 + '<hr>' + obj2;

/**{...}を使ってプロパティ/メソッドをまとめて定義できる
 */
//書式
objName = new Object;
objName = new Object();
objName = { propName : value {,propName : value ...}}
/** objName : 生成するオブジェクト名
 * propName : プロパティまたはメソッド名
 * value : 値/内容
 */
//　文例
myObj = new Pbject();// myobjをオブジェクトとする
gObj { id : 2, type : 'writer'}
    //idプロパティとtypeプロパティに値を設定しgObjオブジェクトとする
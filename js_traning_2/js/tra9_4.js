// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Creating_New_Objects/Defining_Methods
// メソッドの定義
/**メソッドとは、あるオブジェクトに結び付けられた関数のこと。
 * メソッドは、通常の関数の定義と同じ方法で定義する。
 * 既存のオブジェクトに関数を結びつけるには
 * 次の構文を使用
 */
object.methodNAme = function_name;
/**「object」は既存のオブジェクトを、
 * 「method_name」は関数の名前をそれぞれ表す
 * 
 * すると、次のようにしてオブジェクトのコンテキストでそのメソッドを
 * 呼び出せる
 */
object.methodNAme(params);
/**オブジェクトのコンストラクタ関数にメソッドの定義を含めることで、あるオブジェクト
 * の種類についてのメソッドを定義することが出来る。
 * 例　以前定義した「car」オブジェクトのプロパティを整形して表示する関数を定義
 */
function displayCar() {
    const result = 'A Beautiful' + this.year + ' ' + this.make + ' ' + this.model;
    pretty_print(result);
}
// テンプレートリテラル活用
function displayCar() {
    const result = `A Beautiful ${this.year} ' '${this.make} ' '${this.model}`;
    pretty_print(result);
}
//pretty_printは水平方向の罫線と文字列を表示する関数
//「this」を使用してそのメソッドを抱えているオブジェクトを参照している
//次の文
this.diplaycar = displayCar;
//をオブジェクトの定義に加えることで、この関数を「car」のメソッドに
//することができる。
//「car」の完全な定義は次のようにならる
function car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
}
//すると、次のように各オブジェクトについて「displayCar」メソッドを
//呼び出す事ができる
car1.displatCar();
car2.displayCar();

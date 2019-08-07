/** https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Creating_New_Objects/Using_a_Constructor_Function
 * 1. コンストラクタ関数の使用
 * 2.　オブジェクトのプロパティに対するインデックス付け
 * 3.　Defining Prooerties for an Objecto Type
 *   　（あるオブジェと種類にたいするプロパティの定義)
 * 4.　メソッドの定義
 */
/**1.コンストラクタ関数の使用
 * 　もう一つの方法として、次の2ステップでオブジェクト作成可
 * 1.コンストラクタ関数を書くことで、オブジェクトの種類を定義
 * 2.newを用いてそのオブジェクトのインスタンスを作成
 * 
 * オブジェクトの種類を定義するためには、名前、プロパティ、メソッドを
 * 定義する関数を作成する必要がある
 * 例　車についてのオブジェクトの種類を作成
 * この種類のオブジェクトに「car」という名前をつけ、
 * 「make」「model」「year」というプロパティを持たせる
 * ↓
 */
function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// 関数に渡された値に基づいてオブジェクトのプロパティに
// 代入するために「this」を使用
//　すると次のように「mycar」オブジェクトを作成できる
mycar = new car('Eagle', 'Talon TSi', 1993);

/**この文は「mycar」を作成し、そのプロパティ用に指定した値を
 * 代入する。結果、「mycar.make」の値は'Eagle’という文字列
 * 「mycar.year」は「1993」という整数、になる
 * 
 * 「new」を呼び出すことで「car」オブジェクトを幾らでも
 * 作りだせる
 */
 kensCar = new car('Nissan', '300ZX', '1992');
 vpgsCar = new car('Mazda', 'Miata', '1990');

 /**それ自身別のオブジェクトである、というようなプロパティを持つ
  * オブジェクトを作ることが可能
  * 例　次のように「person」オブジェクトを定義するとする
  */
 function person(name, age, sex) {
     this.name = name;
     this.age = age;
     this.sex = sex;
 }
 // そして次のように2つの新しい「person」オブジェクトの
 // インスタンスを作成する
 rand = new person('Rand Mckinnon', 33, 'M');
 ken = new person('Ken Jones',  39, 'M');

 /**次のように「car」の定義を書き換えて「person」オブジェクトをとる
  * 「owner」プロパティを持たせることができる
  */
 function car(make, model, year, owner) {
     this.make = make;
     this.model = model;
     this.tear = year;
     this.owner = owner; 
 }
 // 新しいオブジェクトのインスタンスを作成するためには、
 car1 = new car('Eagle', 'Talon TSi',  1993, 'rand');
 car2 = new car('Nissan', '300ZX',  1992, 'ken');

 /**新しいオブジェクトの作成時に文字列リテラルや整数値を渡す代わりに、
  * 上記の文ではオブジェクト「rand」及び「ken」を所有者を表す引数として、
  * 渡している。「car2」の所有者の名前を知りたい場合、
  * 次のプロパティにアクセスする
  */
 car2.owner.name
 //以前定義したオブジェクトにいつでもプロパティを追加できることに注意
 // 例
 car1.color = 'black';
 /**〜はプロパティ「color」を「car1」に追加し、それに
  * 「’black’」とおいう値を代入する。
  * しかし、この方法では他のどのオブジェクトにも影響を与えない。
  * 同じ種類の全オブジェクトに新しいプロパティを追加するには、
  * そのプロパティを「car」というオブジェクトの種類の定義に追加する
  * 必要がある。
  */
 /**オブジェクトのプロパティのインデックス付
  * javastipt1.0では、オブジェクトのプロパティをそのプロパティ名や
  * 順序のインデックスで参照できる。
  * 然し、javascript1.1  以降では最初にプロパティをその名前で定義すると
  * 常にその名前で参照しなければならず、最初のプロパティをインデックスで定義すると
  * 常にそのインデックスで参照しなければならない
  * 
  * 先の「Car」オブジェクトの種類の例のようにコンストラクタ関数を用いて、
  * オブジェクトとそのプロパティを作成したとき、またそれぞれのプロパティを
  * 明示的に定義したとき(例：myCar.color　=　’red’)に
  * これは適用される。そのため、「ｍｙCar[5]　’25　mpg’」のように
  * 最初のインデックスを用いてオブジェクトのプロパティを定義した場合、
  * 「myCar[5]」のようにそのプロパティを後から参照できるようになる 
  */
  /** このルールの例外は「forms」配列のようにHTMLから反映されたオブジェクト。
   * これらの配列内のオブジェクトは、その順番を表す数
   * (文書内のどこにあるかに基づく)か、またはその名前(定義されている場合)
   * のどちらかで常に参照できる。例、文書内の2番めの「<form>」タグが
   * 「’myForm’」というNAME属性を持っている場合、「」document.forms[1]や
   * document.forms[’myForm’]や「document.myForm 」とすることで
   * そのフォームを参照できる
   * 
   * 
   */
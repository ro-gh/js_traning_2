/** https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Objects_and_Properties
 * 1. オブジェクトとプロパティ
 * 2.
 * 3.
 */
// 1. オブジェクトとプロパティ

// オブジェクト名
objrectName.propertyName

// オブジェクト名もプロパティ名も大文字と小文字を区別する
// ↑プロパティの定義は下記のように値を代入することで行う
// myCar というオブジェクトにmake、model、year
myCar.make = 'ford';
myCar.model = 'Mustang';
myCar.year = '1969';

/** 配列は単一の変数名に結び付けられた値の順序集合
 * 　JSにおけるプロパティと配列は、密接に関連している
 * 　それらは同一のデータ構造への、異なるインターフェース
 * 　そのため上記のようにmyCarオブジェトのプロパティにアクセスできる
 *  */ 
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

/** この手の配列は連想配列として知られる
 * 　それぞれのインデックスの要素が文字列にも結びつけられているため
 * 　どのように操作するか、、次の関数は引数として
 * オブジェクトとそのオブジェクトの名前を渡すと
 * オブジェクトのプロパティを表示する
 */
function show_props(obj, obj_name) {
    const result = '';
    for (let i in obj)
    result += obj_name + '.' + i + '=' + obj[i] + '\n';
    return result;
}
//??????????
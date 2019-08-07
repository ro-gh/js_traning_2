// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Creating_New_Objects/Using_this_for_Object_References
// 「this」を用いたオブジェクト参照
/**JavaScriptにはカレントオブジェクトを参照するメソッド内で使用できる特殊な
 * キーワード、「this」がある。
 * 例　あるオブジェクトの「value」プロパティの妥当性を確認する
 * 「validate」という関数があるとする。関数にはそのオブジェクト
 * と、上限及び下限の値を渡す
 */
function validate(obj, lowVal, hiVal) {
    if ((obj.value < lowVal) || (obj.value > hiVal))
    alert('Invalid Value!');
}
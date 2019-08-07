// DOM操作(タグの文字を変更する)
// https://iorishimizu.hatenablog.com/entry/course/javascript/02/01

const clickClickBtn = document.getElementById('click');
clickClickBtn.addEventListener('click', clickLink)
function clickLink () {
    // [div]タグを取得
    const div = document.getElementById('test');

    //　文字列を設定
    div.textContent = 'Hello DOM';
}
/** flow-
 * 1.HTMLタグの文字を変更したい
 * 2.JavaScriptでHTMLたぐのオブジェクトを取得
 * 3.JavaScriptでHTMLタグの文字を変更する処理
 * 
 * 目的：HTMLタグの文字を変更する
 * 方法：JavaScriptを利用する
 * 条件：JavaScriptでHTMLタグの文字を変更するには、
 * 「HTMLタグのオブジェクトが必要」
 * 
 * ・DOM操作の基本
 * HTMLタグのオブジェクトをJavaScriptで取得し、
 * オブジェクトのプロパティを変更する
 * 
 * 解説：
 * ①Webブラウザでファイルを開くと「IORI」という文字列と、
 * 「Click」リンクが表示される。
 * ②HTML17行目のdivタグに注目する。このタグは文字列「IORI」を
 * 表示するためのタグ。
 * ③リンクをクリックしてこのタグの文字列を変更したい。
 * つまり「このタグのオブジェクトをJavaScriptで活用する」
 * ④そのためdivタグにidを設定。id属性は「test」。
 * このidを利用してタグのオブジェクトをJavaScriptで取得する。
 * ⑤「Click」リンク。aタグのhref属性にJavaScriptが設定されている。
 * Click リンクをクリックするとclickLink() 関数が実行される。
 * (clickLink()関数が実行→document.getElementById()関数が実行
 * →id属性の値が「test」のタグを取得
 * 
 * ・HTMLタグの尾を取得する方法
 * 　(　document.getElementById('idの値')　)
 * HTMLタグを変更するには、HTMLタグのオブジェクトが必要。
 * その関数が getElementById()関数。
 * 特定のタグを取得する場合に実行。定型文。
 * 引数で指定したidを持つタグのオブジェクトを取得できる
 * 
 * ・documentオブジェクト
 * （Webブラウザの画面を管理するオブジェクト）
 * オブジェクトは「便利な関数やプロパティを詰め込んだ箱」
 * 例ーMathオブジェクトは「数学的な関数を詰め込んだ箱」
 * documentオブジェクトは「Webブラウザの画面を管理する関数を詰め込んだ箱」
 * 
 * 「idが’test’」のタグを取得して変数divに代入する。
 * idの値が「’test’」のタグは、文字列「Hello」のdiv。
 * このdivのオブジェクトが変数divへ代入される。
 * divタグに文字列「’Hello　DOM’」を代入する
 * 
 * ・タグに記載される文字列を保管するプロパティ
 * (タグのオブジェクト.textContent)
 * タグ(のオブジェクト)にはtextContentというプロパティが存在。
 * textContentプロパティにはタグに記載される文字列が保管されている。
 * 「textContentプロパティに文字列を代入すると、その文字列を
 *　タグに表示する」
 * タグのtextContenプロパティに文字列「Hello　DOM」を代入する。
 * つまり、divタグに文字列「Hello　DOM」を表示(変更)する
 * */

// DOM操作(タグを取得した後、タグの文字列を取得する)
function clicklink(){
    // dicタグを取得
    const div = document.getElementById('test');
    // 文字を取得
    const txt = div.textContent;
    // ダイアログを表示
    alert(txt);
}
/** flow
 * ファイルをWebブラウザで実行すると、「Hello」という文字列と
 * 「Click」リンクが表示。
 * 「Click」リンクをクリックすると「Hello」と表示(変更)
 */
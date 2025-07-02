// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let boo = true;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

b = document.querySelector('button#print');
b.addEventListener('click', hantei);
// hantei();
// hantei();
// hantei();
// hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let inputElem = document.querySelector('input[name="yoso"]');
  let yoso = Number(inputElem.value);

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  
  kaisu = kaisu + 1;

  document.querySelector('span#kaisu').textContent = kaisu;
  document.querySelector('span#answer').textContent = yoso;

  let resultElem = document.querySelector('p#result');


  console.log(kaisu + "回目の予想: " + yoso);

  if (kaisu > 3) {
    resultElem.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (yoso === kotae) {
    resultElem.textContent = "正解です．おめでとう!";
    kaisu = 4; // 正解後もゲームを終了扱いに
  } else {
    if (kaisu === 3) {
      resultElem.textContent = "まちがい．残念でした答えは " + kotae + " です．";
    } else if (yoso < kotae) {
      resultElem.textContent = "まちがい．答えはもっと大きいですよ";
    } else {
      resultElem.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }
}
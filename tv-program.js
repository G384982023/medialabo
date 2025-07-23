
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  if (!data.list) {
    console.log("該当する番組は見つかりませんでした。");
    return;
  }

  let service = document.querySelector('#service').value;
  let programs = data.list[service];

  if (!programs) {
    console.log("該当する番組は見つかりませんでした。");
    return;
  }
  for (let program of programs) {
    console.log("タイトル: " + program.title);
    console.log("サブタイトル: " + program.subtitle);
    console.log("放送開始: " + program.start_time);
    console.log("放送終了: " + program.end_time);
    console.log("放送局: " + program.service.name);
    console.log("----------");
  }
}

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {

  // 前回の検索結果を削除
  let old = document.querySelector('#result');
  if (old !== null) {
    old.remove();
  }

  let resultDiv = document.createElement('div');
  resultDiv.id = 'result';
  document.body.insertAdjacentElement('beforeend', resultDiv);

  if (!data.list) {
    resultDiv.textContent = '該当する番組は見つかりませんでした。';
    return;
  }

  //let programs = data.list.g1;
  let programs = data.list.g1 || data.list.e1;

  if (!programs || programs.length === 0) {
    resultDiv.textContent = '該当する番組は見つかりませんでした。';
    return;
  }
  
  for (let i = 0; i < programs.length; i++) {
    let p = programs[i];

    // 見出し h2 を作成
    let h2 = document.createElement('h2');
    h2.textContent = "検索結果 " + (i + 1) + " 件目";
    resultDiv.insertAdjacentElement('beforeend', h2);

    // ul 要素を作成して、各項目を li として追加
    let ul = document.createElement('ul');

    let li1 = document.createElement('li');
    li1.textContent = "開始時刻：" + p.start_time;
    ul.insertAdjacentElement('beforeend', li1);

    let li2 = document.createElement('li');
    li2.textContent = "終了時刻：" + p.end_time;
    ul.insertAdjacentElement('beforeend', li2);

    let li3 = document.createElement('li');
    li3.textContent = "タイトル：" + p.title;
    ul.insertAdjacentElement('beforeend', li3);

    let li4 = document.createElement('li');
    li4.textContent = "サブタイトル：" + p.subtitle;
    ul.insertAdjacentElement('beforeend', li4);

    let li5 = document.createElement('li');
    li5.textContent = "番組説明：" + p.content;
    ul.insertAdjacentElement('beforeend', li5);

    let li6 = document.createElement('li');
    li6.textContent = "出演者：" + p.act;
    ul.insertAdjacentElement('beforeend', li6);

    resultDiv.insertAdjacentElement('beforeend', ul);
  }

}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#search');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let service = document.querySelector('#service').value;
  let genre = document.querySelector('#genre').value;

// URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+service+'-'+genre+'-j.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
// サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);
    print(data);
    printDom(data);  
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
/*
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};
*/

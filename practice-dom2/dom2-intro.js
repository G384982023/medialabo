function chengDom(){
//ヨット追加
    let l = document.createElement('li');
    let u = document.querySelector('ul#kazoeuta');
    l.textContent = 'ヨット';
    u.insertAdjacentElement('beforeend', l);

//ブルームーン追加
    let i = document.querySelector('img#bluemoon'); 
    i.setAttribute('src', 'bluemoon.jpg');
//拓大HP追加
    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

//餅削除
    l = document.querySelector('li#mochi');
    l.remove();
//ul 要素を削除
    u = document.querySelector('ul#kassen');
    u.remove();

//光の三原色の箇条書き
    u = document.createElement('ul'); 
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '赤';
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '緑';
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '青';

}
  let b = document.querySelector('button#henkou');
  b.addEventListener('click', chengDom);

let target = document.querySelector('#dynamic');

function randomString() {
  let stringArr = [
    '마우스를 클릭하면 흐름이 바뀝니다.',
    '목성은 중원소로 이루어진 암석형 핵을 가지고 있다.',
    '뚜렷한 고체 표면이 없고, 빠른 자전으로 인해서 행성의 모양은 편구 모양이다.',
    '목성은 태양계의 다섯번째 행성이자 가장 큰 행성이다.',
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split('');

  return selectStringArr;
}

function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

function dynamic(randomArr) {
  console.log(randomArr);
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

function blink() {
  target.classList.toggle('active');
}

setInterval(blink, 500);

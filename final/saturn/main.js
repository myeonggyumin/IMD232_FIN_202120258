//Original Code from: https://www.youtube.com/watch?v=e56H5n1SvEs&t=1154s&ab_channel=%EC%88%98%EC%BD%94%EB%94%A9
//Modified by Myeong gyu min

let target = document.querySelector('#dynamic');

function randomString() {
  let stringArr = [
    '마우스로 토성을 움직일 수 있습니다.',
    '토성의 밀도는 태양계 내의 모든 천체뿐만 아니라 물보다도 작다.',
    '토성은 목성과 모든 면에서 아주 비슷하지만 아름다운 고리로 사람들을 놀라게 한다.',
    '갈릴레이는 처음에 토성의 고리를 보고 이것을 토성의 귀 또는 손잡이라고 부르기도 했다.',
    '오래 바라볼 수록 토성의 고리가 만들어집니다.',
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

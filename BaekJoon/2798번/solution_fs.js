const fs = require("fs");
const inputValue = fs.readFileSync("your file path").toString().split("\r\n");
const cardCount = Number(inputValue[0].split(" ")[0]);
const maxValue = Number(inputValue[0].split(" ")[1]);
let numbers = [];

//입력값 중에서 카드 값들 추출
for (let index = 0; index < inputValue[1].split(" ").length; index++) {
  numbers.push(Number(inputValue[1].split(" ")[index]));
}

let card1, card2, card3;
let goodValue = 0;
let tempValue = 0;

//첫번째 카드
for (let index = 0; index < numbers.length; index++) {
  card1 = numbers[index];

  //두번째 카드
  for (let index2 = index + 1; index2 < numbers.length; index2++) {
    card2 = numbers[index2];
    //세번째 카드
    for (let index3 = index2 + 1; index3 < numbers.length; index3++) {
      card3 = numbers[index3];

      // 가장 가까운 숫자 계산
      tempValue = card1 + card2 + card3;
      if (tempValue <= maxValue && tempValue > goodValue) {
        goodValue = tempValue;
      }
    }
  }
}

console.log(goodValue);

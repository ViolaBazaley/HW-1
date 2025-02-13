
let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");

let randNum = Math.floor(Math.random() * 100) + 1;
let userNum;

btn.onclick = function () {

  userNum = input.value;
  console.log(userNum, randNum);
  if (userNum > randNum) {  
    check.textContent = "Пока что не угадали, загаданное число меньше";

} else if (userNum < randNum) {
    check.textContent = "Пока что не угадали, загаданное число больше";

} else  {
    check.textContent = "Поздравляю! Вы угадали число";

  }


};

// Game Two - Простая арифметика

function simpleArithmetic() {
    
  const firstNum = Math.floor(Math.random() * 10) + 1;
  const secondNum = Math.floor(Math.random() * 10) + 1;
  
   const operators = ["+", "-", "*", "/"];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[randomIndex];

  if (operator === operators[0]) {
    result = firstNum + secondNum;
} else if (operator === operators[1]) {
    result = firstNum - secondNum;
} else if (operator === operators[2]) {
    result = Math.floor(firstNum * secondNum);
} else {
    result = Math.floor(firstNum / secondNum);
}


userQuestion = `Введите ответ на пример: ${firstNum} ${operator} ${secondNum}?`;
userAnswer = Number(prompt(userQuestion));

if (result === userAnswer) {
    alert("Ура! Верный ответ!")
} else {
    alert("Не верно");
}


}


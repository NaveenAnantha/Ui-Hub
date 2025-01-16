const userInput1 = document.getElementById('input-number1');
// to check whether the js loaded or not
console.log(userInput1.value);
console.log(typeof(userInput1));


const userInput2=document.getElementById('input-number2');

const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
// Addition
addBtn.addEventListener("click",()=>{
  
  let result=Number(userInput1.value)+Number(userInput2.value)
  currentResultOutput.innerHTML=result;
  currentCalculationOutput.innerHTML=`${Number(userInput1.value)}+${Number(userInput2.value)}`;
})
// Subtraction
subtractBtn.addEventListener("click",()=>{

  let result=Number(userInput1.value)-Number(userInput2.value)
  currentResultOutput.innerHTML=result;
  currentCalculationOutput.innerHTML=`${Number(userInput1.value)}-${Number(userInput2.value)}`;
})
// Multiplication
multiplyBtn.addEventListener("click",()=>{

  let result=Number(userInput1.value)*Number(userInput2.value)
  currentResultOutput.innerHTML=result;
  currentCalculationOutput.innerHTML=`${Number(userInput1.value)}*${Number(userInput2.value)}`;
})
// Division
divideBtn.addEventListener("click",()=>{

  let result=Number(userInput1.value)/Number(userInput2.value)
  currentResultOutput.innerHTML=result;
  currentCalculationOutput.innerHTML=`${Number(userInput1.value)}/${Number(userInput2.value)}`;
})

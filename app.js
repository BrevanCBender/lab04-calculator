// import functions and grab DOM elements
import { add, subt, mult } from'./calculations.js';





const input1 = document.getElementById('firstInput');
const input2 = document.getElementById('secondInput');
const button = document.getElementById('compute');
const answeradd = document.getElementById('answerAdd');
const input1s = document.getElementById('firstInputs');
const input2s = document.getElementById('secondInputs');
const buttons = document.getElementById('computes');
const answersub = document.getElementById('answerSub');
const input1m = document.getElementById('firstInputm');
const input2m = document.getElementById('secondInputm');
const buttonm = document.getElementById('computem');
const answermult = document.getElementById('answerMul');







//console.log(input2, input1, button, answeradd)
button.addEventListener ('click', ()=>{
    //let final = (input1 + input2);
    //answeradd.numberContent = final;
    //function addinputs(input1)
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const result = add(value1, value2);
  answeradd.textContent = result;

});

buttons.addEventListener('click', ()=> {

  const value1s = Number(input1s.value);
  const value2s = Number(input2s.value);
  const results = subt(value1s, value2s);
  answersub.textContent = results;
});
buttonm.addEventListener('click', ()=> {

  const value1m = Number(input1m.value);
  const value2m = Number(input2m.value);
  const resultm = mult(value1m, value2m);
  answermult.textContent = resultm;
})


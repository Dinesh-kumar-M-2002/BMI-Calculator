const btne1 = document.getElementById("btn")
const bmiinpute1 = document.getElementById("bmi-result")
const weightconditione1 = document.getElementById("weight-condition")

function calculateBMI()
{
const height1 = document.getElementById("height").value/100
const weight1 = document.getElementById("weight").value
const bmivalue = weight1 / (height1*height1)
bmiinpute1.value = bmivalue

if(bmivalue <18.5)
{
weightconditione1.innerText = "Under Weight 😔"
}
else if (bmivalue >=18.5 && bmivalue <=24.9)
{
weightconditione1.innerText = "Normal Weight 😄"	
}
else if (bmivalue >=25 && bmivalue <=29.9)
{
weightconditione1.innerText = "Over Weight 😔"
}
else if (bmivalue >=30)
{
weightconditione1.innerText = "Obesity 😔"	
}
}


btne1.addEventListener("click",calculateBMI)
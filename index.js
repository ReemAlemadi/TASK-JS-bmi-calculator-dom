function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
height = height * 0.01;
let BMI = ( weight / height**2 ); 

if (BMI < 18.5) alert(BMI + `
Underweight!`)
else if (BMI >= 18.5 && BMI <= 24.9) alert(BMI + `
Healthy Weight :)`)
else if (BMI >= 25 && BMI <= 29.9) alert( BMI + `
Overweight :|`)
else if (BMI >= 30) alert( BMI + `
Above Obesity :(`)



}

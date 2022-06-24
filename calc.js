let first = parseInt(prompt("What is your first number"))
let second = parseInt(prompt("What is your second number"))
let operator = (prompt("What is your operator"))

if(operator === "+") {
   let addition = first + second;
   alert(addition);
}
else if(operator === "-") {
    let subtraction = first - second;
    alert(subtraction);
} 
else if(operator === "*") {
    let multiplication = first * second;
    alert(multiplication);
} 
else if(operator === "/") {
    let division = first / second;
    alert(division);
} 
else if(operator === "%") {
    let modulus = first % second;
    alert(modulus);
} 
else (
    alert("it's Invalid")
)
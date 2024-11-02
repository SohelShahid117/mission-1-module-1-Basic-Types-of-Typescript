"use strict";
//1-6 Function in typescript
/*
function add(num1,num2){
    return num1 + num2;
}
let result = add(5,6);
console.log(result);
let result2 = add(5,"6");
console.log(result2);
let result3 = add(5,"hi");
console.log(result3);
let result4 = add(5,true);
console.log(result4);

//node function_1.6.ts

*/
const addArrow = (num1 = 0, num2 = 0) => {
    // const addArrow = (num1,num2)=>{
    return num1 + num2;
    // num1+num2
};
const result = addArrow(44, 55);
console.log(result);
//object er bitor kono function likle take method bola hoi
const poorUser = {
    name: "sohel",
    balance: 10,
    // addBalance(bal){
    addBalance(bal) {
        return `my new balance is : ${this.balance + bal}`;
    }
};
const addTakaPoisa = poorUser.addBalance(55);
console.log(addTakaPoisa);
// const arrSquare = [1,4,5];
const arrSquare = [1, 4, 5];
// const sqrArray = arrSquare.map(elemnt=>elemnt*elemnt)
const sqrArray = arrSquare.map((elemnt) => elemnt * elemnt);
console.log(sqrArray);

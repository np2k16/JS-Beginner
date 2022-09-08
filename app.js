//Q10 - Calculate the remainder
function calcRemainder(num1, num2){
    return num1 % num2
}
console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8))

//Q11 - Is num odd?
function isOdd(num){
    return num % 2 != 0;
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))

//Q12 - If a number is even, return 1,
//else return -1
function isEven(num){
    return num % 2 === 0 ? 1 : -1
}
console.log(isEven(1))
console.log(isEven(2))
console.log(isEven(5))

//Q13 - Check if a user is 
//logged in and subscribed
function isLoggedInAndSubbed(str1, str2){
    return (str1 === "LOGGED_IN" &&
    str2 === "SUBSCRIBED")
}
console.log(isLoggedInAndSubbed("LOGGED_IN", "SUBSCRIBED"))
console.log(isLoggedInAndSubbed("LOGGED_IN", "UNSUBSCRIBED"))
console.log(isLoggedInAndSubbed("LOGGED_OUT", "SUBSCRIBED"))

//Q14 - Check if a user is 
//logged in or subscribed
function isLoggedInOrSubbed(str1, str2){
    return (str1 === "LOGGED_IN" ||
    str2 === "SUBSCRIBED")
}
console.log(isLoggedInOrSubbed("LOGGED_IN", "SUBSCRIBED"))
console.log(isLoggedInOrSubbed("LOGGED_IN", "UNSUBSCRIBED"))
console.log(isLoggedInOrSubbed("LOGGED_OUT", "SUBSCRIBED"))
console.log(isLoggedInOrSubbed("LOGGED_OUT", "UNSUBSCRIBED"))
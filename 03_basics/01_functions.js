function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(num1,num2) {
//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2) {
    // let result=num1+num2
    // return result
    return num1+num2
}

const result=addTwoNumbers(5,7);

// console.log("Result: ", result);

function loginUserMessage(username="sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Akshat"))
console.log(loginUserMessage())
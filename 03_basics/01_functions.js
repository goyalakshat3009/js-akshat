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
// console.log(loginUserMessage())

function calculatCartPrice(val1,val2,...num1) {
    return num1
}

// console.log(calculatCartPrice(100,400,500,1000))

const user = {
    username: "akshat",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({username: "sam", price: 1000})

const myNewArray = [200,400,600,800,1000]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,400,500]))
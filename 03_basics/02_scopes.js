// var c=300;
let a =300

if (true) {
let a = 10
const b=20
// console.log("INNER: ",a);
}



// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username="John"

    function two() {
        const website="example.com"
        // console.log(username);
    }
    // console.log(website);

    two()

}

one()

if (true) {
    const username="Akshat"
    if(username==="Akshat") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++INTERSETING ++++++++++++++++++++++++++++++++

addone(5)


function addone(num) {
    return num + 1
}



addTwo(5)
const addTwo = function(num) {
    return num + 2
}

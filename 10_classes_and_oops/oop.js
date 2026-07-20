const user = {
    username: "Akshat",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount, isloggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=this.isloggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Akshat",15,true)
const userTwo = new User("Goyal",100,false)
console.log(userOne.constructor);
// console.log(userTwo);
// const tinderUser=new Object()
const tinderUser={}

tinderUser.id = "123abc"
tinderUser.name="Akshat"
tinderUser.login=false

// console.log(tinderUser);

const regularUser = {
    email:"akshat@hmail.com",
    fullname: {
        userfullname: {
            firstname:"Akshat",
            lastname:"Goyal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id:1,
        email:"Ak@gmail.com"
    },
    {
        id:1,
        email:"Ak@gmail.com"
    },
    {
        id:1,
        email:"Ak@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('log'));


const course = {
    coursename: "JavaScript",
    price:"1783",
    courseInstructor:"Akshat",
}

// course.courseInstructor

const {courseInstructor: insta} = course

// console.log(courseInstructor);
console.log(insta);

// {
//     "name":"Akshat",
//     "coursename":"JavaScript",
//     "price":"free"
// }

[
    {},
    {},
    {}
]
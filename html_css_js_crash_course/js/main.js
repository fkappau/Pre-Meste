let a=9
let b=10
console.log(a+b)
console.log(a*b)
let surname="Apau"

let Firstname="Francis"
console.log(surname+ " " +Firstname)

//arrays and objects

let names = ["kofi","ama","kwaku"]
let mymixd = [1,4,6, "ama","kwaku"]
let myarray = [22,23,43,2,33,2,2]

console.log(myarray[5]);
myarray.push(50)
console.log(myarray)
console.log(mymixd[3])


//functions takes up input and gives an output, html dosnt have a functions. it is an oject though
function add(num1,num2){
    console.log("additon:"+ (num1+num2))}
add(3,6)
add(1000,10010)
add(23,12)

function subtract(num1,num2){
    console.log("subtraction:: "+ (num1+num2))
}
subtract(10,5)
subtract(22,3)
subtract(12,11)
function login(username,password){
    console.log(username + "::" +password)
}
login('fkappau','hwenek3se3')

function multiply(num1,num2){
    return num1*num2

}
console.log (multiply(7,10))
let ans=(multiply(7,10))
console.log(ans);

// document.write(" <h1> hellooooo </h1>" )


//dom manipulation
//get element by Id
// console.log(username);
//form is used to fetch data and submit
let button = document.getElementById("button")

button.addEventListener('click',function(){

    let username = document.getElementById("username")
    let password = document.getElementById("password")
    // let username = document.querySelector("#username")
    // let password = document.querySelector("#password")

    // the last 2 and first 2 ae the same, with second 2 u can use class or this.id, use # to select the Id

    console.log(username.value, password.value);
    // alert(user.value+" "+password.value)
})

// button.addEventListener('click',()=>{
//     let username=document.getElementById("username")
//     let password=document.getElementById("password")
//with the id, if u uses class instead of ID it wont work

// }) just like the one on top, =>  the key replaces the function

//document.querySelector instead getelementby id,like css
let username = document.querySelector("#username")
let password = document.querySelector("#password")

//display usernamedynamically 
let displaybutton = document.getElementById("displaybutton")
displaybutton.addEventListener('click' ,function(){
    let username = document.getElementById('username')
    let h1 = document.getElementById('h1')
    h1.innerHTML = username.value
})
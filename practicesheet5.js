//add a number form into array
let num = [1,34,56,78,89]
console.log(num)
let a = prompt("Enter the number")
num.push(a)
console.log(num)

//keep the number adding into array until 0 is added by user
let num= [12,23,45,56]
console.log(num)
let a
do{
a =prompt("Enter the number")
num.push(a)
}while(a!=0)
console.log(num)

//filter the number which divisible by 10 from given array
let num= [10,20,45,56,13]
let b = num.filter((value)=>{
return value%10==0
})
console.log(b)

//create an array of square of given numbers.
let num= [10,20,45,56,13]
num.forEach((element)=>{
console.log(element*element)
})

// use reduce function and generate factorial for n number
let a =[1,2,3,4]
let b = a.reduce((r1,r2)=>{
return (r1*r2)
})
console.log(b)

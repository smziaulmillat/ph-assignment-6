


# 1) What is the difference between var, let, and const?

There is some major difference among var, let and constvar was used in old JavaScript but after the ES6 let and const os always benn used.

### Different no. 1

#### 🔥Scope 

##### 👉var

var can scope from any blocks. You can console.log any var from any where. It  is globally available 

##### 👉let 

let is block-scoped . That's mean you can not access a let that has been declared in a block

##### 👉const
 
const also give the same behavior as let.
It is also block-scoped.


### Difference no. 2

#### 🔥Re- assignment 

##### 👉var

ot can be updated and also can be redeclared with in its scope. That's why if we use this it can easily create bugs

##### 👉let

let can updated but it can not be re-declared . It can be re-declared out of the block-scope . Because let is block-scoped 

##### 👉const

const is short form of constant. It can not be updated or re-declared . But out of the scope you can re-declare a same name const.


### Difference no 3

#### 🔥Hoisting 

##### 👉var 

var is hoisted to the top of it's scope.But the value is set as undefined . That's mean if you wanna know value of a var before it's declaration you will get undefined.

##### 👉let

On the other side let is also hoisted to the top of it's scope but it is not initialized as any value. So of try to console.log a let before it's declaration you will get a reference error.

##### 👉const

It acts same as let.

### Difference no 4

#### 🔥Initialization 

##### 👉var

var can be declared without initializing it's value.

##### 👉let 

let can also be declared without initializing any value

##### 👉const

You can not declare a const without initializing any value.

# 2) What is the difference between map(), forEach(), and filter()? 

### This three are array methods. This three do loop on the given array. But after looping through an array their work is different than each other.

#### 🔥forEach()

forEach is used when you don't want any value as return. That's mean forEach doesn't return anything. It just return undefined.

##### 👉Example 

const numbers = [1, 2, 3, 4];

numbers.forEach(num => console.log(num * 2)); 

When we get an array after fetching API we can use forEach because we don't want anything as return 

#### 🔥map()

map return us a new array modified from the original array . We use it when we want our array to be modified. And it return a array.

##### 👉Example (simple)

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log(doubled); 

when you want to get a new array holding the double of the original array you can use that.

#### 🔥filter()

It also return a new array. But  you use filter when you want new array with all the elements that fulfill your condition. That's mean you have to give a condition in the callback function. Those who fulfill the condition from the original array they will go to the naw array

##### 👉Example 

###### const numbers = [1, 2, 3, 4];

###### const evens = numbers.filter(num => num % 2 === 0);
###### console.log(evens);

You want a new array those who are greyyer than 10 with the elements of the original array.

# 3) What are arrow functions in ES6?

##### An arrow function is also a function that works like the old function

👉In arrow function when you write the code **in just one line without the curly brackets,it will return by itself**

👉But if you use curly brackets then you have to write **return by your self**

👉You can give more than one parameter but also use arrow function without giving any parameter.

#### 🔥The structure 

#### const name =(parameters)=>(your code)
can be without any parameters and also you can use curly brackets.

So why we used it or should use it .The are several reasons behind it 

1. By using arrow function we can do our short code for shorter. 

2. Less code means that your code will be more  clean and clear . It will really help you to  explain the code to your team. 

# 4) How does destructuring assignment work in ES6?



# 5) Explain template literals in ES6. How are they different from string concatenation?


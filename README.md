


# 📝1) What is the difference between var, let, and const?

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

# 📝2) What is the difference between map(), forEach(), and filter()? 

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

# 📝3) What are arrow functions in ES6?

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

# 📝4) How does destructuring assignment work in ES6?

## 🔥Destructuring Assignment 

#### It is a important and new feature that is really important and useful

##### We can do Destructiring with array and objects

### 🔥Array Destructiring 

When we want to store a element  in a variable but we can do that easily with Destructiring.

` const arr =[1,2,3,4]`

`const one =arr[0] `

`const aecond =arr[1] `

##### before Destructuring we have to follow the upper way,but now

`const [one,second]=arr;`

that will do the same work as before

### 🔥Object Destructiring

##### We can do the same thing with object also

#### 👉Before

`const person = { name: "Ashique", age: 21 };`

`const name = person.name;`

`const age = person.age;`

#### 👉After

`const { name, age } = { name: "Ashique", age: 21 };`


# 📝5) Explain template literals in ES6. How are they different from string concatenation?

#### Template literal is a new feature in ES6. It is new way to write string.

#### Instead of using quotes *(" ')* we have to use backticks *(``)*


### 🔥Syntax

##### Means before we have code so messy to add a variable in a string 

#### 👉Example 

`const name = "Ashique";`
`const age = 17.9;`


`const oldStr = "My name is " + name + " and I am " + age + " years old.";`





##### but with template literal we can code or write that string without messy code. we have to use ${} to write a variable or we can also use more complex things like functions.



### 🔥Multiple line 

##### Before if we want write a content with several lines like a poem , we have to use \n and +

#### 👉Example


`const poem1 = "My name is Malik\n" +`

 `             "I read in class 5\n" +`

`              "JS is fun but also hard\n" +`

 `             "bye ";`




##### With template literal We can do the same thing but more easily

#### 👉Example 


##### const poem2 = `My name is Malik

##### I read in class 5

##### JS is fun but also hard

##### bye`;


### 🔥Calculate 

##### We can not calculate direct in the before temple literal bit now we can easily do calculate with {}

#### 👉Example 

##### const a = 10;
##### const s = 20;
##### console.log(`The sum is ${a + s}`);
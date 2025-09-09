


# 1) What is the difference between var, let, and const?

There is some major difference among var, let and constvar was used in old JavaScript but after the ES6 let and const os always benn used.

### Different no. 1

#### Scope 

##### 👉var

var can scope from any blocks. You can console.log any var from any where. It  is globally available 

##### 👉let 

let is block-scoped . That's mean you can not access a let that has been declared in a block

##### 👉const
 
const also give the same behavior as let.
It is also block-scoped.


### Difference no. 2

#### Re- assignment 

##### 👉var

ot can be updated and also can be redeclared with in its scope. That's why if we use this it can easily create bugs

##### 👉let

let can updated but it can not be re-declared . It can be re-declared out of the block-scope . Because let is block-scoped 

##### 👉const

const is short form of constant. It can not be updated or re-declared . But out of the scope you can re-declare a same name const.


### Difference no 3

#### Hoisting 

##### 👉var 

var is hoisted to the top of it's scope.But the value is set as undefined . That's mean if you wanna know value of a var before it's declaration you will get undefined.

##### 👉let

On the other side let is also hoisted to the top of it's scope but it is not initialized as any value. So of try to console.log a let before it's declaration you will get a reference error.

##### 👉const

It acts same as let.

### Difference no 4

#### Initialization 

##### 👉var

var can be declared without initializing it's value.

##### 👉let 

let can also be declared without initializing any value

##### 👉const

You can not declare a const without initializing any value.

# 2) What is the difference between map(), forEach(), and filter()? 

# 3) What are arrow functions in ES6?

# 4) How does destructuring assignment work in ES6?

# 5) Explain template literals in ES6. How are they different from string concatenation?


# Table of Contents
1. [Web Development with HTML, CSS, and JavaScript](#1-web-development-with-html-css-and-javascript)
    - 1.1 [JavaScript](#11-javascript)
        - 1.1.1 [Conditionals & Comparators](#111-conditionals--comparators)
            - 1.1.1.1 [== value and === value and data type ](#1111--and--equality-of-value-and-data-type)
            - 1.1.1.2 [if else statement](#1112-if-else-statement)
            - 1.1.1.3 [!== not equal](#1113--not-equal)
            - 1.1.1.4 [logical operators (&, ||, !)](#1114-logical-operators)
        - 1.1.2 [Objects](#112-objects-in-javascript)
            - 1.1.2.1 [Acess and Modify Objects](#1121-access-and-modify-objects)



# 1. Web Development with HTML, CSS and JavaScript
## 1.1 JavaScript

### 1.1.1 Conditionals & Comparators

#### 1.1.1.1 == and === (equality of value and data type) 
== equality of value

=== equality of value and data type
```javascript
var age = 30
age == 30
age == "30"
// the output will be true
age === "30"
// the output will be false, becuase the data types are not the same
```

#### 1.1.1.2 if else statement
```javascript
var totalPrice = 19;
var shippingCost;

if (totalPrice > 20) {
    shippingCost = 0
} else {
    shippingCost = 5
}

//more conditions
if (totalPrice <= 10) {
    shippingCost = 5
} else if (totalPrice <= 20) {
    shippingCost = 3
} else {
    shippingCost = 0
}
```
#### 1.1.1.3 !== not equal
```javascript
if (userMembership !== "premium") {
    // show user non-premium contents
    // recommend premium upgrade
} else {
    // show premium contents
}
```

#### 1.1.1.4 logical operators (&, ||, !)
```javascript
if (!(totalPrice > 20 || amazonPrime === true)) {
    // calcualte the shipment cost
} else {
    // free
}
```

### 1.1.2 Objects in JavaScript

**Data Type: Object**
- Used to group related information
- Unordered collection of **key-value pairs** (also called "properties")
- object properties can be **ANY** data types

```javascript
var person = {
    firstName: "Ivy",
    lastName: "Li"
}
```

#### 1.1.2.1 Access and modify objects
```javascript
person.firstName

// modify objects
person.firstName = "Xiang"

// add new key-value pair
person.gender = "female"

// remove elements from objects
delete person.gender
// it will output true if successful

// more complicated key-value pair
person.friends = ["person1", "person2"]

person.currentWork = {
    company: "example-company", 
    startDate: "someDate", 
    position: "data engineer"}


// combine array and objects together
var post1 = {content: "This is my super post", likes: 300, shares:20}
var post2 = {content: "This is my boring post", likes: 20, shares:0}

person.posts = [post1, post2]
```

### 1.1.3 Arrays
- Array is an ordered list of values
- Arrays are **zero-indexed**

```javascript
var friends = ["person1", "person2"]

// access the value based on the index
friends[0]

// getting the array size
friends.length

// add a new element
friends[friends.length] = "person3"

// remove last element
friends.pop()
```

### 1.1.4 Loops
- Looping is a basic programming concept
- One of the **main building blocks** of programming, which controls the flow of the program (like if / else statement)

```javascript
var post1 = {
content: "This is my super post", 
likes: 300, 
shares:20
}
var post2 = {
    content: "This is my boring post", 
    likes: 20, 
    shares:0
    }

var facebookUser = {
    userName: "IvyLi",
    password: "secret",
    email: "myemail@gmai.com",
    profileImage: "reference-image",
    friends: ["person1", "person2", "person3"],
    posts: [post1, post2]
}

// go through each post and add new pair
var posts = [post1, post2]
for (index in posts) {
    // do something
    console.log(posts[index])
}
// for of loop grabs values directly while for in loop grabs index
for (post of posts) {
    // replace likes to reactions
    console.log(post.likes)
    post.reactions = post.likes
    delete post.likes
}
```


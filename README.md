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
        - 1.1.3 [Array](#113-arrays)
        - 1.1.4 [Loops](#114-loops)
        - 1.1.5 [Built-in Functions](#115-built-in-functions)
            - 1.1.5.1 [Built-in Functions in Data Types](#1151-built-in-functions-on-different-data-types)
            - 1.1.5.2 [Examples about date objects and boolean var](#1152-examples-to-transform-with-functions)
    - 1.2 [HTML](#12-html)
        - 1.2.1 [HTML Elements](#121-html-elements)
            - 1.2.1.1 [HTML Attribute](#1211-html-attributes)
            - 1.2.1.2 [HTML Inline Elements](#1212-html-inline-elements)
            - 1.2.1.3 [HTML Block Elements](#1213-html-block-elements)
    - 1.3 [CSS](#13-css)
        - 1.3.1 [`<style>` elements](#131-style-element)
        - 1.3.2 [Class Selector](#132-class-selector)
        - 1.3.3 [Website Layout](#133-website-layout)
            - 1.3.3.1 [Flexbox Positioning](#1331-flexbox-positioning)
        - 1.3.4 [Background Colors](#134-background-colors)


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
- **Nested Loop**

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
for (index in facebookUser.posts) {
    // do something
    console.log(posts[index])
}
// for of loop grabs values directly while for in loop grabs index
for (post of facebookUser.posts) {
    // replace likes to reactions
    console.log(post.likes)
    post.reactions = post.likes
    delete post.likes
}
```

### 1.1.5 Built-in Functions

- Custom Functions
- Built-in Functions: functions **built into** JavaScript
    - Standalone (global) functions
    - functions (methods) on objects


```javascript
// global function
function replaceLikesWithReactions(user) {
    for (post of user.posts) {
        post.reactions = post.likes
        delete post.likes
    }
}

// call the function directly
var users = [facebookUserOne, facebookUserTwo]
for (user of users) {
    user.interests = []
    replaceLikesWithReactions(user)
}


// functions attached to objects
var facebookUserOne = {
    userName: "Ivy",
    password: "secret",
    email: "myemail@gmail.com",
    profileImage: "reference-image",
    friends: ["person1", "person2", "person3"]
    posts: [post1, post2],
    greet: function() {
        console.log("Hello Ivy")
    }
}
// call the function from the object
facebookUserOne.greet()
```

#### 1.1.5.1 Built-in Functions on different Data Types

- **Array**
```javascript
var friends = ["North", "Berth", "Lily"]
friends.pop()
friends.push("newFriend")
```

- **String**
```javascript
var someText = "When I type this sentence, the weather is great"
someText.replace(/great/g, "sunny") //regex for the first parameter

var fullName = "Ivy Li"
// split the full name into first name and last name
fullName.split(/\s+/) // match any white space
```
#### 1.1.5.2 Examples to transform with functions

1. Example1: Get an array of objects with splitted names
```javascript
var fullNames = ["John Doe", "Jane Doe", "John Smith", "Jane Smith"];
var firstAndLastNames = [] //Get an array of objects with splitted names
for (fullName of fullNames) {
    var names = fullName.split(/\s+/)
    var firstAndLastName = {
        firstName: names[0],
        lastName: names[1]
    }
    firstAndLastNames.push(firstAndLastName)    
}
```

2. Example2: Calculate the age based on users' birthdate
- You can use the Date object and its methods to **work with dates and times**
- It's not a real built-in data type of JavaScript
```javascript
function getAge(birthDateString) {
    var today = new Date()
    var birthDate = new Date(birthDateString)
    var age = today.getFullYear() - birthDate.getFullYear()

    var isSameMonth = today.getMonth() == birthDate.getMonth() // boolean object
    var birthdayMonthInFuture = today.getMonth() < birthDate.getMonth()
    var sameMonthDateInFuture = isSameMonth && today.getDate() < birthDate.getDate()

    if (birthdayMonthInFuture || (sameMonthDateInFuture)) {
        age--
    }

    // return the calculated age
    return age // return also exits the function and is the end of the function
}
```

## 1.2 HTML

- HTML stands for **H**yper **T**ext **M**arkup **L**anguage
- Describe the **structure** of a website
- HTML is the most basic building block!

### 1.2.1 HTML Elements
- HTML consists of different HTML elements, which I enclose or "mark up" the website content
- These HTML elements are set off from other text by "tags", which is element name surrounded by "<" and ">"
- HTML element is defined by a start tag, some content and an end tag

#### 1.2.1.1 HTML Attributes
- All HTML elements can have attributes
- Attributes usually have **name/value pairs**
- Provide **additional info** about HTML elements

1. **id Attribute**
- Used to specify a **unique id** for an HTML element
- Only 1 element with the same id can exist in an HTML document

#### 1.2.1.2 HTML Inline Elements
- Only take up as much width as necessary

1. `<b>` `<i>`
- `<b>` makes the text **bold**
- `<i>` display text in *italic*


2. `<button>`
- Defines a clickable button

3. `<img/>`
- Embed images
- **Self-Closing** Tags
- **src attribute** specifies the URL of the image
    - An absolute URL
    - A relative url - points to a file within a web site (like src="image.gif")

4. `<input/>`
- Specifies an input field where **user can enter data**
- Depending on type attribute the element is **displayed in different ways**
- **type attribute**
    - default type is "text"
- **placeholder attribute** specifies **short hint** that describes teh expected value


5. `<a>`
- Defines a **hyperlink**, used to link from one page to another
- **href attribute** specifies the URL of the page the link goes to
    - An absolute URL
    - A relative URL (like href="default.htm")
    - Link to an element with a specified id within the page (href="#section2")
    - Other protocols (like https://, ftp://, mailto:, file:, etc)
    - A script (like href="javascript:alert('Hello');")

#### 1.2.1.3 HTML Block Elements
- Take up full width

1. `<div>`
- Defines a **division or section** in an HTML document
- Used as a **container** for other HTML elements

2. `<h1>` - `<h6>` 
- Used to define HTML headings
- `<h1>` is most important heading, `<h6>` is the least 

3. `<p>`
- To define a paragraph
- Browsers automatically add a single blank line before and after each `<p>` element

4. `<ul>` `<ol>` `<li>`
- `<ul>` to define an **unordered** list
- `<ol>` to define an **ordered** list
- `<li>` to define a **list item**, used inside ordered or unordered list

```html
<!-- Header Section -->
<header>
    <h1><b>WELCOME TO MY WEBSITE</b></h1>
</header>

<!-- Main Content -->
<body>
    <input type="text" placeholder="Enter username"/>
    <button>Log In</button>

    <!-- List Information -->
    <div>
        <h2>Name of the list</h2>
        <h3><i>Short information on the list</i></h3>
        <p><i>Written by Ivy</i> | <i>Date: Today</i></p>
    </div>

    <!-- Content Section -->
    <div>
        <img src="anime_time.jpg" width="200" height="200"/>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>

        <!-- Subsection -->
        <div>
            <h4>Section Header</h4>
            <p>Paragraph to introduce this section</p>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

            <p>Paragraph to conclude this section</p>
            <a href="https://xiangivyli.com">Click to see article</a>
        </div>
    </div>

</body>
```

## 1.3 CSS

- CSS stands for **C**ascading **S**tyle **S**heets
- Describe the **style** of a website

### 1.3.1 `<style>` Element
- Used to define style (CSS) information for a document

Step 1 WHICH element you want to style?
Step 2 HOW to style it?

Each declaration includes a CSS property **name** and **value**
1. `color: grey;` `font-size: 10px;`

2. for `div`
    - `border: 1px solid black;`shorthand syntax for border-width, border-style, border-color
    - `padding: 10px;` adds space inside the border
    - `margin: 10px;` adds space outside the border
        - `margin-left`
        - `margin-right`
        - `margin-bottom`
        - `margin-top`

3. id Attribute 
- Defined in the HTML elements
- Use `#` to locate it in style

4. CSS Units 
- CSS has several different units for expressiing a length
- **Absolute Units**
    - Most import one: px
    - Fixed, meaning not responsive to screen size changes
- **Relative Units**
    - Most important one: %
    - More dynamic

    - Responsive Web design
        - The goal is to make web pages render well on a variety of devices and window or screen sizes
        - When a website is responsive, it means it **automatically adjusts for different screem sizes**
5. padding Attribute
- Used to create space around an element's content inside of any defined borders

### 1.3.2 Class Selector

**Class Attribute**
- Used to specify a name for an HTML element
- Multiple elements can share the same class
- Use `.` to locate it in style

### 1.3.3 Website Layout
There are many different layouts, but the following structure is very common
- Header
- Navigation
- Main Section / Content / Aside
- Footer

There are 2 common methods
- **Flexbox** Layout
    - Work with a flex **container** and flex **items**
    - Makes it easier to deign flexible responsive designs

- **Grid** Layout
    - Grid-based layout system, with rows and columns
    - Also makes it easier to design flexible web pages


#### 1.3.3.1 Flexbox Positioning

**Attributes for the parent container**
The flex container properties are:
- flex-direction
- flex-wrap
- flex-flow
- justify-content
    - align flex items horizontally
- align-items
- align-content

**Attributes for flex items**
- order
- flex-grow
    - Defines **how much space** it should take **relative to the rest** of the flex items
    - Value is a number, default is 0
- flex-shrink
- flex-basis
- flex
- align-self

### 1.3.4 Background Colors
- background-color Attribute
- Colors are specified with predefined color names or RGB, HEX and some other values

```css
<!-- Header Section -->
<header>
    <h1><b>WELCOME TO MY WEBSITE</b></h1>
</header>

<!-- Main Content -->
<body>
    <div id="login-search-section">
        <div id="logo-user-container">
            <img id="logo-ai" src="ai.jpg"/>
            <input type="text" placeholder="Search..."/>
        </div>
        <button>Log In</button>
    </div>

    <!-- List Information -->
    <div id="author-info">
        <h2>Name of the list</h2>
        <h3><i>Short information on the list</i></h3>
        <p class="article-info"><i>Written by Ivy</i> | <i>Date: Today</i></p>
        <p class="article-info"><i>Department: UWE</i></p>
    </div>

    <!-- Content Section -->
    <div id="main-section-container">
        <div id="article-section">
        <!-- Section 1 -->
            <div>
                <img id="anime-time" src="anime_time.jpg"/>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
            </div>

        <!-- Subsection -->
            <div>
                <h4>Section Header</h4>
                <p>Paragraph to introduce this section</p>

                <ul>
                    <li>Item 1</li>
                    <p>item 1 has some features</p>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

                <p>Paragraph to conclude this section</p>
                <a href="https://xiangivyli.com">Click to see article</a>
            </div>
        </div>

        <div id="aside-section">
            <!-- Aside Section -->
            <h4>Aside Section</h4>
            <p>Filter</p>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    </div>

    <!-- Footer Section -->
    <footer>
        <p>Footer Section at the end of the page</p>
    </footer>


</body>

<style>
    header {
        background-color: rgb(71, 125, 71);
        color: white;
        text-align: center;
        padding: 10px;
        margin: 1% auto;
    }

    body {
        background-color: lightgrey;
        margin: 0;

    }

    p {
        color: black;
    }

    a {
        color: blue;
        font-size: 10px;
    }

    div {
        border: 1px dotted black;
        padding: 10px;
        margin: 8px 20px;
    }

    #login-search-section {
        display: flex;
        align-items: center;
        justify-content: right;
        width: 100%;
        height: 60px;
        background-color: white;
        padding: 0%;
    }

    #logo-user-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 80%;
    }

    #logo-ai {
        width: 50px;
        max-width: 10%;
    }

    #login-search-section input {
        width: 85%;
        height: 70%;
        margin-left: 10px;
    }

    #login-search-section button {
        width: 10%;
        background-color: skyblue;
        color: white;
        border: none;
        align-self: center;
    }

    #author-info {
        text-align: center;
        width: 80%;
        margin: 10px auto;
        background-color: white;
    }

    .article-info {
        color: skyblue;
        font-size: 20px;
    }

    #main-section-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 80%;
        margin: auto;
    }

    #article-section {
        width: 70%;
        background-color: white;
        padding: 10px;
    } 

    #anime-time {
        width: 30%;
        max-width: 300px;
        height: auto;
    }

    #aside-section {
        width: 30%;
        background-color: white;
        padding: 0% 5%;
        margin-left: auto;
    }

    footer {
        background-color: rgb(71, 125, 71);
        text-align: center;
        padding: 10px;
    }
</style>
```
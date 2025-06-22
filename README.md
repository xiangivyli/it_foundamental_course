# Table of Contents
0. [Backlog and Scrum Board in Jira](#0-backlog-and-scrum-board-in-jira)
    - 0.1 [Issue](#01-issue)
        - 0.1.1 [Child Issue](#011-child-issues)
    - 0.2 [UI Mock](#02-ui-mock)
    - 0.3 [Backlog to Sprint](#03-backlog-to-sprint)
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
            - 1.2.1.1 [HTML Common Attributes](#1211-html-common-attributes)
            - 1.2.1.2 [HTML Inline Elements](#1212-html-inline-elements)
            - 1.2.1.3 [HTML Block Elements](#1213-html-block-elements)
        - 1.2.2 [HTML head tags](#122-html-head-tags)
    - 1.3 [CSS](#13-css)
        - 1.3.1 [`<style>` elements for Inline and Internal](#131-style-element-inline-and-internal)
            - 1.3.1.1 [Selector](#1311-selector)
            - 1.3.1.2 [CSS Properties](#1312-css-properties)
        - 1.3.2 [Website Layout](#132-website-layout)
            - 1.3.2.1 [Flexbox Positioning](#1321-flexbox-positioning)
        - 1.3.3 [Background Colors](#133-background-colors)
        - 1.3.4 [Semantic Elements](#134-semantic-elements)
    - 1.4 [Add JavaScript to HTML](#14-add-javascript-to-html)
        - 1.4.1 [OnClick Event](#141-onclick-event)
            - 1.4.1.1 [Write Create Post Form](#1411-write-create-post-form)
            - 1.4.1.2 [Add buttons to the Form](#1412-add-buttons-to-the-form)
        - 1.4.2 [Style Button on Hover](#142-style-button-on-hover)
        - 1.4.3 [DOM - Document Object Model](#143-dom---document-object-model)
        - 1.4.4 [Extract JS code into own JS file](#144-extract-js-code-into-own-js-file)
    - 1.5 [JavaScript Framework](#15-javascript-frameworks)
        - 1.5.1[Framework vs Libraries](#151-frameworks-vs-libraries)
            - 1.5.1.1[Frameworks](#1511-frameworks)
            - 1.5.1.2[Libraries](#1512-libraries)
        - 1.5.2[Version Scheme](#152-version-scheme)
        - 1.5.3[npm Registry](#153-npm-registry)
            - 1.5.3.1[Key Concepts for npm Registry](#1531-key-concepts-for-npm-registry)
            - 1.5.3.2[Package Manager](#1532-package-manager)
        - 1.5.4[npm CLI](#154-npm-cli)
            - 1.5.4.1[Key Conceptys for npm Registry](#1531-key-concepts-for-npm-registry)
            - 1.5.4.2[Package json](#1542-packagejson)
            - 1.5.4.3[Basic CLI commands](#1543-basic-cli-commands)
        - 1.5.5 [vue.js](#155-vuejs)
            - 1.5.5.1 [Basic Components Required](#1551-basic-components-required)
            - 1.5.5.2 [Essential VueJS Dependencies](#1552-essential-vuejs-dependencies)
            - 1.5.5.3 [Vue Component Structure](#1553-vue-component-structure)
            - 1.5.5.4 [Key VueJS Features](#1554-key-vuejs-features)
            - 1.5.5.5 [Transpiling with Vue CLI and Compiler sfc](#1555-transpiling-with-vue-cli-and-compiler-sfc)
    - 1.6 [NodeJS](#16-nodejs)
        - 1.6.0 [Localhost](#160-localhost)
        - 1.6.1 [Port](#161-port)
        - 1.6.2 [HTTP Communication](#162-http-communication)
        - 1.6.3 [URL/URI](#163-url)
        - 1.6.4 [IP Addresses](#164-ip-addresses)
        - 1.6.5 [JSON Data Exchange](#165-json-data-exchange)
        - 1.6.6 [NodeJS Backend Implementation](#166-nodejs-backend-implementation)
            - 1.6.6.1 [Middleware](#1661-middleware)
            - 1.6.6.2[POST Send data to backend](#1662-post---sending-data-to-backend)
            - 1.6.6.3[GET Frontend asks for data](#1663-get---frontend-asking-for-data)
        

# 0. Backlog and Scrum Board in Jira
<div style="text-align: center;">
    <img src="./src/agile_scrum.png" alt="agile_scrum">
</div>

## 0.1 Issue
- Unit of work
- Will be traced through the workflow from creation to completion

Types:
- story: also called "user story", requirement expressed using **non-technical language**, and it is usually a larger parent work item, which is broken down to smaller tasks
- Task: a more technical description, more specific, describing a single unit of work
- Bug: a problem, which prevents product from function correctly

### 0.1.1 Child Issues
- Child issue **sits below** another issue e.g. a subtask

## 0.2 UI Mock
- A realistic representation or **visual draft** of the design of a website
- Reflects the app's design elements, like color scheme, images, typography, buttons

## 0.3 Backlog to Sprint
- Backlog collects all user stories or tasks or bugs, then review the list to prioritise the first 3
- Create Sprint to set timeline, plan the sprint and set the goal which is going to be done in the Sprint
- Development team decides how many tasks they can implement in 1 sprint

Jira Sprint and Backlog demo

<div style="text-align: center;">
    <img src="./src/jira_sprint_demo.png" alt="jira_sprint_demo">
</div>

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
someText.replace(/great/g, "sunny") //regex for the first parameter, g means global - find all matches

var fullName = "Ivy Li"
// split the full name into first name and last name
fullName.split(/\s+/) // match any white space (\s), even one or more (+)
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

**Date object**  
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

<div style="text-align: center;">
    <img src="./src/HTML.png" alt="html sample">
</div>

#### 1.2.1.1 HTML Common Attributes
- All HTML elements can have attributes
- Attributes usually have **name/value pairs**
- Provide **additional info** about HTML elements

1. **id Attribute**
- Used to specify a **unique id** for an HTML element
- Only 1 element with the same id can exist in an HTML document

2. **class Attribute**
- Used to specify a name for an HTML element
- Multiple elements can share the same class
- Use `.` to locate it in style for CSS

#### 1.2.1.2 HTML Inline Elements
- Only take up as much width as necessary

1. Text Element (Typography)  

`<b>` `<i>`
- `<b>` makes the text **bold**
- `<i>` display text in *italic*

2. Links  

`<a>`
- a means "anchor"
- Defines a **hyperlink**, used to link from one page to another
- **href attribute** specifies the URL of the page the link goes to
    - An absolute URL
    - A relative URL (like href="default.htm")
    - Link to an element with a specified id within the page (href="#section2")
    - Other protocols (like https://, ftp://, mailto:, file:, etc)
    - A script (like href="javascript:alert('Hello');")

3. Image and Media  

`<img/>`
- Embed images
- **Self-Closing** Tags
- **src attribute** specifies the URL of the image
    - An absolute URL
    - A relative url - points to a file within a web site (like src="image.gif")

4. Forms and Input  

`<button>`
- Defines a clickable button

`<input/>`
- Specifies an input field where **user can enter data**
- Depending on type attribute the element is **displayed in different ways**
- **type attribute**
    - default type is "text"
- **placeholder attribute** specifies **short hint** that describes teh expected value


#### 1.2.1.3 HTML Block Elements
- Take up full width

1. Text Element (Typography)  

`<h1>` - `<h6>` 
- Used to define HTML headings
- `<h1>` is most important heading, `<h6>` is the least 

`<p>`
- To define a paragraph
- Browsers automatically add a single blank line before and after each `<p>` element

2. Lists  

`<ul>` `<ol>` `<li>`
- `<ul>` to define an **unordered** list
- `<ol>` to define an **ordered** list
- `<li>` to define a **list item**, used inside ordered or unordered list

3. Layout  

`<div>`
- Defines a **division or section** in an HTML document
- Used as a **container** for other HTML elements

4. Semantic Elements  

`<nav>`  
`<main>`  
`<article>`  
`<aside>`  

```html
<!-- Main Content -->
<body>

    <!-- Header Section -->
    <header>
        <h1><b>WELCOME TO MY WEBSITE</b></h1>
    </header>

    <!-- Input Section -->
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

### 1.2.2 HTML head tags

1. `<head>`
- A container for metadata about the website

2. `<title>`
- Defines a title name for the webpage
- Shown in: the browser's title bar or when added to favorites
- Very important for search engine optimization (SEO)
- Use descriptive title, not just a list of words


3. `<link>` 
- Used to define a link to an external resource
- `rel=` specifies the relation of a linked resource
    - alternate
    - author
    - dns-prefetch
    - help
    - icon
    - license
    - next
    - pingback
    - preconnect
    - prefetch
    - preload
    - prerender
    - prev
    - search
    - stylesheet
        - can be my own stylesheet
        - Or use publicly available ones
- `href=` specifies the location of the linked document
- `type=` define the **media type** of the linked document/resource
    - if I don't specify the attribute, the brower will look at the `rel` attribute to guess the correct type

**Bootstrap**
**A free CSS framework and it contains HTML, CSS and JS-based design templates, which I can use in my own website**

4. Favicon
- Short for "favorite icon"
- It's a small 16*16 pixel icon
- An icon associated with a particular website used on web browsers
`<link rel="icon" type="image/svg+xml" href="favicon/favicon.svg">`

5. `<meta>`
- Used to specify the character set, page description, keywords, author of the document, and viewport settings
- Will not be displayed on the page, but is used by browsers (how to display content or reload page), by seach engines (keywords)

    - Define the character set used
    - Define keywords for search engine
    - Define a description of the web page
    - Define the author of a page
    - Refresh document every 30 seconds
    - Set the viewport to make my website look good on all devices

6. `<html>` element
- The **root element**, holding all the content of an HTML document
- Tip: including the lang attribute to define the language of the web page (for search engine)

7. `<!DOCTYPE>`
- All HTML documents must start with it
- Tell browser that this is an HTML document including which **HTML version**
    - HTML
    - HTML+
    - HTML 2.0
    - HTML 3.2
    - HTML 4.01
    - HTML5

```html
<!DOCTYPE html>
<html>
    <!-- Head Section -->
    <head>
        <title>My First Website</title>
        <link rel="stylesheet" href="style.css">
        <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg">
        <link rel="icon" type="image/png" href="favicon/favicon-96x96.png">
        <meta name="description" content="This is a test website">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="Ivy">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <!-- Main Content -->
    <body>
    </body>
</html>
```


## 1.3 CSS

- CSS stands for **C**ascading **S**tyle **S**heets
- Describe the **style** of a website

Three ways to apply CSS
1. Inline CSS 
- Applied directly to an HTML element using the style attribute.  
`<h1 style="color: blue; font-size: 2em;">Hello Ivy!</h1>`

2. Internal CSS
- Defined within a `<style>` tag inside the <head> of an HTML
```css
<style>
    h1 {
        color: blue;
        font-size: 2em;
    }
</style>
```

3. External CSS
- Written in a seperate .css file and linked to the HTML document using a `<link>` tag.  
`<link rel="stylesheet" href="style.css">`

It is common to put `<style>` section in a seperate CSS file, the benefits of external CSS file:
1. Better overview
2. External CSS files could be reused for different HTML pages, in case of same styling
3. External CSS files can be cached by the browser, which increases performance of the website


### 1.3.1 `<style>` Element Inline and Internal
- Used to define style (CSS) information for a document

Step 1 WHICH element you want to style?
Step 2 HOW to style it?

#### 1.3.1.1 Selector 

<div style="text-align: center;">
    <img src="./src/CSS_Selector.png">
</div>

#### 1.3.1.2 CSS Properties

<div style="text-align: center;">
    <img src="./src/CSS_Styling.png">
</div>

Each declaration includes a CSS property **name** and **value**

**Text Styling**
1. `color: grey;` `font-size: 10px;`
2. CSS Units 
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


**Box Model**
1. for `div`
    - `border: 1px solid black;`shorthand syntax for border-width, border-style, border-color
    - `padding: 10px;` adds space inside the border (Used to create space around an element's content inside of any defined borders)
    - `margin: 10px;` adds space outside the border
        - `margin-left`
        - `margin-right`
        - `margin-bottom`
        - `margin-top`

**Display and Positioning**
- Display and positioning properties control how elements are laid out on the page (1.3.2 address it)
- Define the **horizontal alignment** of the text in an element
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.absolute {
    position: absolute;
    top: 0;
    left: 0;
}
```

### 1.3.2 Website Layout
There are many different layouts, but the following structure is very common
- Header
- Navigation
- Main Section / Content / Aside
- Footer

These properties determine whether elements are block or inline, how they flow in relation to other elements, and where they are positioned in their container.

There are 2 common methods
- **Flexbox** Layout
    - Work with a flex **container** and flex **items**
    - Makes it easier to deign flexible responsive designs

- **Grid** Layout
    - Grid-based layout system, with rows and columns
    - Also makes it easier to design flexible web pages

The typical layout for a website
<div style="text-align: center;">
    <img src="./src/typical_layout.png">
</div>

#### 1.3.2.1 Flexbox Positioning

**Parent container**
The `<div>` is a flexible container

**The flex container properties for flexbox (parent container)** are:
(these attributes will also be applied to children elements)
- flex-direction: horizontally (by default) or vertically (row, column, row-reverse, column-reverse)
- flex-wrap (nowrap, wrap)
- align-content
    - align flex items **vertically**
- justify-content
    - align flex items **horizontally**
- align-items (center, flex-start, flex-end, stretch, baseline)

```css
#id-name {
    display: flex;
}
```

<div style="text-align: center;">
    <img src="./src/google_chrome_flex_editor.png">
</div>

**Attributes for flex items (children elements)**
- order
- **flex-grow**
    - Defines **how much space** it should take **relative to the rest** of the flex items
    - Value is a number, default is 0
- flex-shrink
- flex-basis
- flex
- align-self

### 1.3.3 Background Colors
- background-color Attribute
- Colors are specified with predefined color names or RGB, HEX and some other values

### 1.3.4 Semantic Elements
- Elements with a meaning
- `<header>` Element
    - Represents container for introductory content or navigational links 
- `<article>` Element
    - Should make sense on its own. Examples: forum, blog post, news story etc
- `<aside>` Element
    - Defines content aside from the page content

## 1.4 Add javascript to html
- add `<script>` in the `<head>`
- **Function invocation**
    - The code inside a function **executes only when "something" invokes (calls) the function**
    - 1. When it is invoked from JS code
    - 2. When an **event occurs (like a user clicks on a button)**
        - Events are **things that happen** to HTML elements
            - Something **the brower does**
            - Something **a user does**
            - And JavaScript can "react" on those events


### 1.4.1 onclick Event
The event occurs when the user clicks on the element

#### 1.4.1.1 Write "Create Post" Form
The form element is a **container for different types of input elements**  
`<form>`
- `<label>`
    - Defines a text label for the `<input>` tag

- `<input>`
    - Associate the `<label>` with the `<input>`
    - To tie the elements together: `for` attribute in label, `id` attribute of input field
    - if type is "email" or "password", the input should fit the format like @ or the password will be masked  
    `<input type="email">`
    `<input type="password">`
    - [HTML input types](https://www.w3schools.com/html/html_form_input_types.asp)

- `<textarea>` can wrap text 
    - Define a multi-line text input field
    - Usually used to collect user input like comments or reviews

- `<select>`
    - Creates a drop-down list
- `<option>`
```html
<select name="category" id="category">
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                </select>
```

Some attributes for `<form>`
- required attribute: a boolean attribute, when present, it specifies that input field **must be filled out** before submitting the form

```html
<div id="post-form-container">
    <form>
        <label for="title"><b>Title</b></label>
        <input id="title" name="title of post" type="text" placeholder="Enter Title" required>
        <label for="description"><b>Description</b></label>
        <input id="description" name="description of post" type="text" placeholder="Add Description">
        <label><b>Post</b></label>
        <textarea type="text" placeholder="Your Content..." required></textarea>
        <button id="hide-btn" onclick="hidePostForm()">Hide form</button>
        <button id="save-btn">Save form</button>
    </form>
</div>
```

Some attributes for `<form>` style
- max-width: define the maximum width of an element, if content is larger, then max-width applies, if smaller, then the max-width has no effect

#### 1.4.1.2 Add buttons to the Form

The logic should be the form shows up when click the "Create Post" button and hide the form when click the "Hide Form" button, the `display:none` will help the action.

Button 1: Show the form
```html
<button onClick="handleCreatePost()">Create Post</button>
```
```javascript
function handleCreatePost() {
    document.getElementById("post-form-container").style.display = "block";
}
```

Button 2: Hide the form
```html
<button id="hide-btn" onclick="hidePostForm()">Hide form</button>
```
```javascript
function hidePostForm() {
    document.getElementById("post-form-container").style.display = "none";
}
```

### 1.4.2 Style Button on Hover
:hover Selector
- Used to select elements when you mouse over them

In the style.css file, the following code achieves 

1. the cursor becomes a pointer when hovering on the button
2. the background of the button become green when hovering on the button
```css
#login-search-section button:hover {
    cursor: pointer;
    background-color: rgb(71, 125, 71);
}
```

### 1.4.3 DOM - Document Object Model

**Document Object**
- Each HTML document that gets loaded into a window becomes a document object
- It's the root node of the HTML document, containing the contents of the page

**Document Object Method**
- With it I can access and modify all document content

1. `document.getElementById("post-form-container")`
get div part from the whole document object, even can assign the div to a variable
```javascript
var formEl = document.getElementById("post-form-container")
```

1.1 `document.getElementById("post-form-container").style`

1.2 `document.getElementById("post-form-container").style.display = "block"`
can put it in the function and invoke it with button, change the display from "none" to "block"

```html
<script>
    function handleCreatePost() {
        document.getElementById("post-form-container").style.display = "block";
    }
</script>

<div id="login-search-wrapper">
            <div id="login-search-section">
                ...
                <button onClick="handleCreatePost()">Create Post</button>
            </div>
</div>
```

2. `document.getElementByTagName("h4")`
get an array of this tag and can get the element by index

3. `document.createElement("p")`

4. `document.createTextNode("some text")`

```javascript
var newParagraph = document.createElement("p")

var textEl = document.createTextNode("some text adding to new paragraph")

newParagraph.appendChild(textEl)
```

### 1.4.4 Extract JS code into own JS file

```html
<script src="javascript/app.js"></script>
```

The complete template can be found in the [post_website_template](./post_website_template/) , including the favicon image folder, javascript folder, images, css and html files. 


## 1.5 Javascript Frameworks

**A JavaScript framework is a structured foundation of pre-written code that provides developers with a way to build web applications more efficiently. Think of it as a blueprint for constructing buildings - instead of designing everything from scratch, the proven patterns and components are ready to use.**

1. React.js (by Facebook)
 - Component-based architecture
 - Virtual DOM for performance
 - Large ecosystem and community

2. Vue.js
 - Progressive framework
 - Gentle learning curve
 - Flexible integration options

3. Angular.js (by Google)
 - Full-featured framework
 - Built-in tools and utilities
 - Enterprise-level features

### 1.5.1 Frameworks vs Libraries

#### 1.5.1.1 Frameworks

A whole guide or "framework"

#### 1.5.1.2 Libraries
##### Utility Libraries
- Date handling (moment.js)
- String manipulation (lodash)
- Form validation (validator.js)

##### UI Libraries
- Date pickers
- Modal windows
- Navigation components

#### Data Processing Libraries
- Chart generation
- Data visualisation
- Mathematical operations

### Logic Flow
1. Include library in the application  
Option 1: Public URL and reference it directly in the brower  
`<script src="https://unpkg.com/validator@latest/validator.min.js"></script>`  
Option 2: Download it with npm CLI
`npm i datepicker.js` and the package (module) will be in the node_modules folder  
`<script src="node_modules/validator/validator.min.js"></script>`  
Remember set the character encoding method `<meta charset="UTF-8" />`

2. Use the pre-defined function

## 1.5.2 Version Scheme
**Semantic Versioning**
- Three-part version number
- Widely adopted version scheme

for 3.2.40
- 3 is the MAJOUR Version
    - Big changes (features, bugfixes)
    - **Incompatible changes** that affect apps that use older versions

- 2 is the MINOR Version
    - Minor changes (features, bugfixes)

- 40 is the PATCH Version
    - Usually only for bug fixes
    - Which are backwards compatible

## 1.5.3 NPM Registry

npm registry is a **repository for JavaScript packages**

- Registry = the service that makes all packages available (collection of repositories)
- Repository = the actual storage

The official website is [npm](https://www.npmjs.com/)

- npm stands for Node Package Manager
- npm is a package manager

- Manages software packages
- Can be used to install (download), upgrade, configure packages
- npm was created as a package manager for Node and became **standard way of managing packages for any JS package or JS framework**

### 1.5.3.1 Key Concepts for NPM Registry

**Package Discovery**
- Search functionality
- Package information
- Download statistics

**Version Management**
- Semantic versioning
- Dependency resolution
- Update mechanisms

**Security**
- Vulnerability scanning
- Package signing
- Security advisories

### 1.5.3.2 Package Manager

#### Each Programming language has its own package manager (application level)

#### Each operating system has its own package maanger (operating system level)

Mac - [Homebrew](https://brew.sh/)  
Linux - apt  
Windows - Chocolatey  

Step 1: Install homwbrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Actually, I can install Homebrew without administrator role.
It installs Homebrew in your home directory ($HOME) rather than a system-wide location that typically requires sudo access. 
```bash
mkdir -p $HOME/homebrew
curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C $HOME/homebrew
export PATH=$HOME/homebrew/bin:$PATH
```
Step 2: Install npm
```
brew install node
```

Step 3: Install libraries
```bash
npm i validator@13.15.0
```

**When the MacOS takes the long time to install npm, there is nvm method to do so**  
Node Version Manager (NVM) is a tool for managing multiple versions of Node.js and npm.  


Step 0: Run the Installation Script
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

Step 1: Create the .zshrc file
```shell
touch ~/.zshrc
```

Step 2: Open the file
```shell
nano ~/.zshrc
```

Step 3: Add NVM Initialisation Commands
```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
Step 4: Save and Exit, press Ctrl + X, then Y, then Enter to save and exit

Step 5: Source the file to reload 
```shell
source ~/.zshrc
```
Step 6: Install a Specific Node.js Version
```shell
nvm install 23
```

## 1.5.4 NPM CLI

Used to interact with npm registry (a vast library)

### 1.5.4.1 Common Commands for NPM CLI

The npm Registry is the package repository for JS packages, and npm CLI is the CLI tool to **interact with the registry** to install, upgrade, remove, publish packages.

```bash
# Initialise a new project
npm init

# Install a package
npm install validator

# Install specific version
npm install validator@13.5.0

# Install package and save as development dependency
npm install --save-dev jest

# Remove a package
npm uninstall validator

# List installed packages
npm list

# Update packages
npm update
```
### 1.5.4.2 package.json

**A configuration file used in Node.js projects to manage the metadata, dependencies, scripts, and configurations for the project, it acts as the central hub for defining and managing a project's setup, scripts, and external libraries**

- Everytime the NPM CLI installs a package, the package.json updates automatically
- This automatic synchronisation ensures that the project's dependencies are always accurately documented
- When someone else clones the project, they can simply run npm install, and NPM CLI will read the package.json file and recreate the exact same dependency structure on their machine

```json
{
    "name": "teamable",
    "version": "1.0.0",
    "descirption": "Team member profile management application",
    "dependencies": {
        "validator": "^13.7.0",
        "datepicker-js": "~0.1.1"
    }
}
```
#### dependencies
There are packages required for the application to run in **production**:
- ^ means accept minor version updates (13.7.0 to 13.99.99)
- ~ means accept only patch updates (0.1.1 to 0.1.99)
- No prefix means use exactly this version

For example, `express`, `lodash`, `moment`

#### devDependencies
These are packages only needed **during development**, such as:
- Testing frameworks
- Build tools
- Development servers
- Linters and formatters

For example, `jest`, `nodemon`, `webpack`

### 1.5.4.3 Basic CLI Commands

**Navigation Commands**
```bash
# Show current directory
pwd

# List directory contents
ls

# Change directory
cd directory_name

# Go up one directory
cd ..

# Go to home directory
cd ~
```

**File and Directory Operations**
```bash
# Create directory
mkdir new_directory

# Create file
touch new_file.txt

# Remove file
rm file.text

# Remove directory
rm -r directory_name
```

**Copying and moving**
```bash
# Copy file
cp source.txt destination.txt

# Move/rename file
mv old_name.txt new_name.txt
```

**File Permissions**
```bash
# View permissions
# r = 4, w = 2, x = 1
ls -l
-rw-r--r-- 1 user group file.txt

# Change permissions
# 6 is rw for owner, 4 is r for group, 4 is r for others
chmod 644 file.txt
```


## 1.5.5 Vue.js

### 1.5.5.1 Basic Components Required
- **Package.json**: Defines project dependencies and scripts
- **index.html**: Contains a single root div element
- **main.js**: Entry point that connects Vue components to HTML
- **.vue files**: Components containing template, script, and style sections

### 1.5.5.2 Essential VueJS Dependencies
- **vue**: The Vue.js framework itself
- **core-js**: For JavaScript version compatibility
- **@vue/compiler-sfc**: Compiles vue components
- **@vue/cli-service**: Provides development server and build tools

Find the package.json to check the dependencies [here](./vuejs-tutorial/package.json)

### 1.5.5.3 Vue Component Structure

<u>Components split the UI into independent and reusable pieces, known as a **Single-File Component**</u>

<div style="text-align: center;">
    <img src="./src/single_file_component.png" alt="sfc">
</div>

**Three Main Sections**:
- `<template>`: Contains the HTML markup
- `<script>`: Contains component logic and data
- `<style>`: Contains component-specific CSS

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

### 1.5.5.4 Key VueJS Features

#### Nested Components
- Components allow us to **split the UI into independent and reusable pieces**
- Allow us to think about each piece in isolation
- A Vue component needs to be "registered" so that Vue knows where to locate its implementation when it is encountered in a template

Step 1: Export Header with properties in the Header.vue
```js
export default {
    name: 'Header',
    props: {
        title: String,
        action: String,
        color: String,
        bgColor: String
    }
}
```
Step 2: Import Header and export App with components in the App.vue
```js
import Header from './Header.vue'
export default {
    name: 'App',
    components: {
        Header
    }
}
```

Step 3: create the app instance and mount to div of index.html
```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

<div style="text-align: center;">
    <img src="./src/vue-logic.png" alt="sfc">
</div>

### Attribute Bindings: to bind attributes, we use v-bind, v-on

#### 1. Styling Binding
- Use :attribute syntax for binding to HTML attributes

#### 2. Event Handing, v-on or "@"
- Use @click instead of onclick
- Define methods in the methods section of component
- "@" is shorthand for "v-on"
- **Attaches an event listener** to the element

#### 3. v-bind or ":"
- One of a number of **built-in special attributes (also called directives)** that vue provides
- Start with the "v-" predix. Colon ":" is shorthand for "v-bind" 
- Declare that "img" is a variable or reference rather than a string

<div style="text-align: center;">
    <img src="./src/data_binding.png" alt="sfc">
</div>

```js
<template>
    <header>
        <h1 :style="{ color: color }">{{ title }}</h1>
        <button @click="handleClick" :style="{ backgroundColor: bgColor }">{{ action }}</button>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        action: String,
        color: String,
        bgColor: String
    },
    methods: {
        handleClick() {
            alert(`You clicked the ${this.action} button!`);
        }
    }
}
</script>

<style>
button {
    background-color: aquamarine;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;}

h1 {color: chocolate}
</style>
```

#### 4. `data()` Function to return reference outside of script
- Used to declare the reactive state of a component. Return the **initial state**.
- It's a JS object that will be made reactive by Vue, when the function is called on creation of the component.
- Define data in the `data()` function
- Access component data using `this` keyword in methods
- Export components using `export` default
```js
import image from "./team_background.jpg"
export default {
    name: 'App',
    data () {
        return {
            img: image,
        }
    },
}
```

#### 5. v-bind or ":"
- One of a number of **built-in special attributes (also called directives)** that vue provides
- Start with the "v-" predix. Colon ":" is shorthand for "v-bind" 
- Declare that "img" is a variable or reference rather than a string

```js
<img :src="img" alt="Profile Background"/>
```

#### Text Interpolation, Parameterise the components
- To bind the values
- Use {{ variableName }} for text interpolation

#### v-model 
- Use v-model for two-way data binding with form inputs
- Updates the template whenever **the model (data)** changes and updates the model whenever **the template** changes
- It **reduces the complexity of keeping user input consistent** with the application data model

```js
<span>Name: </span><b id="name">{{ name }}</b> //this is the template

<span>Name: </span>
<input type="text" v-model="name"/> //this is the model (data)

export default {
    name: 'App',
    data () {
        return {
            name: "Ivy Li",//this is the default value for the template
        }
    }}
```

#### Conditional Rendering, v-show
- Use v-show for toggling element visibility
- Controlled through boolean variables in component data
- Access component data using `this` keyword in methods
    - "this" refers to the component instance
    - All data object properties of the component can be accessed with "this"

```js
<div v-show="!isEditMode">

export default {
    name: 'App',
    data () {
        return {
            isEditMode: false,//this is the default value for the template
        }
    },
    methods: {
        handleEditProfile () {
            this.isEditMode = !this.isEditMode //"this" means 
        }
    },
}
```

#### Summarise Best Practices
- Break down large components into smaller, resusable ones
- Use component-scoped styling
- Keep components focused on a single responsibility
- Utilise Vue's built-in directives like v-model instead of manual DOM manipulation
- Follow Vue's naming convention (PascalCase for components)
- Clearly list all passed parameterised properties in the `props` with expected data type

### 1.5.5.5 Transpiling with Vue CLI and Compiler-sfc

#### The function of serve command
- Compiles or transpiles Vue.js to vanilla JavaScript
- Starts a dev server and serves the application to the brower

Step 1: Structure the name of folders and locations of index.html, main.js, App.vue and Header.vue to match the default, cause the cli is looking for files in the folders with the default names
- node_modules: auto-generated folder, containing all installed libraries for the app
- src: source folder, it contains all the Vue.js components and JS files
- public: public folder, `.index` file is located here as well as any other static assets

Step 2: Because the CLI is not installed in the operating system, use the location to start the binary file (CLI library)
```bash
node_modules/@vue/cli-service/bin/vue-cli-service.js serve
```
Options for Step 2: Add scripts in the package.json
- Convenient way to **bundle common shell commands** for your project
- Benefit: Commands are shared amongst everyone using the codebase, **ensuring that everyone is using the same command with same configuration options**
- npm knows where to find the vue-cli-service, so do not need to point out the route

```json
"scripts": {
        "serve": "vue-cli-service serve"
    }
```

And then npm run <the name of the script>
```bash
npm run serve
```

Step 3: Check the app with the local http: (http://localhost:8080/)
- Resource get requested via http
- Resource can come from my own computer (localhost) or from anywhere on the web

#### Wrap Up for Development Server
- Use npm run serve to start development server
- Automatic hot-reloading when files change
- Compilation of Vue files to brower-compatible JavaScript


## 1.6 NodeJS

### 1.6.0 Localhost
- The hostname or the **computer that is currently in use to run the program**
- So it means "this computer" in a network
- Used for testing purposes in development, not in actual production

### 1.6.1 Port
- Ports are **virtual places within an operating system**, where network connections start and end
    - Every machine has a range of ports available
    - These ports can be allocated to specific applications
    - Every application or service, runs and is available on a specific port

**Standard Port**
**Port 80** is the standard port used by web servers

### 1.6.2 HTTP Communication
HTTP provides the foundation for frontend-backend communication:
- **HTTP requests** from frontend to backend are called "requests"
- **HTTP responses** from backend to frontend are called "responses"
- **HTTP URLs** consist of protocols (http/https), hostname, port, and endpoint

> [!IMPORTANT]
> HTTP Protocol
> - System of rules that define how data is exchanged over internet
> - HTTP stands for **Hyper Text Transfer Protocol**
> - HTTP was originally created to send HTML files
> HTTPS is HTTP with **encryption** and verification


<div style="text-align: center;">
    <img src="./src/http_communication.png" alt="http">
</div>

**HTTP Response Status Codes**
- Indicate whether a specific HTTP request has been successfully completed
    - 200 OK 
        - Request **succeeded**
    - 304 Not Modified
        - Indicates to the brower that there is **no need to retransmit** the requested resources
        - It's an implicit redirection to a cached resource
    - 404 Not Found
        - Server cannot find the requested resource
    - 400 Bad Request
        - HTTP Request must be fixed
    - 500 Internal Server Error
        - Some error on the server side
        - Best to retry

<div style="text-align: center;">
    <img src="./src/http_response_status_codes.png" alt="http">
</div>


### 1.6.3 URL
**Uniform Resource Locator** It is a reference to web resource, and combined with HTTP protocal, Hostname and File name (or port), or **URI Uniform Resources Identifier**

### 1.6.4 IP Addresses
- Address of the server that is hosting the web application
- A host or website on the internet is identified by a **host name**
- Host names are mapped to IP addresses automatically

> [!NOTE]
> - IP address is a **unique address** that **identifies a device on the internet** 
> - Every machine on the internet has an IP address


### 1.6.5 JSON Data Exchange
JSON serves as the **universal language between frontend and backend**:
- JSON (JavaScript Object Notation) is the standard format for data exchange
- All programming languages can understand and process JSON

- `JSON.parse()` Convert to JS object
- `JSON.stringify()` Convert JS object into JSON string

<div style="text-align: center;">
    <img src="./src/json_example.png" alt="json">
</div>


### 1.6.6 NodeJS (Backend Implementation)
NodeJS provides a powerful platform for building backend applications:
- Express.js is a popular NodeJS framework that simplifies backend development
- Backend serves frontend files (HTML, CSS, JS) when users first access the application
- **The `require()` function in NodeJS is equivalent to `import` in frontend JavaScript**

**Express**
- A web application framework
- Provides a set of features for web apps
- Helps to manage a server and routes

#### 1.6.6.1 Middleware
Sit between a request and a response, acting as a processing layer in the application workflow.

```js
app.use(express.json())
app.use('/', express.static(_dirname + '/'))
```

#### 1.6.6.2 POST - Sending data to backend
List to achieve 
1. index.html  
**HTTP Messages (Request and Responses) consist of Header and Body**
- Metadata is in the HTTP Header
- "Payload" is the information or data sent in the HTTP message body
```js
payload = {
    task: inputValue
}

res = await fetch('/save-task', {  //first parameter is the endpoint (URL)
    method: 'POST', //indicate the desired action o be performed for a given resource
    headers: {
        'Accept': 'application/json', //we understand json language
        'Content-Type': 'application/json' //we speak json language
    },
    body: JSON.stringify(payload) //transform payload to json format
})

josnRes = await res.json()
console.log(jsonRes);
```
2. server.js
- set the route with `express.static(__dirname + '/')`
- register middleware to parse JSON bodies
- set the http method is post
- grab data with `req.body`
- response sends frontend the log
- local server can also print the log

```js
app.use(express.json()); //register middleware to parse JSON bodies
app.use('/', express.static(__dirname + '/'))

app.post('/save-task', function(req, res) {
    const taskObj = req.body //get data from payload (body)
    // next step is to connect to the database and save the task
    console.log('Task received:', taskObj.task);
    res.send({savedTask: taskObj.task}); // send back the response to claim the success
})
```

step 1: grab data from input, and turn it to json format with `stringify`  
step 2: set the endpoint (route) in the `fetch()` call at which the client can get access to it, endpoint is not a file path  
step 3: set the method in the `fetch()` call means that Send data to the server (POST)  
step 4: the sever can get data from the body, translate json to javascript object first with `app.use(express.json())` and print it in the console of server and also send back a response for confirmation  
step 5: when the server send back with the **response**, the frontend parses it as JSON with `.json()`  
optional step 5: console.log() print the results  
step 6: set as **asynchronous** with `await`, it will not block the frontend when `fetch` data, meanwhile, remember to set related parent function `async` as well  


#### 1.6.6.3 GET - Frontend Asking for Data
List to achieve
1. index.html
```js
async function loadTasks() {
            res = await fetch('get-tasks', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'  
            }})
            jsonRes = await res.json();
            
            // Load prepared tasks into the list
            ulEl = document.getElementById('tasks');
            for (task of jsonRes.tasks) {
                const li = document.createElement('li');
                li.textContent = task;
                ulEl.appendChild(li);
            }
        }
```
```js
<body onload="loadTasks()"> //After loading the entire page, run the function
```
2. server.js
Set the same endpoint `get-tasks` and use `get` to provide some data like an array
```js
app.get('/get-tasks', function(req, res) {
    const tasks = [
        "Write JS code",
        "Write HTML code",
    ]
    res.send({tasks: tasks}); //response sends the data and print it in the respoonse
})
```

step 1: Set the endpoint on the server using `app.get('/get-tasks')`, defines where the client can request data from  
step 2: On the frontend, use `fetch()` to make a request to that endpoint  
step 3: The server sends back data using `res.send()`  
step 4: The frontend read the data with `res.json()` to parse the response into a JavaScript object  
step 5: Always makes the fetch call **asynchronous**, so it does not block the rest of the code, with `await` and `async` 

>[!NOTE]
> Backend endpoints **define the API interface for frontend communication**:
> - Endpoints are URLs that handle specific frontend requests
> - End endpoints serves a specific purpose (e.g., /get-profile, /update-profile)

<div style="text-align: center;">
    <img src="./src/endpoint_create.png" alt="endpoint">
</div>

#### 1.6.6.4 Combine vue.js and node.js with the same serve
The good thing is that it can use package.json together, add `express` in the package list then use `build` to compile vue.js to vanilla js which are the final static files (HTML, CSS, JS) 
```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "start": "node server.js"
  }
```
The compiled frontend files will be in the `dist` folder and can change the endpoint in the server.js, `app.use('/', express.static(__dirname + '/dist'));`

The second thing is to grab inital value from server.js and send it to app.vue
for the `App.vue`  
Have a method nanmed  
```js
async fetchUserProfile() {
            const res = await fetch('/get-profile')
            return await res.json()
        }
```
and then `created()` call when load the full page
```js
async created () { //is called when the component instance was created
        const userData = await this.fetchUserProfile()
        this.name = userData.name || ""
        this.email = userData.email || ""
        this.position = userData.position || ""
        this.location = userData.location || ""
        this.skills = userData.skills || ""
    },
```
for `server.js`, provide the data with `send`, always use the same endpoint
```js
app.get('/get-profile', function(req, res) {
  // Get data from the database
  const response = {
    name: "Ivy Li",
    email: "xiangivyli@gmail.com",
    position: "Data Engineer with full stack experience",
    location: "Bristol, UK",
    skills: "Problem Solving"
  }
  res.send(response);
});
```

The third thing is to send updated data from Frontend to Backend.
For `App.vue` file  
step 1 point the endpoint, and method is `POST`, imaging it is the post office ready to send out parcel
```js
async updateUserProfile(payload) {
    const res = await fetch('/update-profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    return await res.json()
    }
```
step 2 where to get the parcel, using the update function to get payload, parameters are from the inputs, and also log the new data in console of browser  
```js
async handleUpdateProfile () {
    const payload = {
            name: this.name,
            email: this.email,
            position: this.position,
            location: this.location,
            skills: this.skills
            }
    const resJson = await this.updateUserProfile(payload)
    console.log(resJson)
    ...}
```

### 1.7 Common Debugging Tools
**Browser Developer Tools**
- Network tab for monitoring HTTP requests/responses
- Console for JavaScript errors and logs
- Source tab for debugging JavaScript code

**Server-side logging**
- Console.log statements in NodeJS
- Error handling and stack traces
- Request/response monitoring

**API testing tools**
- Postman for testing endpoints
- curl for command-line testing
- Brower extensions for API development

### 1.8 Best Practices
- Always validate data on the backend before processing
- Use appropriate HTTP methods for different operations
- Include proper error handling and status codes
- Implement security meansures:
    - Use HTTPS for data encryption, Validate and sanitise all input data, Implement proper authentication/authorisation, Use enironment variables for sensitive configuration
- Keep frontend and backend concerns separate
- Use meaningful endpoint names and consistent API design
- Implement proper logging and monitoring
- Handle CORS (Cross-Origin Resource Sharing) appropriately
- Document your API endpoints and expected data formats


### 1.9 MongoDB

#### 1.9.1 Database Type
**Key-Value** Database
- Best for simple, fast data storage
- Store data as key-value pairs
- Primarily used as cache databases
- Limited in schema complexity
- Data stored in memory for quick access  

For example: Redis, Memcached, etcd from Kubernetes  

**Column** Databases
- Suitable for handling unstructured data
- Values divided into multiple columns
- No predefined schema required
- Excellent for time series data and loT applications
- Easily scalable across multiple servers  

For example: Cassandra, HBase  

**Document-Oriented** Databases
- Perfect for general-purpose applications
- Store data in documents (JSON-like format)
- Schema-less structure
- Good for mobile apps, games, content management
- Faster read operations but slower updates  

For example: MongoDB, DynamoDB, CouchDB  

**Relational** Databases
- Most widely used database type
- Data organised in tables with rows and columns
- Requires strict schema upfront
- **ACID Compliant** (Atomic, Consistent, Isolated, Durable)
- Excellent for structured data and complex relationships  

For example: MySQL, Postgresql  

**Graph** Databases
- Optimal for handling complex relationships
- Perfect for social networks, recommendation engines
- Uses edges to connect records directly
- Efficient for detecting patterns in data  

For example: Neo4j, Dgraph  

**Search** Databases
- Specialised for full-text search capabilities
- Creates indexes for efficient searching
- Often used alongside primary databases
- Optimised for fast search operations  

For example: ElasticSearch, Solr  





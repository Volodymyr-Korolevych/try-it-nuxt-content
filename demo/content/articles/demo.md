---
title: Demo
description:
---

#### \<try-it-...> component variants

There are three variants of the \<try-it-...> component: "Button", "Block" and "Full screen". 

* The first two are used inside markdown document: 
    * **Button** \<try-it-button> component adds button "TryIt" below some code block and pressing this button will act as redirect to the full screen mode \<try-it-page> with the same snippet of code for evaluation;
    * **Block** \<try-it-block> - this component transforms  code block into an editable one in place and adds buttons section and evaluation screen below the snippet. 
* Third  **Full screen** \<try-it-page>- component is completely equivalent to a  **Block**, but it occupies the entire screen, allows user to edit/run/evaluate the code, and then return to markdown document to continue reading ("Back To Read" button).

#### Block Example
Example with ALERT (no console output):
> Remarks:
> * the code block is editable;
> * the button Run wil execute JavaScript;
> * the user can update it: type "console.log" instead of "alert"
> * the button Reset will restore the original code block after user makes changes to the code;
> * the button Full will redirect to Full Screen mode

```javascript[JavaScript]
'use strict'

function sayHi() {
  alert('Hello!')
}
window.sayHi()
```
<try-it-block id="ex0"></try-it-block>

#### Button Example
* the button TryIt will redirect to the Full Screen mode
```javascript[JavaScript]
'use strict'

function sayHi() {
  alert('Hello!')
}
window.sayHi()
```
<try-it-button id="ex1"></try-it-button>

#### Full screen mode
Full screen can be reached only from "**block**" or "**button**" modes.
Full screen mode allows user to edit/run/evaluate code block and then return to continue reading of the markdown document.  

#### Example: Button and Full Screen mode (HTML document) 
```html[example]
<html>
 <head>
  <title> Page with JavaScript code example</title>
  <script>
            alert ( "Hello World!");   
  </script>
 </head>
 <body>
        It is the main page body text  
 </body>
</html>
```
<try-it-button id="exh0"></try-it-button>

#### Vue.js Example in **Block** mode (HTML document with external libraries) 
 
```html[example]
  <html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            {{ message }}
        </div>
        <script>
            var app1 = new Vue({
            el: '#app',
            data: {
                message: 'Hello everybody!'
            }
            })
        </script>
    </body>
</html>
```
<try-it-block id="exh1"></try-it-block>

#### JavaScript Function Example with no **console.log** 
This example produces empty output into console, but in this case Evaluate button helps to see the result of function execution:  

```javascript[JavaScript]
[4,1,2,1,4].reduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
});
```
<try-it-button id="ex1"></try-it-button>


<p style="margin:0; height:8px;">&nbsp;</p>

#### MDN Example "Concurrency model" from [[MDN]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) (JavaScript code)

```javascript[JavaScript]

(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('Callback 1: this is a msg from call back');
  }); // has a default time value of 0

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('Callback 2: this is a msg from call back');
  }, 0);

  console.log('this is the end');

})();
```
<try-it-block id="ex3"></try-it-block>

<p style="margin:0; height:8px;">&nbsp;</p>

#### W3School Example "Linear Gradient" from [[w3schools]](https://www.w3schools.com/css/css3_gradients.asp) (HTML)

```html[html]
<!DOCTYPE html>
<html>
<head>
<style>
#grad1 {
  height: 200px;
  background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(red, yellow);
}
</style>
</head>
<body>

<h1>Linear Gradient - Top to Bottom</h1>
<p>This linear gradient starts red at the top, transitioning to yellow at the bottom:</p>

<div id="grad1"></div>

</body>
</html>
```
<try-it-block id="ex4"></try-it-block>
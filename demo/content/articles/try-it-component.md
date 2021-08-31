---
title: Demo
description:
---

### Modes

There are three modes of \<try-it-...> components:

* Markdown document modes: 
    * **Button mode** \<try-it-button> - button "TryIt" appears under the snippet and sends reader to the full screen mode;
    * **Block mode** \<try-it-block> - snippet is transformed into an editable one and three buttons and evaluation screen appear under the snippet.
* **Full screen mode** \<try-it-page>- the same as a block mode, but occupies full screen and allows user to edit/run/evaluate and then go back with use of additional button "Back To Continue Reading".

#### Block Examples
Example with ALERT (no console output here):
```javascript[JavaScript]
'use strict'
function sayHi() {
  alert('Hello!')
}
window.sayHi()
```
and just ater code-block it should be placed try-it-block component:

- \<try-it-block id="1">\</try-it-block>

That is all. It will look now like following:

```javascript[JavaScript]
'use strict'

function sayHi() {
  alert('Hello!')
}
window.sayHi()
```
<try-it-block id="ex0"></try-it-block>

#### Button
Put
-  \<try-it-button id="2">\</try-it-button>
under code-block.

Button "Try It" will be added under the codeblock and will direct to full screen evaluation window

#### Full screen
Full screen mode is reached only from previous modes: "block" or "button" mode.
Full screen mode allows user to edit/run/evaluate code block and then to return to the corresponding place  

#### Example Button mode and Full Screen mode 
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

#### Example with vue.js starting page
 
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


```javascript[JavaScript]
[4,1,2,1,4].reduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
});
```
<try-it-button id="ex1"></try-it-button>


```javascript[JavaScript]
[4,1,2,1,4].reduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
});
```
<try-it-block id="ex2" theme="base16-dark"></try-it-block>

Example "Concurrency model" from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

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

Example "Linear Gradient" from [w3schools](https://www.w3schools.com/css/css3_gradients.asp)
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
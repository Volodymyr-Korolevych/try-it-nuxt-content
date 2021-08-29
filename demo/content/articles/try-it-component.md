---
title: Try-It-Components Demo
description: 'Introduction/demo for TryIt Component'
---

## TryIt Component for nuxt/content



### Introduction

Try-It component is useful for technical writers who use code snippets to demonstrate JavaScript or HTML language peculiarities. 
 <try-it-img src="nuxt-content.png" alt="ok"></try-it-img> 
Tri-It component adds capability to evaluate/run JavaScript (or HTML) snippet just on place, or in full screen mode.
The component is used inside markdown content and does not break usual style of markdown text and formatting.

### Modes

There are three modes of try-it-component:

* Markdown document modes: There are two modes of the component inside markdown document:
    * **Button mode** - button "TryIt" appears under the snippet and sends reader to the full screen mode;
    * **Block mode** - snippet is transformed into an editable one and three buttons and evaluation screen appear under the snippet.
* **Full screen** mode - is the same as a block mode, but occupies full screen and allows user to edit/run/evaluate and then go back with use of additional button "Back To Continue Reading".

### Usage

TryIt component doesn't require special preparation for JavaScript or HTML code snippets. For making it work it should be used usual codeblocks (see [link](https://content.nuxtjs.org/writing#codeblocks)). 
#### Block
Example:
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


## Setup

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

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


## Inspiration

Component development was inspired by MDN live examples and uses console support taken from [MDN BoB](https://github.com/mdn/bob/tree/master/editor/js/editor-libs) and CodeMirror library.
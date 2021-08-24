---
title: Try-It-Component
description: 'Introduction/demo for TryIt Component'
---

## TryIt Component for nuxt/content

Try-It component is useful for technical writers who use code snippets to demonstrate JavaScript or HTML language peculiarities. 
 <try-it-img src="nuxt-content.png" alt="ok"></try-it-img> 
Tri-It component adds capability to evaluate/run JavaScript (or HTML) snippet just on place, or in full screen mode.
The component is used inside markdown content and doesn't break usual style of markdown text and formatting.

There are two modes of Try-It block:
- "button mode" - button "TryIt" appears under the snippet and sends reader to the full screen mode;
- "block mode" - snippet is transformed into the editable one and three buttons and evaluation screen appear under the snippet.

Full screen mode resembles block mode with one new button "Back To Continue Reading".

TryIt component doesn't require special preparation for JavaScript or HTML code snippets. For making it work it should be used usual codeblocks (see [link](https://content.nuxtjs.org/writing#codeblocks)). 

For example:
```javascript[JavaScript]
'use strict'
function sayHi() {
  alert('Hello!')
}
window.sayHi()
```
and just ater code-block it should be placed try-it component:

- \<try-it-block id="1">\</try-it-block>

That's all. With TryIt Block it will look like following:

```javascript[JavaScript]
'use strict'

function sayHi() {
  alert('Hello!')
}
window.sayHi()
```
<try-it-block id="ex0"></try-it-block>


## Nuxt JS custom module TryIt



sdf

```html[example]
<html>
 <head>
  <title> Сторінка з прикладом коду JavaScript </title>
  <script>
alert ( "Hello World!");   
  </script>
 </head>
 <body>
Це текст основної сторінки  
 </body>
</html>
```
<try-it-button id="exh0"></try-it-button>

sdf
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
                message: 'Привіт всім!'
            }
            })
        </script>
    </body>
</html>
```
<try-it-block id="exh1"></try-it-block>

sdf

sdf




## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

```javascript[JavaScript]
[4,1,2,1,4].reduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
});
```
<try-it-button id="ex1"></try-it-button>

ert
ert

ert
ert

```javascript[JavaScript]
[4,1,2,1,4].reduce(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
});
```
<try-it-block id="ex2"></try-it-block>


## Inspiration

Component development was inspired by MDN live examples and uses console support taken from [MDN BoB](https://github.com/mdn/bob/tree/master/editor/js/editor-libs) and CodeMirror library.
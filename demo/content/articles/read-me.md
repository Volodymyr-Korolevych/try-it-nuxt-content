---
title: Try-It Module description 
description: 
---
<p>&nbsp;</p>

### Introduction  

Try-It module is created specifically for nuxt/content environment.
It contains couple of vue components which do convertion of code-blocks into editable and executable ones (using CodeMirror Editor).

Try-It components are useful for technical authors who use code snippets to demonstrate JavaScript or HTML language specific examples or behaviours. 

Try-It components add capability to evaluate/run JavaScript (or HTML) snippet just in place, or in full screen mode.

You can use it selectively by applying separately to all or some code blocks on the page.

The components are used inside markdown content and do not violate style of markdown text and formatting. They look as regular vue components within a markdown (for writers), and like editable and executable code snippets for readers.
<p style="margin:0; height:8px;">&nbsp;</p>

### Dependencies  

[**vue-codemirror**](https://www.npmjs.com/package/vue-codemirror)


### Usage  

Here we should define three categories of users:
* Developer - person who creates/supports  web-site, based on nuxt/content technology. He is to follow Try-it-module setup instructions;
* Author - person who populates web-site with markdown documents. He/she decides which examples to use and whether they require to be explored (executed / evaluated / modified)  by reader;
* Reader - consumer of the technical papers.  

After setup is finished, the author will apply **\<try-it-block>** or **\<try-it-button>** components to some particular code examples. His work here is to insert **\<try-it-block>** or **\<try-it-button>** component text just after certain codeblock in the following way:

```md[markdown document]
    ```javascript[JavaScript]
    'use strict'
    function sayHi() {
      console.log('Hello!')
    }
    window.sayHi()
    ```
    <try-it-block id="1"></try-it-block>
    
```  

<p style="margin:0; height:8px;">&nbsp;</p>

When rendering a page, the **\<try-it-block> component** will convert a code block into an editable codeMirror snippet and add an output window, whose role is to display HTML output for html snippets and CONSOLE output for JavaScript snippets (by clicking the Run button). 

Finally, the reader will see the following picture:

```javascript[JavaScript]
'use strict'
function sayHi() {
  console.log('Hello!')
}
window.sayHi()
```
<try-it-block id="1"></try-it-block>  

<p style="margin:0; height:12px;"></p>

The **\<try-it-button> component** acts a bit simpler: it will only add a "Try It" button below the codeblock. This button will redirect the reader to the full screen **\<try-it-page>** component. Here is what the author does:

```md[markdown document]
    ```javascript[JavaScript]
    'use strict'
    function sayHi() {
      console.log('Hello!')
    }
    window.sayHi()
    ```
    <try-it-button id="1"></try-it-button>
```
Result for the reader is below. He/she can press TryIt button and will be redirected to full-screen - **\<try-it-page>** with the same code snippet:

```javascript[JavaScript]
'use strict'
function sayHi() {
  console.log('Hello!')
}
window.sayHi()
```
<try-it-button id="1"></try-it-button>  
  
<p style="margin:0; height:12px;">&nbsp;</p> 

**\<try-it-page> component** occupies a full page, it is not used in markdown documents. The  page containing this component should be added (by developer) to the project into ***/pages*** directory on setup process. This page looks like: 

```html[code.vue]
<template>
  <try-it-page />
</template>
```
It behaves completely like \<try-it-block>, but on a separate page. The reader after exploring code example will return to reading page with the button "Go Back To Continue Reading". 

<p style="margin:0; height:8px;">&nbsp;</p>

**\<try-it-img>** component is additional, complementary. It adds easy solution to display images located in ***/assets/images*** folder. 


### Setup
  
<p style="margin:0; height:12px;">&nbsp;</p>
  
Insert following lines into ***nuxt.config.js***: 
```js[nuxt.config.js]
modules: [
   '@nuxt/content',
   . . .
   'nuxt-content-try-it-module'
],
  tryIt: {
    buttons: {
     . . .
    },
    page: 'code',
    theme: 'default'
  },
```
or use shorter notation:
```js[nuxt.config.js]
modules: [
   '@nuxt/content',
   . . .
   ['nuxt-content-try-it-module',
     {
       buttons: {
        . . .
       },
       page: 'code',
       theme: 'default'
  }
],
```
Add into ***css section*** in ***nuxt.config.js*** links to css files of CodeMirror themes you want to use:

```js[nuxt.config.js]
  css: ['codemirror/theme/base16-dark.css',
        'codemirror/theme/dracula.css',
        . . . . .
       ],
```

Create page for \<try-it-page>:

```html[code.vue]
<template>
  <try-it-page />
</template>
```
> Name of this page can be customized in **options** (default is "code.vue")

<p style="margin:0; height:8px;">&nbsp;</p>

Install Try-it-module: 

```powershell[PowerShell]
$ cd demo
$ yarn add nuxt-content-try-it-module
# generate static project
$ yarn generate
$ yarn start
```

## Nuxt directories

Try-It-module uses the following special directories of a nuxt project: 

### `assets`

The assets directory contains two important subfolders:
* ***/assets/css***  - is used for keeping tryIt.css file, 
* ***/assets/images*** - for images, added by customer, to display with the \<try-it-img> component 

### `static`

The static directory is important for Try-It components execution process, it keeps correspondent JavaScript and CSS files.

### `store`

Store is used for Try-It component settings, this folder should be kept.

### `pages`

Additinal page **code.vue** (default name) should be added to this folder manually. This page is necessary for ***\<try-it-page>*** implementation.

Text of this file is given hereabove in ***Setup*** section.

## Configuration
### `Settings`
Options JSON:

```json[options]
{
    buttons: {
      tryIt: "TryIt",
      run: "Run",
      reset: "Reset",
      value: "Evaluate",
      fullScreen: "FullScreen",
      backToRead: "BackToRead"
    }, 
    page: 'code',
    theme: 'default'
}
```
<p style="margin:0;">&nbsp;</p>

----------------------
| Option | Description |
|:--------|:-----------|
| buttons.tryIt | button caption for TRY-IT button in \<try-it-button> component |
| buttons.run | button caption for RUN button in \<try-it-block> and \<try-it-page>  components |
| buttons.reset | button caption for RESET button in \<try-it-block> and \<try-it-page>  components |
| buttons.value | button caption for EVALUATE button in \<try-it-block> and \<try-it-page>  components |
| buttons.fullScreen | button caption for button in \<try-it-block> component (same action as TRY-IT button |
| buttons.backToRead | button caption for GO BACK action in \<try-it-page>  component |
| code  | page name where \<try-it-page> component is put|
| theme  | the CodeMirror theme name  (corespondent css should be added to ***nuxt.config.js***, section css) |

--------------------------  
> 1) Default values shown in Options above will be applied by default unless user changes them in ***nuxt.config.js***
> 2) CodeMirror theme can be configured separately in every item of \<try-it-block> component (see Props). 

<p style="margin:0; height:8px;">&nbsp;</p>

### Props

```html[code.vue]
  <try-it-button id="string"></try-it-button>
  <try-it-block id="string" theme="string"></try-it-block>
  <try-it-page> </try-it-page>
  <try-it-img src="string" alt="string"></try-it-img>
```
--------------
#### \<try-it-button>, \<try-it-block>
* **id** (string) is required. The uer should check that all \<try-it-...> items have different id-s on the same Markdown page.
* **theme** (string) - not required. Used for CodeMirror theme, which can be changed for each \<try-it-block> on the same page. Make sure that css file for the theme is included in ***nuxt.config.js*** (CSS section). 

> The CodeMirror theme for \<try-it-page> is taken from **options** (see below).  
-----------------  

#### \<try-it-img>
* **src** (string) - the name of the image file
* **alt** (string) -  alternate text that is displayed when the cursor is over the image
----------------
### Carefully
> Don't use self-closing tags in nuxt/content/markdown (they are incorrectly rendered): 
>
><span style="text-decoration: line-through">\<try-it-button id="1" /></span>
> Requires \<try-it-button id="1">\</try-it-button>

### How it works

Step *Convert Regular Code Block into the CodeMirror Code Block*: 

Applies only for the \<try-it-block> component. A CodeMirror instance is created and populated with code block text extracted from a regular code block.  Regular code block is removed.

Step *Execute Run command*: 

An iFrame is inserted into the output block; it is filled with the certain HTML document, built on base of the text, populated into the codeMirror screen. This HTML document is rendered by browser and displayed in the output window. If \<script> tag is found in the HTML, script is executed as usual.  

If code block's type is "html" it is copied into iFrame without any change.

It code block's type is "js" or "javascript",  initial JavaScript snippet is wrapped into an html-template.

Any other type of code block is not accepted.

HTML template for the JavaScript snippet uses two external files: myConsole.css and myConsole.js. CSS is used to format output window,  JS - to intercept console commands and display result in the HTML document. 

Step *Execute Evaluate command*:

Applies only for JavaScript snippets in the form of expression.
It is rendered using the same HTML template with one addition: the evaluated expression is wrapped into the *console.log()* command.


### Acknowlegments

The development of the module was inspired by MDN live examples and uses console support taken from [[MDN BoB]](https://github.com/mdn/bob/tree/master/editor/js/editor-libs) and the CodeMirror library.

Much help in creating a nuxt module came from Jamie Kernow's blog [Creating a Nuxt module](https://medium.com/carepenny/creating-a-nuxt-module-1c6e3cdf1037).
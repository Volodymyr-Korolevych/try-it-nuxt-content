---
title: nuxt-content-try-it-module 
description: Learning how to use @nuxt/content to create a blog again
---


### Introduction
Try-It module is created specifically for nuxt/content environment.
It contains couple of vue components which do convertion of code-blocks into editable and executable ones (with usage of CodeMirror Editor).

Try-It components are useful for technical writers who use code snippets to demonstrate JavaScript or HTML language specific examples or behaviours. 

Tri-It components add capability to evaluate/run JavaScript (or HTML) snippet just on place, or in full screen mode.

The components are used inside markdown content and do not break usual style of markdown text and formatting.

### Dependencies

[vue-codemirror](https://www.npmjs.com/package/vue-codemirror)


### Usage

Try-it component is placed just ater codeblock:


```javascript[JavaScript]
'use strict'
function sayHi() {
  console.log('Hello!')
}
window.sayHi()
```
- \<try-it-block id="1">\</try-it-block>

This component converts codeblock into editable codeMirror snippet and adds output window, which will show HTML-output for html-snippets and CONSOLE-output for JavaScript snippets:

```javascript[JavaScript]
'use strict'
function sayHi() {
  console.log('Hello!')
}
window.sayHi()
```
\<try-it-block id="1">\</try-it-block>

```html[code.vue]
<template>
  <try-it-page />
</template>
```


Additional component **\<try-it-img>** is complementary and serves to show images, placed to ***/assets/images*** folder 


### Setup
Insert following lines into ***nuxt.config.js*** 
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
or you can use short notation:
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
Add into ***nuxt.config.js*** CodeMirror themes you want to use
```js[nuxt.config.js]
  css: ['codemirror/theme/base16-dark.css',
        'codemirror/theme/dracula.css',
        . . . . .
       ],
```
Install Try-it-module 
```powershell[PowerShell]
$ cd demo
$ yarn add nuxt-content-try-it-module
# generate static project
$ yarn generate
$ yarn start
```
## Nuxt directories
Try-It-module uses the following special directories of the nuxt project: 

### `assets`

The assets directory contains two important subfolders:
* ***/assets/css***  - used for keeping tryIt.css file
* ***/assets/images*** - for images, placed by customer, to be shown with \<try-it-img> component 

### `static`

The static directory is important for Try-It-Components execution process, it keeps correspondent JavaScript and CSS files.

### `store`

Store is used by Try-It-Components settings, it should be kept.

### `pages`

Additinal page **code.vue** (default name) should be added to this folder manually. This page is necessary for ***\<try-it-page>*** implementation.

Text of this file is done in ***Usage*** section hereabove.

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
| Option| Button name | Description |
|:----:|:------:|:-----------:|
| buttons | tryIt | button caption for \<try-it-button> component |
| buttons | run | button caption for RUN function in \<try-it-block> and \<try-it-page>  components |
| buttons | reset | button caption for RESET CHANGES function in \<try-it-block> and \<try-it-page>  components |
| buttons | value | button caption for EVALUATE function \<try-it-block> and \<try-it-page>  components |
| buttons | fullScreen | button caption for \<try-it-block> component (same function as "tryIt" button |
| buttons | backToRead | button caption for GO BACK function in \<try-it-page>  component |
| code | &nbsp; | page name for \<try-it-page>  component |
| theme | &nbsp; | theme name of codeMirror (corespondent CSS should be present in ***nuxt.config.js*** (section CSS) |


Default values will be applied if user did not change it in ***nuxt.config.js***

### Coution
* It is forbidden in nuxt/content/markdown to use self-closing tags: <span style="text-decoration: line-through">\<try-it-button id="1" /></span>
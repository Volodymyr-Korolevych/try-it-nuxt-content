---
title: Steps To Build  My Demo
description: Learning how to use @nuxt/content to create a blog again
---


## Links

https://content.nuxtjs.org/writing/#codeblocks
https://nuxtjs.org/blog/creating-blog-with-nuxt-content
https://github.com/nuxtlabs/demo-blog-nuxt-content


## Step 1. Fix build errors

### Prettier errors

```js[.eslintrc.js]
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
```

```js[.prettierrc]
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "endOfLine":"auto"
}
```

### Fix tailwind warning

```js[tailwind.config.js]
  future: {
    purgeLayersByDefault: true
  },
```

### Fix  caniuse-lite warning

```json[package.json]
  "caniuse-lite": "^1.0.30001251",
```

## Step 2. Add Prism Line numbers

```js[_slug.vue]
  
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

  mounted() {
    Prism.highlightAll()
  },
```

```css[_slug.vue]  
 pre[class*='language-'].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre[class*='language-'].line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}
.line-numbers-rows > span::before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
} 
```

## Step 3 Add Try-it module
  
yarn add https://github.com/Volodymyr-Korolevych/try-it-nuxt-content#master

```js[nuxt.config.js]
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-content-module-try-it'
  ],
  tryIt: {
    buttons: {
      tryIt: 'TryIt',
      fullScreen: 'Full'
    },
    page: 'code'
  },
  ```
  
## step 4. Modify my-first-blog-post.md article

```js[nuxt.config.js]
export default {
  nuxt: "is the best"
}
```
<try-it-block id=1></try-it-block>


```html[my-first-blog-post.md]
<p>code styling is easy</p>
```
<try-it-button id=2></try-it-button>

### Add **code** page

code.vue

<template>
  <try-it-page />
</template>

Add **hello.md** document


## Step 5. **Main step:** Check if site is alive in production (static build)

yarn generate
yarn start 

<p style="color:red;">Expecting **BAD** error</p>


<info-box>
  <template #info-box>
    DOMException: Node.appendChild: Cannot add children to a Text
  </template>
</info-box>




## Step 6. Convert to my demo, step by step 

### Step 6-1 Remove non-used articles

Only 3 articles are in site:
- hello.md
- my-first-blog-post.md
- steps-to-build-my-demo.md

***Rebuild***

### Step 6-2 Remove left half in _slug.vue

<div class="w-1/2">
</div>

modify rest to be shown on full page
***Rebuild and check if everything still works***

### Step 6-3 Remove tags

Empty **tags** in all three documents
Remove **tags** pages from ***content***
Remove tags from index.vue:
- topics div
- footer

```js[_slug.vue]
    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
```   

***Rebuild and check if everything still works***

### Step 6-4 Remove Author

- remove subdirectories ***> author*** and ***> tag***
- index.vue:
-  remove img
-  remove author
- _slug.vue
-  remove author
-  remove Table of Contents

***Rebuild and check if everything still works***

### Step 6-5 Remove Components

- remove files with components
- index.vue:
-    <TheHeader />
-
***Rebuild and check if everything still works***

### Step 6-6 Remove Author and image from .md files

### Step 6-7 Remove /assets/svg folder, remove prev/next component, add "Back" button to layouts/default
- remove link to image in _slug
- remove prev/next component and fix asyncData
- add Back button to layout

### Step 6-8 Move project to folder /demo

***Rebuild from **/demo** and check if everything still works***

### Step 6-8 Change link to  nuxt-content-module-try-it

1. yarn remove nuxt-content-module-try-it
2. nuxt.config.js: modules: 
- '../../src' // 'nuxt-content-module-try-it'
3. package.json: add dependencies:
-  yarn add  vue-codemirror


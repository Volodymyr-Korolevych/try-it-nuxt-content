<template>
  <div>
    <div class="flex-1 p-8 pl-16 overflow-y-auto">
      <h1 class="font-bold text-4xl ml-6">
        {{ article.title }}
      </h1>
      <p class="text-sm italic ml-6">
        {{ article.description }}
      </p>
      <br>

      <!-- content from markdown -->
      <nuxt-content class="line-numbers" :document="article" />
    </div>
  </div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('hello').fetch()
    return {
      article
    }
  },
  mounted () {
    Prism.highlightAll()
  }
}
</script>
<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p,
.nuxt-content pre,
.nuxt-content ul {
  margin: 1.2em 0;
}
.nuxt-content pre {
  background-color: #0000ff0d;
}
.nuxt-content pre code {
  font-weight: 500;
}
.nuxt-content p {
  text-align: justify;
  text-indent: 25px;
}
.nuxt-content ul {
  list-style-type: disc;
  margin: 0 45px;
}
.nuxt-content ul ul {
  list-style-type: circle;
  margin: 0 20px;
}
.nuxt-content blockquote {
  border-left: 2px solid grey;
  background: #f9f9f8;
  padding: 1px;
}
.nuxt-content table {
  margin-left: 20px;
}
.nuxt-content table th,
.nuxt-content table td {
  padding: 0 10px;
  border-bottom: 1px dashed grey;
}
.filename {
  font-size: 12px;
  width: 99%;
  text-align: right;
  display: block;
}
pre.line-numbers {
  margin-top: 0;
}

.icon.icon-link {
  background: white;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.my-drawer {
  position: absolute;
  top: 12px;
  left: 100%;
  margin-left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  padding-left: 4px;
  border: none;
}
.my-drawer:hover {
  background-color: #f2eeee;
}
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

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}
</style>

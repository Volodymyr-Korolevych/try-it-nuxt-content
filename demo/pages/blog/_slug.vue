<template>
  <div>
    <div >
      <NuxtLink id="back_button" to="/"></NuxtLink>
    </div>
    <article
      class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
    >
      <div
        class="relative xs:px-8 py-4 lg:px-16 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
      >
        <h1 class="font-bold text-4xl">{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <!-- content from markdown -->
        <nuxt-content class='line-numbers' :document="article" />
      </div>
    </article>
  </div>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug)
      .fetch()
      .catch(() => {
        console.error({ statusCode: 404, message: 'Page not found' })
      })
    return {
      article
    }
  },
  mounted() {
    Prism.highlightAll()
    }
}
</script>
<style>
#back_button {
  position: fixed; 
  top: 30px; 
  left: 18px; 
  z-index:5;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url(./assets/images/back-button.svg);
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
.line-numbers-rows > span::before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}
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
.nuxt-content h4 {
  font-weight: bold;
  font-size: 18px;
}
.nuxt-content ul {
  list-style: circle;
}
.nuxt-content ul ul {
	margin-left: 30px;
}
.nuxt-content tr td, .nuxt-content tr th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.nuxt-content blockquote {
	background-color: #e5f7f7;
	margin: 9px 0;
	padding: 5px 20px 1px;
}
</style>

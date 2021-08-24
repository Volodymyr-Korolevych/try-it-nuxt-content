<template>
  <div>
    <div style="position: fixed; top: 10px; left: 20px; font-weight: 700;z-index:5">
      <NuxtLink to="/"> Back </NuxtLink>
    </div>
    <article
      class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
    >
      <div
        class="relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
      >
        <h1 class="font-bold text-4xl">{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <!-- content from markdown -->
        <nuxt-content :document="article" />
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
</style>

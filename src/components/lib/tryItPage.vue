<template>
  <div class="relative flex flex-row">
    <div class="w-1/2 p-4">
      <client-only>
        <codemirror v-model="cText" class="codemirror" :options="cmOption" />
      </client-only>
    </div>
    <div class="flex p-4 w-1/2 pl-0">
      <div class="flex-initial w-auto -mt-1">
        <button class="butn" @click="runCode">
          {{ options.page.buttons[0] }}
        </button>
        <button v-if="lang == 'javascript'" class="butn" @click="evalCode">
          {{ options.page.buttons[1] }}
        </button>
        <button class="butn" @click="backToRead">
          {{ options.page.buttons[2] }}
        </button>
      </div>
      <div
        id="iframe-wrapper"
        ref="targetCode"
        class="flex-initial border border-solid border-gray-400"
      >
        <iframe />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',
        theme: 'default'
      },
      cText: ''
    }
  },
  computed: {
    ...mapState({
      codeText: state => state.tryIt.codeText,
      lang: state => state.tryIt.lang,
      backLink: state => state.tryIt.refBack
    }),
    options () {
      return this._options
    }
  },
  mounted () {
    this.cText = this.codeText
    this.cmOption.mode = 'text/' + this.lang
  },
  methods: {
    runCode () {
      const html = (this.lang === 'html') ? this.cText : this.$tryIt.runCode(this.cText)
      this.$tryIt.iFrameText(this.$refs.targetCode, html)
    },
    evalCode () {
      const html = this.$tryIt.evalCode(this.cText)
      this.$tryIt.iFrameText(this.$refs.targetCode, html)
    },
    backToRead () {
      this.$router.push(this.backLink.url + '?back=' + this.backLink.ref)
    }
  }
}
</script>
<style>
#iframe-wrapper iframe {
  @apply: w-full;
}
.butn {
  @apply block bg-gray-300 text-gray-800;
  @apply border border-solid border-gray-400;
  @apply p-2 pl-0 m-2 ml-0 w-24 h-8;
  @apply text-base leading-none cursor-pointer;
}
.butn:hover {
  @apply bg-gray-700 text-white;
}
.CodeMirror-lines {
  font-size: 14px;
}
#console code {
  width: 100%;
  height: 100px;
  white-space: pre;
  vertical-align: middle;
  word-break: break-word;
  overflow-y: auto;
}
</style>

<template>
  <div class="try-it-page ">
    <div class="codemirror-wrapper">
      <client-only placeholder="...wait">
        <codemirror v-model="cText" class="codemirror" :options="cmOption" />
      </client-only>
    </div>
    <div class="btns-and-iframe">
      <div class="buttons">
        <button class="butn" @click="runCode">
          {{ options.buttons.run }}
        </button>
        <button v-if="lang === 'javascript'" class="butn" @click="evalCode">
          {{ options.buttons.value }}
        </button>
        <button class="butn" @click="backToRead">
          {{ options.buttons.backToRead }}
        </button>
      </div>
      <div id="iframe-wrapper" ref="targetCode">
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
        lineWrapping: true,
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
    this.cmOption.theme = this._options.theme
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
      if (!this.backLink.url || !this.backLink.ref) this.$router.push('/')
      else 
      this.$router.push(this.backLink.url + '?back=' + this.backLink.ref)
    }
  }
}
</script>
<style>
@import "~/assets/css/try-it.css";
</style>


<template>
  <div class="try-it-block" :id="myId" :ref="myId" >
    <div class="codemirror-wrapper">
      <client-only placeholder="...wait">
        <codemirror v-model="codeText" class="codemirror" :options="cmOption" />
      </client-only>
    </div>
    <div class="btns-and-iframe">
      <div class="buttons">
        <button class="butn" @click="execute">
          {{ options.buttons.run }}
        </button>
        <button class="butn" @click="reset">
          {{ options.buttons.reset }}
        </button>
        <button class="butn" @click="full">
          {{ options.buttons.fullScreen }}
        </button>
      </div>
      <div id="iframe-wrapper" ref="targetCode">
        <iframe />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
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
      baseElem: {},
      lang: false,
      codeText: '',
      myId: 'try-it-' + this.id,
      options: this._options
    }
  },
  async mounted () {
    console.log("mount try-it-block, id=" + this.id)
    await this.$tryIt.findEl(this.$refs).then(() => {
      this.baseElem = this.$refs[this.myId].previousElementSibling
      let x = this.baseElem
      x.parentNode.removeChild(x);
      this.baseElem.style.display = 'none'
      this.codeText = this.baseElem.querySelector('pre code').textContent
      this.lang = this.$tryIt.langDetect(this.baseElem)
      this.cmOption.mode = 'text/' + this.lang
    })
    if (this.$route.fullPath.includes('back=')) {
      const m = this.$route.fullPath.split('back=')
      const elem = m[m.length - 1]
      if (elem === this.myId) {
        let el
        await this.$tryIt.findEl((el = document.getElementById(elem))).then(() => {
          this.$router.push({ hash: elem })
          el.previousElementSibling.scrollIntoView()
        })
      }
    }
  },
  methods: {
    execute () {
      const html = this.lang === 'html' ? this.codeText : this.$tryIt.runCode(this.codeText)
      this.$tryIt.iFrameText(this.$refs.targetCode, html)
    },
    reset () {
      this.codeText = this.baseElem.querySelector('pre code').textContent
      this.$tryIt.iFrameReset(this.$refs.targetCode)
    },
    full () {
      const url = new URL(location.href)
      this.$store
        .dispatch('tryIt/setCodeText', {
          code: this.codeText,
          lang: this.lang,
          back: {
            url: url.pathname,
            ref: this.myId
          }
        })
        .then(_ => this.$router.push('/' + this.options.page))
    }
  }
}
</script>
<style>
@import "~/assets/css/try-it.css";
</style>

<template>
  <div :id="myId" :ref="myId" class="p-2 w-full">
    <div style="font-size: 15px">
      <client-only placeholder="...wait">
        <codemirror v-model="codeText" class="codemirror" :options="cmOption" />
      </client-only>
    </div>
    <div style="display: flex; -items: center">
      <div style="align-self: flex-start; width: auto">
        <button class="butn" @click="execute">
          {{ options.block.buttons[0] }}
        </button>
        <button class="butn" @click="reset">
          {{ options.block.buttons[1] }}
        </button>
        <button class="butn" @click="full">
          {{ options.block.buttons[2] }}
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
    await this.$tryIt.findEl(this.$refs).then(() => {
      this.baseElem = this.$refs[this.myId].previousElementSibling
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
        .then(_ => this.$router.push('/' + this.options.page.name))
    }
  }
}
</script>
<style>
.CodeMirror {
  @apply h-auto border-0 border-solid border-gray-400;
}
.butn {
  @apply block bg-gray-300 text-gray-800;
  @apply border-0 border-solid border-gray-400;
  @apply p-2 m-2 ml-0 w-24 h-8;
  @apply text-base leading-none cursor-pointer;
}
.butn:hover {
  @apply bg-gray-700 text-white;
}
#iframe-wrapper {
  display: flex;
  flex: 10 150px;
  align-items: center;
  position: relative;
  display: inline-block;
  background-color: #fff;
  margin: 0;
  padding: 0 5px;
  border: 1px solid #eaf2f4;
  box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.1);
  height: 120px;
}
#iframe-wrapper iframe {
  width: 100%;
}
</style>

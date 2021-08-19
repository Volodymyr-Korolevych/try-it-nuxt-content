<template>
  <button v-if="lang" :id="myId" :ref="myId" class="butn" @click="click">
    {{ options.buttons.tryIt }}
  </button>
  <p v-else>
    Wrong Language
  </p>
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
      myId: 'try-it-' + this.id,
      options: this._options,
      lang: true
    }
  },
  mounted () {
    console.log("mount try-it-button, id=" + this.id)
    if (this.$route.fullPath.includes('back=')) {
      const m = this.$route.fullPath.split('back=')
      const elem = m[m.length - 1]
      if (elem === this.myId) {
        let el
        this.$tryIt.findEl((el = document.getElementById(elem))).then(() => {
          this.$router.push({ hash: elem })
          el.previousElementSibling.scrollIntoView()
        })
      }
    }
  },
  methods: {
    click () {
      const url = new URL(location.href)
      const elem = this.$refs[this.myId].previousElementSibling
      this.lang = this.$tryIt.langDetect(elem)

      const text = elem.querySelector('pre code').textContent
      this.$store
        .dispatch('tryIt/setCodeText', {
          code: text,
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


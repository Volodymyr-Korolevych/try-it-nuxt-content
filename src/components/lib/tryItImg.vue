<template>
  <img :src="imgSrc()" :alt="alt">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc () {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        return 'error'
      }
    }
  }
}
</script>

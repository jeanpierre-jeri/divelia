<template>
  <div ref="observer"></div>
</template>

<script>
export default {
  name: 'HomeObserver',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      observer: null
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        this.$emit('intersecting', { observer, el: this.$refs.observer })
      }
    }, this.options)
    this.observer.observe(this.$refs.observer)
  },
  destroyed() {
    this.observer.disconnect()
  }
}
</script>

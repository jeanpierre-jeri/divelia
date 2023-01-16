<template>
  <div class="Heart" :style="heartSize">
    <div class="Heart-empty">
      <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" fill="none">
        <path
          fill="#000"
          d="M10 3.83a4.92 4.92 0 0 0-5.232-.917c-.602.251-1.15.62-1.609 1.083-1.96 1.969-1.96 5.049.002 7.01l6.11 6.11a.83.83 0 0 0 1.1.318.826.826 0 0 0 .289-.249l6.18-6.18c1.96-1.96 1.96-5.04-.003-7.013a4.949 4.949 0 0 0-3.507-1.461A4.922 4.922 0 0 0 10 3.829Zm5.66 1.34c1.302 1.31 1.302 3.355 0 4.657L10 15.488l-5.66-5.66a3.263 3.263 0 0 1-.002-4.654 3.294 3.294 0 0 1 2.332-.977c.87 0 1.696.347 2.324.975l.417.417a.832.832 0 0 0 1.178 0l.417-.417c1.26-1.257 3.395-1.254 4.653-.001Z"
        />
      </svg>
    </div>
    <div class="Heart-full" :data-active="active">
      <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" fill="none">
        <path
          fill="#FC2016"
          d="M10 3.83a4.92 4.92 0 0 0-5.232-.917c-.602.251-1.15.62-1.609 1.083-1.96 1.969-1.96 5.049.002 7.01l6.11 6.11a.83.83 0 0 0 1.1.318.826.826 0 0 0 .289-.249l6.18-6.18c1.96-1.96 1.96-5.04-.003-7.013a4.949 4.949 0 0 0-3.507-1.461A4.922 4.922 0 0 0 10 3.829Zm5.66 1.34c1.302 1.31 1.302 3.355 0 4.657L10 15.488l-5.66-5.66a3.263 3.263 0 0 1-.002-4.654 3.294 3.294 0 0 1 2.332-.977c.87 0 1.696.347 2.324.975l.417.417a.832.832 0 0 0 1.178 0l.417-.417c1.26-1.257 3.395-1.254 4.653-.001Z"
        />
        <path
          fill="#FC2016"
          d="M3 9c-2-3.2.833-5 2.5-5.5L10 5c.167-.333 1.2-1.1 4-1.5 2.8-.4 3.5 3.833 3.5 6l-7.5 7C8.5 15.333 5 12.2 3 9Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeartIcon',
  props: {
    active: Boolean,
    size: {
      type: Number,
      default: 20
    }
  },
  computed: {
    heartSize() {
      return {
        '--size': `${this.size}px`
      }
    }
  }
}
</script>

<style lang="postcss">
.Heart {
  width: var(--size);
  height: var(--size);
  @apply relative;

  &-empty,
  &-full {
    @apply absolute inset-0;
  }

  &-full {
    opacity: 0;
    transition: opacity 0.3s ease;

    &[data-active] {
      opacity: 1;
    }
  }
}
</style>

<template>
  <Transition name="slide">
    <div v-if="message" class="AlertMessage" :class="type" role="alert">
      <svg
        aria-hidden="true"
        class="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Info</span>
      <div>{{ message }}</div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'AlertMessage',
  props: {
    message: String,
    type: String // warning, info
  }
}
</script>

<style lang="postcss">
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.AlertMessage {
  @apply fixed top-4 left-2 right-2 flex p-4 text-sm  rounded-lg;

  @screen md {
    @apply w-1/2 left-0 right-0 mx-auto;
  }

  &.warning {
    @apply text-red-700 bg-red-100;
  }

  &.info {
    @apply text-[#a16207] bg-[#fef9c3];
  }
}
</style>

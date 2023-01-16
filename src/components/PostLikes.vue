<template>
  <div class="PostLikes">
    <button class="PostLikes-likes" @click="handleLike">
      {{ nbOfLikes }}
      <Heart :active="liked" />
    </button>

    <button class="PostLikes-reservation" @click="handleClick">Reservar</button>

    <AlertMessage :message="message" type="info" />
  </div>
</template>

<script>
import Heart from '@/components/Heart.vue'
import AlertMessage from '@/components/AlertMessage.vue'

export default {
  name: 'PostLikes',
  components: {
    Heart,
    AlertMessage
  },
  props: {
    likes: Array
  },
  data() {
    return {
      liked: false,
      message: '',
      timeout: null,
      nbOfLikes: this.likes.length
    }
  },
  methods: {
    handleClick() {
      this.message = 'Proximamente'

      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.message = ''
      }, 5000)
    },
    handleLike() {
      if (this.liked) {
        this.nbOfLikes--
      } else {
        this.nbOfLikes++
      }
      this.liked = !this.liked

      this.handleClick()
    }
  }
}
</script>

<style lang="postcss">
.PostLikes {
  background-color: rgb(196 196 196 / 0.1);
  border-radius: 30px 30px 0px 0px;
  @apply fixed bottom-0 left-0 right-0 flex justify-center gap-2 px-9 py-4;

  @screen md {
    @apply static bg-transparent rounded-none flex-row-reverse justify-end gap-4 p-0 mt-7;
  }

  &-likes {
    @apply flex gap-2 bg-gray rounded-[40px] text-sm font-normal text-black px-3 py-2 w-[66px] flex-shrink-0;

    @screen md {
      @apply w-[90px] p-0 justify-center py-3;
    }
  }

  &-reservation {
    @apply bg-primary rounded-[40px] text-sm font-semibold text-white py-2 px-14;

    @screen lg {
      @apply text-base py-[10px] px-[86px] flex-shrink-0;
    }
  }
}
</style>

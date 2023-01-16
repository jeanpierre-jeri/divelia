<template>
  <section class="Post">
    <h1 class="Post-title">{{ title }}</h1>

    <div>
      <img class="Post-img" width="233" height="176" :src="image" :alt="`Imagen producto ${title}`" />
      <div class="Post-user">
        <img :src="user.avatar" width="28" height="28" :alt="`Imagen ${user.firstName} ${user.lastName}`" />
        <h2>{{ user.firstName }} {{ user.lastName }}</h2>
      </div>

      <p class="Post-p">{{ desc }}</p>

      <span class="Post-span"
        >Publicado a las <time>{{ time }}</time></span
      >
    </div>
  </section>
</template>

<script>
import { dateToTime } from '@/helpers/date'
export default {
  name: 'SinglePost',
  props: {
    title: String,
    image: String,
    user: Object,
    desc: String,
    createdAt: String
  },
  computed: {
    time() {
      return dateToTime(this.createdAt).toUpperCase()
    }
  }
}
</script>

<style lang="postcss">
.Post {
  &-title {
    @apply text-sm text-content font-semibold;
  }

  &-img {
    border-radius: 5px 5px 5px 14px;
    @apply border border-[#DCDCDC] overflow-hidden mt-4;
  }

  &-user {
    @apply flex gap-3 mt-3 items-center;

    > img {
      @apply w-7 aspect-square rounded-full;
    }

    > h2 {
      @apply font-medium text-xs text-content;
    }
  }

  &-p {
    @apply text-xs font-light text-content mt-4;
  }

  &-span {
    @apply text-content font-light text-[8px] mt-3;
  }
}
</style>

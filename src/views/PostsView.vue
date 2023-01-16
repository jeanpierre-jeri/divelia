<template>
  <div>
    <div v-if="loading" class="grid place-items-center min-h-screen">
      <Spinner />
    </div>
    <div v-else class="PostsView">
      <img class="hidden md:block md:w-full" src="@/assets/plazavea.webp" alt="Imagen Tienda" />
      <div class="PostsView-posts">
        <img class="mx-auto md:hidden" width="87" height="29" src="@/assets/logo.svg" alt="Logo" />
        <h1 class="PostsView-title">Todas las promociones</h1>

        <Posts class="mt-8 px-9 lg:px-0 lg:mt-12" :posts="posts" />
        <template v-if="observerLoading">
          <div class="flex justify-center mt-4">
            <Spinner :size="30" />
          </div>
        </template>

        <template v-else>
          <Observer v-if="enableObserver" @intersecting="handleObserver" class="h-1" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '@/helpers/baseApi.js'
import Posts from '@/components/Posts.vue'
import Spinner from '@/components/Spinner.vue'
import Observer from '@/components/Observer.vue'
export default {
  name: 'HomeView',
  components: {
    Spinner,
    Posts,
    Observer
  },
  data() {
    return {
      loading: false,
      posts: [],
      page: 1,
      observerLoading: false,
      enableObserver: true
    }
  },
  methods: {
    async getPosts() {
      this.loading = true
      const { data } = await api.get(`/posts/?page=1&limit=10`)

      this.posts = data.items

      this.loading = false
    },
    async handleObserver() {
      console.log('ahora me ves')
      this.page += 1
      this.observerLoading = true

      const { data } = await api.get(`/posts/?page=${this.page}&limit=10`)

      if (!data.items.length) {
        this.enableObserver = false
        this.observerLoading = false
        return
      }
      this.posts = [...this.posts, ...data.items]
      this.observerLoading = false
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style lang="postcss">
.PostsView {
  @apply min-h-screen;

  @screen md {
    @apply h-screen grid grid-cols-2;
  }
  &-posts {
    @apply pt-7 overflow-y-auto;

    @screen lg {
      @apply pt-24 px-[10%];
    }
  }
  &-title {
    @apply uppercase font-semibold text-xs text-center text-primary mt-6;

    @screen lg {
      @apply text-3xl normal-case text-left mt-0;
    }

    &::after {
      content: '';
      width: 21%;
      @apply block h-[1px] mx-auto bg-primary mt-1;

      @screen md {
        @apply hidden;
      }
    }
  }
}
</style>

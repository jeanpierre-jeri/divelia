<template>
  <div>
    <div v-if="loading" class="grid place-items-center min-h-screen">
      <Spinner />
    </div>
    <div v-else class="PostView">
      <img
        class="hidden md:block md:w-full max-h-screen object-cover"
        src="@/assets/plazavea.webp"
        alt="Imagen Tienda"
      />
      <div class="pt-7 px-9 relative md:px-[10%] md:overflow-y-auto lg:pt-24">
        <RouterLink :to="{ name: 'posts' }" class="absolute top-8 left-8 lg:top-[104px] lg:left-[10%]">
          <BackArrow />
        </RouterLink>
        <h1 class="hidden md:block md:pl-10 text-primary lg:text-3xl font-semibold">{{ post.title }}</h1>
        <img class="mx-auto md:hidden" width="87" height="29" src="@/assets/logo.svg" alt="Logo" />

        <Post
          class="mt-12"
          :title="post.title"
          :image="post.image"
          :user="post.user"
          :desc="post.description"
          :createdAt="post.createdAt"
        />

        <PostLikes :likes="likes" />

        <Comments class="mt-9 lg:mt-11" :comments="comments" @newComment="handleNewComment" />
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '@/helpers/baseApi.js'

import Post from '@/components/Post.vue'
import Comments from '@/components/Comments.vue'
import Spinner from '@/components/Spinner.vue'
import PostLikes from '@/components/PostLikes.vue'
import BackArrow from '@/components/BackArrow.vue'

export default {
  name: 'PostView',
  components: {
    Post,
    Comments,
    Spinner,
    PostLikes,
    BackArrow
  },
  data() {
    return {
      loading: false,
      post: {},
      comments: [],
      likes: []
    }
  },
  methods: {
    handleNewComment(comment) {
      this.comments = [...this.comments, comment]
    },
    async getPost() {
      const { id } = this.$route.params
      this.loading = true

      try {
        const [{ data: post }, { data: comments }, { data: likes }] = await Promise.all([
          api.get(`/posts/${id}`),
          api.get(`/posts/${id}/comments`),
          api.get(`/posts/${id}/likes`)
        ])

        this.post = post
        this.comments = comments
        this.likes = likes
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  },
  created() {
    this.getPost()
  }
}
</script>

<style lang="postcss">
.PostView {
  @apply min-h-screen;

  @screen md {
    @apply grid grid-cols-2 h-screen;
  }
}
</style>

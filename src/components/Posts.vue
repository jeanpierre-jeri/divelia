<template>
  <section>
    <h2 class="text-base text-content font-semibold">Ultimas promociones</h2>
    <div class="mt-4 grid grid-cols-1 gap-4">
      <Post
        v-for="{ image, id, title, description, user } in posts"
        :key="id"
        :image="image"
        :title="title"
        :desc="description"
        :id="id"
        :user="user"
      />
    </div>
  </section>
</template>

<script>
import Post from '@/components/HomePost.vue'
export default {
  name: 'PostsHome',
  components: {
    Post
  },
  props: {
    posts: Array
  }
}
</script>

<style></style>

<template>
  <section class="Comments">
    <h2 class="Comments-h2">Comentarios</h2>
    <ul class="Comments-ul">
      <li class="Comments-li" v-for="{ id, text, user } in comments" :key="id">
        <img
          class="Comments-img"
          :src="user.avatar"
          width="28"
          height="28"
          :alt="`Imagen ${user.firstName} ${user.lastName}`"
        />
        <div>
          <h3 class="Comments-h3">{{ user.firstName }} {{ user.lastName }}</h3>
          <p class="Comments-p">{{ text }}</p>
        </div>
      </li>
    </ul>
    <form class="Comments-form" @submit.prevent="handleSubmit">
      <input class="Comments-input" type="text" name="comment" placeholder="Escribe un comentario..." />
    </form>

    <AlertMessage :message="errorMessage" type="warning" />
  </section>
</template>

<script>
import { api } from '@/helpers/baseApi.js'
import { user } from '@/helpers/auth.js'

import AlertMessage from '@/components/AlertMessage.vue'

export default {
  name: 'PostComments',
  components: {
    AlertMessage
  },
  props: {
    comments: Array
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  methods: {
    setErrorMessage() {
      this.errorMessage = 'Ha habido un problema, intente más tarde'
      setTimeout(() => {
        this.errorMessage = ''
      }, 5000)
    },
    async handleSubmit(e) {
      e.target.style.pointerEvents = 'none'
      const { comment } = Object.fromEntries(new FormData(e.target))
      const { name, lastname, image } = user()
      const postComment = {
        text: comment,
        user: {
          firstName: name,
          lastName: lastname,
          avatar: image
        },
        id: Date.now(),
        postId: this.$route.params.id
      }
      try {
        const { data } = await api.post(`/posts/1/comments/`, postComment)
        console.log(data) // le hago console.log para que el linter no tire error, no se cual es la respuesta cuando funciona
        this.$emit('newComment', postComment)
      } catch (error) {
        this.setErrorMessage()
      } finally {
        e.target.reset()
        e.target.style.pointerEvents = 'auto'
      }
    }
  }
}
</script>

<style lang="postcss">
.Comments {
  @apply pt-5 pb-28;
  &-h2 {
    @apply text-content text-base font-semibold;
  }

  &-ul {
    @apply flex flex-col gap-4 mt-4;
  }

  &-li {
    @apply flex gap-3 items-start;
  }

  &-img {
    @apply rounded-full object-cover w-7 aspect-square;
  }

  &-h3 {
    @apply text-xs text-content font-medium;
  }

  &-p {
    @apply text-content text-[10px] font-light mt-[6px];
  }

  &-form {
    @apply mt-4;
  }

  &-input {
    @apply bg-white rounded-[40px] text-[10px] font-light text-content py-2 px-4 w-full outline-none shadow;
  }
}
</style>

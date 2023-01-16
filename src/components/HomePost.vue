<template>
  <RouterLink :to="{ name: 'post', params: { id } }">
    <article class="HomePost">
      <div class="HomePost-header">
        <img class="HomePost-img" width="208" height="143" :src="image" :alt="`Imagen ${title}`" />
        <img class="HomePost-avatar" :src="user.avatar" :alt="`Foto ${user.firstName} ${user.lastName}`" />
      </div>
      <div class="HomePost-body">
        <h3 class="HomePost-h3">{{ title }}</h3>
        <p class="HomePost-p">{{ desc }}</p>
      </div>
    </article>
  </RouterLink>
</template>

<script>
export default {
  name: 'HomePost',
  props: {
    image: String,
    desc: String,
    title: String,
    id: String,
    user: Object
  }
}
</script>

<style lang="postcss">
.HomePost {
  @apply p-5;

  &-header {
    border-radius: 5px 5px 5px 14px;
    @apply relative border border-[#DCDCDC] overflow-hidden;
  }

  &-img {
    @apply w-full object-cover;
  }

  &-avatar {
    @apply absolute bottom-0 left-0 w-7 aspect-square rounded-full object-cover;
  }

  &-h3 {
    @apply text-sm font-medium text-content mt-3;
  }

  &-p {
    @apply text-xs font-light text-content mt-2 line-clamp-2;
  }
}
</style>

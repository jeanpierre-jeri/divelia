<template>
  <div class="LoginView">
    <img width="133" height="45" class="mx-auto" src="@/assets/logo.svg" alt="Logo" />
    <h1 class="font-semibold text-xs text-center text-primary mt-5">Registrate para ingresar</h1>
    <LoginForm class="mt-9" />
    <div class="LoginView-gift">
      <img class="w-full object-cover" src="@/assets/gift.webp" alt="Gift Image" />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
}
</script>

<style lang="postcss">
.LoginView {
  @apply relative pt-8 min-h-screen;

  &-gift {
    @apply absolute bottom-0 left-0 right-0 pr-4;
  }
}
</style>

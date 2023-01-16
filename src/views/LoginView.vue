<template>
  <div class="LoginView">
    <img class="LoginView-imgDesk" src="@/assets/plazavea.webp" alt="Imagen Tienda" />
    <div class="LoginView-login">
      <img width="133" height="45" class="mx-auto lg:hidden" src="@/assets/logo.svg" alt="Logo" />
      <h1 class="LoginView-title">Registrate para ingresar</h1>
      <LoginForm class="mt-9 lg:mt-12" />
      <div class="LoginView-gift">
        <picture>
          <source media="(min-width: 768px)" srcset="@/assets/gift-desk.webp" />
          <img class="w-full object-cover" src="@/assets/gift.webp" alt="Gift Image" />
        </picture>
      </div>
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
  @screen md {
    @apply grid grid-cols-2;
  }
  &-imgDesk {
    @apply hidden;

    @screen md {
      @apply block w-full;
    }
  }

  &-login {
    @apply relative pt-8 min-h-screen isolate;

    @screen md {
      @apply min-h-fit;
    }

    @screen lg {
      @apply pt-0;
    }
  }

  &-title {
    @apply font-semibold text-xs text-center text-primary mt-5;

    @screen lg {
      @apply text-3xl mt-24;
    }
  }

  &-gift {
    z-index: -1;
    @apply absolute bottom-0 left-0 right-0 pr-4;

    @screen md {
      @apply w-1/2 left-auto pr-0;
    }

    @screen lg {
      @apply w-[68%];
    }
  }
}
</style>

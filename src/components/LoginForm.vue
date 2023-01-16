<template>
  <div>
    <form class="Form" @submit.prevent="handleLogin">
      <!-- Image -->
      <div class="Form-field">
        <label class="Form-label Form-label-image">Foto de Perfil</label>
        <input
          ref="inputImage"
          class="Form-input Form-file"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          name="image"
          @change="handleImage"
        />

        <!-- Image Placeholder -->
        <div @click="$refs.inputImage.click()" class="Form-placeholder">
          <img
            v-if="!image"
            :src="require('@/assets/placeholder.svg')"
            alt="User Image"
            width="42"
            height="42"
            class="lg:w-1/3 lg:aspect-square lg:block"
          />
          <img class="lg:w-full lg:aspect-square" v-else :src="image" alt="User Image" />
        </div>
      </div>

      <!-- Name -->
      <div class="Form-field">
        <label class="Form-label" for="name">Nombres</label>
        <input class="Form-input" type="text" name="name" id="name" placeholder="Rodrigo" />
      </div>

      <!-- Lastname -->
      <div class="Form-field">
        <label class="Form-label" for="lastname">Apellidos</label>
        <input class="Form-input" type="text" name="lastname" id="lastname" placeholder="Fernandez Panta" />
      </div>

      <!-- Submit -->
      <div class="Form-field">
        <input class="Form-submit" type="submit" value="Ingresar" />
      </div>
    </form>
    <AlertMessage :message="errorMessage" type="warning" />
  </div>
</template>

<script>
import { setUser } from '@/helpers/auth.js'

import AlertMessage from '@/components/AlertMessage.vue'

export default {
  name: 'LoginForm',
  components: {
    AlertMessage
  },
  data() {
    return {
      image: null,
      errorMessage: ''
    }
  },
  methods: {
    handleImage(e) {
      const files = e.target.files

      if (!files.length) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => (this.image = reader.result)
    },
    setErrorMessage(message) {
      this.errorMessage = message
      setTimeout(() => {
        this.errorMessage = ''
      }, 5000)
    },
    handleLogin(e) {
      const { name, lastname } = Object.fromEntries(new FormData(e.target))

      if (!name || !lastname) {
        this.setErrorMessage('Se requiere nombre y un apellido')
        return
      }

      if (!this.image) {
        this.setErrorMessage('Se requiere una foto para el perfil')
        return
      }

      setUser({ image: this.image, name, lastname })
      e.target.reset()

      this.$router.push('/posts')
    }
  }
}
</script>

<style lang="postcss">
.Form {
  @apply flex flex-col gap-5 px-8;

  @screen lg {
    @apply w-1/2 px-0 mx-auto;
  }

  &-field {
    @apply flex flex-col gap-3;
  }

  &-label,
  &-input {
    @apply block w-full;
  }

  &-label {
    @apply font-normal text-xs text-black;

    @screen lg {
      @apply text-base;
    }

    &-image {
      @screen lg {
        @apply text-lg text-center font-semibold text-[#383838] mb-10;
      }
    }
  }

  &-file {
    @apply hidden;
  }

  &-placeholder {
    @apply bg-gray rounded-full aspect-square mx-auto w-20 grid place-items-center overflow-hidden;

    @screen lg {
      @apply w-40 cursor-pointer;
    }
  }

  &-input {
    @apply bg-gray rounded-md px-5 py-[6px] text-xs;

    @screen lg {
      @apply text-sm py-[9px];
    }
  }

  &-submit {
    @apply bg-yellow rounded-[40px] text-xs text-primary text-center py-[7px] cursor-pointer;

    @screen lg {
      @apply py-3 mt-6;
    }
  }
}
</style>

<template>
  <div>
    <form class="Form" @submit.prevent="handleLogin">
      <!-- Image -->
      <div class="Form-field">
        <label class="Form-label">Foto de Perfil </label>
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
          <img :src="placeholderImage" alt="User Image" />
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
  computed: {
    placeholderImage() {
      return this.image ? this.image : require('@/assets/placeholder.svg')
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

  &-field {
    @apply flex flex-col gap-3;
  }

  &-label,
  &-input {
    @apply block w-full;
  }

  &-label {
    @apply font-normal text-xs text-black;
  }

  &-file {
    @apply hidden;
  }

  &-placeholder {
    @apply bg-gray rounded-full aspect-square mx-auto w-20 grid place-items-center overflow-hidden;
  }

  &-input {
    @apply bg-gray rounded-md px-5 py-[6px] text-xs;
  }

  &-submit {
    @apply bg-yellow rounded-[40px] text-xs text-primary text-center py-[7px] cursor-pointer;
  }
}
</style>

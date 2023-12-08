<template>
  <section class="auth auth__forgot">
    <div class="container">
      <div class="auth__inner">
        <router-link to="/login" class="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#3D24F9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >Вернуться назад
        </router-link>
        <h2 class="auth__title">Восстановить пароль</h2>
        <form @submit.prevent="submit" class="auth__form">
          <p class="forgot__title">
            Введите электронную почту которую вы указали при регистрации.
          </p>
          <div class="text-field">
            <label for="">Электронная почта</label>
            <input
              v-model="form.email"
              type="text"
              placeholder="name@example.com"
            />
          </div>
          <div v-if="hasErrors" class="error-message">
            <div
              class="haserror"
              v-for="(errors, field) in errorMessages"
              :key="field"
            >
              {{ field }}: {{ formatError(errors) }}
            </div>
          </div>
          <Button type="submit" :disabled="!isFormValid">Отправить</Button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/UIKit/MainButton.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    Button,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const errorMessages = ref({});

    const form = ref({
      email: "",
      password: "",
    });

    const isFormValid = computed(() => {
      return form.value.email !== "" && form.value.password !== "";
    });

    const hasErrors = computed(
      () => Object.keys(errorMessages.value).length > 0
    );

    const formatErrorMessage = (error) => {
      if (Array.isArray(error)) {
        return error.join(" ");
      }
      return error;
    };

    const formatError = (errors) => {
      return Array.isArray(errors) ? errors.join(", ") : errors;
    };

    const submit = () => {
      errorMessages.value = {};

      store
        .dispatch("auth/login", {
          email: form.value.email,
          password: form.value.password,
        })
        .then((res) => {
          if (res && res.token) {
            window.location.href = "/form";
          }
        })
        .catch((err) => {
          if (err && err.data) {
            Object.keys(err.data).forEach((field) => {
              errorMessages.value[field] = formatErrorMessage(err.data[field]);
            });
          }
        });
    };

    return {
      router,
      store,
      form,
      submit,
      isFormValid,
      hasErrors,
      errorMessages,
      formatError,
    };
  },
};
</script>

<style></style>

<template>
  <section class="auth">
    <div class="container">
      <div class="auth__inner">
        <h2 class="auth__title">Войти</h2>
        <form @submit.prevent="submit" class="auth__form">
          <div class="text-field">
            <label for="">Электронная почта</label>
            <input
              v-model="form.email"
              type="text"
              placeholder="name@example.com"
            />
          </div>
          <div class="text-field">
            <label for="">Пароль</label>
            <input
              v-model="form.password"
              type="password"
              placeholder="Введите пароль"
            />
          </div>
          <div class="auth__setting">
            <div class="remember">
              <input type="checkbox" />
              Запомнить меня
            </div>
            <div class="forgot">Забыл пароль?</div>
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
          <Button type="submit" :disabled="!isFormValid">Войти</Button>
          <div class="auth__registr">
            Нет аккаунта?
            <router-link to="/registration">Зарегистрироваться</router-link>
          </div>
          <!-- <div class="or">Или</div> -->
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

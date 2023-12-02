<template>
  <section class="auth">
    <div class="container">
      <div class="auth__inner">
        <h2 class="auth__title">Войти</h2>
        <form @submit.prevent="submit" class="auth__form">
          <div class="text-field">
            <label for="">Электронная почта</label>
            <input v-model="form.email" type="text" placeholder="name@example.com" />
          </div>
          <div class="text-field">
            <label for="">Пароль</label>
            <input v-model="form.password" type="password" placeholder="Введите пароль" />
          </div>
          <div class="auth__setting">
            <div class="remember">
              <input type="checkbox" />
              Запомнить меня
            </div>
            <div class="forgot">Забыл пароль?</div>
          </div>
          <Button type="submit">Войти</Button>
          <div class="auth__registr">
            Нет аккаунта?
            <router-link to="/registration">Зарегистрироваться</router-link>
          </div>
          <div class="or">Или</div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/UIKit/MainButton.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    Button,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const form = ref({
      email: "",
      password: "",
    });

    const submit = () => {
      store
        .dispatch("auth/login", {
          email: form.value.email,
          password: form.value.password,
        })
        .then((res) => {
          console.log(res);

          if (res.token) {
            router.push({ path: "/" });
          }
        });
    };

    return {
      router,
      store,
      form,
      submit,
    };
  },
};
</script>

<style></style>

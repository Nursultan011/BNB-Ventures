<template>
  <section class="profile">
    <div class="container">
      <div class="profile__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/profile">Профиль</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Изменить пароль
          </li>
        </Breadcrumb>
        <p class="title">Изменить пароль</p>
        <div class="profile__card">
          <div class="profile__header">
            <p class="profile__title">Изменить пароль</p>
          </div>
          <form class="auth__form">
            <div class="text-field">
              <label for="name">Старый пароль</label>
              <input
                id="name"
                type="password"
                placeholder="Введите старый пароль"
                autocomplete="name"
                required
                v-model="form.current_password"
              />
            </div>
            <div class="text-field">
              <label for="email">Новый пароль</label>
              <input
                id="email"
                type="password"
                placeholder="Введите новый пароль"
                autocomplete="email"
                required
                v-model="form.new_password"
              />
            </div>
            <div class="text-field">
              <label for="phone">Повторите пароль</label>
              <input
                id="phone"
                type="password"
                placeholder="Повторите новый пароль"
                autocomplete=""
                required
                v-model="form.confirm_new_password"
              />
            </div>
            <div class="error" v-if="error">
              {{ error }}
            </div>
          </form>
        </div>
        <div class="profile__actions">
          <router-link to="/profile" class="main-button button-text"
            >Отменить</router-link
          >
          <button
            class="main-button"
            @click.prevent="submit()"
            :disabled="!isFormValid"
          >
            Изменить пароль
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Breadcrumb,
  },
  setup() {
    const store = useStore();

    const form = ref({
      current_password: "",
      new_password: "",
      confirm_new_password: "",
    });

    const error = ref();

    const isFormValid = computed(() => {
      return (
        form.value.current_password &&
        form.value.new_password &&
        form.value.confirm_new_password &&
        form.value.new_password === form.value.confirm_new_password
      );
    });

    const submit = () => {
      if (isFormValid.value) {
        store
          .dispatch("profile/updatePassword", form.value)
          .then((res) => {
            if (res.detail) {
              router.push("/");
            }
          })
          .catch((err) => {
            if (err && err.data && err.data.detail) {
              error.value = err.data.detail;
            }
          });
      } else {
        error.value =
          "Пожалуйста, проверьте, что все поля заполнены и пароли совпадают.";
      }
    };

    return {
      form,
      store,
      error,
      submit,
      isFormValid,
    };
  },
};
</script>

<style></style>

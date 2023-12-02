<template>
  <section class="profile">
    <div class="container">
      <div class="profile__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Профиль</li>
        </Breadcrumb>
        <p class="title">Профиль</p>
        <div class="profile__card">
          <div class="profile__header">
            <p class="profile__title">Личные данные</p>
            <button @click="redirect('/profile/edit')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.5 21H21.5"
                  stroke="#5640FA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z"
                  stroke="#5640FA"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="profile__info">
            <div>
              <span> Имя и фамилия </span>
              <p>Айнур Абылай</p>
            </div>
            <div>
              <span> Номер телефона </span>
              <p>+7 (777) 123-45-67</p>
            </div>
            <div>
              <span> Электронная почта </span>
              <p>ainurabylai@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="profile__card">
          <div class="profile__header">
            <p class="profile__title">Изменить пароль</p>
            <button @click="redirect('/profile/change-password')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#767A87"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    Breadcrumb,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoading = ref(true);

    onMounted(async () => {
      await getProfile();
    });

    const getProfile = async (event) => {
      await store.dispatch("profile/getProfile", event).then((res) => {
        isLoading.value = false;
      });
    };

    const redirect = (event) => {
      router.push({ path: event });
    };

    return {
      store,
      router,
      isLoading,
      redirect,
      getProfile,
    };
  },
};
</script>

<style></style>

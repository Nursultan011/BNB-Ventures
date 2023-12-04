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
            Редактировать личные данные
          </li>
        </Breadcrumb>
        <p class="title">Редактировать личные данные</p>
        <div class="profile__card">
          <div class="profile__header">
            <p class="profile__title">Личные данные</p>
          </div>
          <form class="auth__form">
            <div
              class="text-field"
              v-if="editableProfile && editableProfile.name"
            >
              <label for="name">Имя и фамилия</label>
              <input
                id="name"
                type="text"
                placeholder="Введите имя и фамилию"
                autocomplete="name"
                required
                v-model="editableProfile.name"
              />
            </div>
            <div
              class="text-field"
              v-if="editableProfile && editableProfile.email"
            >
              <label for="email">Электронная почта</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                autocomplete="email"
                required
                v-model="editableProfile.email"
              />
            </div>
            <div
              class="text-field"
              v-if="editableProfile && editableProfile.email"
            >
              <label for="phone">Номер телефона</label>
              <input
                id="phone"
                type="tel"
                placeholder="+7(---) --- -- --"
                autocomplete="tel"
                required
                v-model="editableProfile.phone"
              />
            </div>
          </form>
        </div>
        <div class="profile__actions">
          <router-link to="/profile" class="main-button button-text"
            >Отменить</router-link
          >
          <button class="main-button" @click.prevent="updateProfile">
            Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { ref, onMounted, computed } from "vue";
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
    const profile = computed(() => store.state.profile.profile);
    const editableProfile = ref({});

    const getProfile = async () => {
      await store.dispatch("profile/getProfile").then((res) => {
        isLoading.value = false;

        editableProfile.value = { ...profile.value };
      });
    };

    const updateProfile = async () => {
      await store
        .dispatch("profile/updateProfile", editableProfile.value)
        .then((res) => {
          router.push("/profile");
          // Обработка успешного ответа
        })
        .catch((err) => {
          // Обработка ошибок
        });
    };

    onMounted(async () => {
      await getProfile();
    });

    return {
      router,
      store,
      isLoading,
      profile,
      editableProfile,
      updateProfile,
    };
  },
};
</script>

<style></style>

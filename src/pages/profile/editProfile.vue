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
            <div class="text-field">
              <label for="name">Имя и фамилия</label>
              <input
                id="name"
                type="text"
                placeholder="Введите имя и фамилию"
                autocomplete="name"
                required
              />
            </div>
            <div class="text-field">
              <label for="email">Электронная почта</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                autocomplete="email"
                required
              />
            </div>
            <div class="text-field">
              <label for="phone">Номер телефона</label>
              <input
                id="phone"
                type="tel"
                placeholder="+7(---) --- -- --"
                autocomplete="tel"
                required
              />
            </div>
          </form>
        </div>
        <div class="profile__actions">
          <router-link to="/profile" class="main-button button-text"
            >Отменить</router-link
          >
          <button class="main-button">Сохранить изменения</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { ref } from "vue";

export default {
  components: {
    Breadcrumb,
  },
};
</script>

<style></style>

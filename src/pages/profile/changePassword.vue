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
          <li class="breadcrumb-item active" aria-current="page">Изменить пароль</li>
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
              />
            </div>
          </form>
        </div>
        <div class="profile__actions">
          <router-link to="/profile" class="main-button button-text"
            >Отменить</router-link
          >
          <button class="main-button">Изменить пароль</button>
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

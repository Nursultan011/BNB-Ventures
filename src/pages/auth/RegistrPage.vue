<template>
  <section class="auth registration">
    <div class="container">
      <div class="auth__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Текущая Страница</li>
        </Breadcrumb>
        <h2 class="registration__title">Выберите роль для регистрации</h2>
        <div class="registration__cards">
          <div class="registration__card" v-for="(item, i) in roles" :key="i">
            <div class="icon" v-html="item.icon"></div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <BorderButton @click="registration(item.route)"
              >Зарегистрироваться</BorderButton
            >
          </div>
        </div>
        <div class="auth__registr">
          Уже зарегистрированы?
          <router-link to="/login">Войти</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { ref } from "vue";
import BorderButton from "@/components/UIKit/BorderButton.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Breadcrumb,
    BorderButton,
  },
  setup() {
    const router = useRouter();
    const roles = ref([
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M20.5 10.5372C20.5 6.5143 22.8333 4.50286 24 4C25.1667 4.50286 27.5 6.5143 27.5 10.5372V18.0801L43 31V35L27 27V36L32 44L24 41L16 44L21 36V27L5 35V31L20.5 18.0801V10.5372Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        title: "Стартап",
        description: "Необходимо выполнить все требования для регистрации стартапа",
        route: "startup",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
        <path d="M14.5 14C14.5 10.6863 17.1863 8 20.5 8H29.5C32.8137 8 35.5 10.6863 35.5 14V16H14.5V14Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.5 25L24.0149 29.8787C24.3334 29.9584 24.6666 29.9584 24.9851 29.8787L44.5 25V38C44.5 39.1046 43.6046 40 42.5 40H6.5C5.39543 40 4.5 39.1046 4.5 38V25Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M44.5 27V18C44.5 16.8954 43.6046 16 42.5 16H6.5C5.39543 16 4.5 16.8954 4.5 18V27" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27 23C27 24.3807 25.8807 25.5 24.5 25.5C23.1193 25.5 22 24.3807 22 23C22 21.6193 23.1193 20.5 24.5 20.5C25.8807 20.5 27 21.6193 27 23Z" fill="#5640FA"/>
        </svg>`,
        title: "Корпорация",
        description: "Выручка за предыдущий календарный год должна быть более 800 млн ₽",
        route: "corporation",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M21 13L11 20V44" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 4L31 11V24L38 29V44H21V4Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 44H44" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        title: "Инвестор",
        description: "Бизнес-ангел может вернуть до 50% вложений в определенные стартап",
        route: "investor",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
          <path d="M20.5 10H6.5C5.39543 10 4.5 10.8954 4.5 12V38C4.5 39.1046 5.39543 40 6.5 40H42.5C43.6046 40 44.5 39.1046 44.5 38V35.5" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.5 23H18.5" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M10.5 31H34.5" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M34.5 22C37.8137 22 40.5 19.3137 40.5 16C40.5 12.6863 37.8137 10 34.5 10C31.1863 10 28.5 12.6863 28.5 16C28.5 19.3137 31.1863 22 34.5 22Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M44.5 28.4187C42.5468 24.6023 38.4999 22 34.4999 22C30.4999 22 28.5071 23.1329 26.4502 25" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        title: "Специалист",
        description:
          "Необходимо показать резюме с описанием навыков для работы в стартапе",
        route: "specialist",
      },
    ]);

    const registration = (event) => {
      router.push(`/registration/` + event);
    };

    return {
      router,
      roles,
      registration,
    };
  },
};
</script>

<style></style>

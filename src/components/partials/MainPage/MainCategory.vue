<template>
  <section class="main-category">
    <div class="container">
      <div class="main-category__inner">
        <h2 class="title">Ознакомьтесь с категориями для дальнейшей работы</h2>
        <div class="main-category__cards">
          <div
            class="main-category__card"
            @click="redirect(item.path)"
            style="cursor: pointer"
            v-for="(item, i) in mainCategory"
            :key="i"
          >
            <div class="icon" v-if="item.icon" v-html="item.icon"></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const mainCategory = ref([
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M20.5 10.5372C20.5 6.5143 22.8333 4.50286 24 4C25.1667 4.50286 27.5 6.5143 27.5 10.5372V18.0801L43 31V35L27 27V36L32 44L24 41L16 44L21 36V27L5 35V31L20.5 18.0801V10.5372Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        title: "Стартапам",
        description:
          "Узнайте, как наши инвестиции и экспертиза могут помочь вам развивать свой стартап",
        path: "/startups",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M21 13L11 20V44" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 4L31 11V24L38 29V44H21V4Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 44H44" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        title: "Инвесторам",
        description:
          "У нас есть широкий спектр инвестиционных возможностей для стабильной прибыли",
        path: "/investors",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M14 14C14 10.6863 16.6863 8 20 8H29C32.3137 8 35 10.6863 35 14V16H14V14Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 25L23.5149 29.8787C23.8334 29.9584 24.1666 29.9584 24.4851 29.8787L44 25V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V25Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M44 27V18C44 16.8954 43.1046 16 42 16H6C4.89543 16 4 16.8954 4 18V27" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.5 23C26.5 24.3807 25.3807 25.5 24 25.5C22.6193 25.5 21.5 24.3807 21.5 23C21.5 21.6193 22.6193 20.5 24 20.5C25.3807 20.5 26.5 21.6193 26.5 23Z" fill="#5640FA"/>
        </svg>`,
        title: "Корпорациям",
        description:
          "Узнайте, как наше партнерство может приносить выгоду вашей корпорации",
        path: "/corporations",
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M20 10H6C4.89543 10 4 10.8954 4 12V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V35.5" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 23H18" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M10 31H34" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M34 22C37.3137 22 40 19.3137 40 16C40 12.6863 37.3137 10 34 10C30.6863 10 28 12.6863 28 16C28 19.3137 30.6863 22 34 22Z" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M44 28.4187C42.0468 24.6023 37.9999 22 33.9999 22C29.9999 22 28.0071 23.1329 25.9502 25" stroke="#5640FA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        title: "Специалистам",
        description:
          "Присоединяйтесь к нашей сети и делитесь своими знаниями и опытом с другими участниками",
        path: "/specialists",
      },
    ]);

    const redirect = (event) => {
      router.push({ path: event });
    };

    return {
      mainCategory,
      router,
      redirect,
    };
  },
};
</script>

<style></style>

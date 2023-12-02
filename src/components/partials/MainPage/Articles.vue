<template>
  <section class="main-articles">
    <div class="container">
      <div class="main-articles__inner">
        <div class="main-articles__header">
          <h2 class="title">
            Статьи, новости и анонсы в сфере венчурных инвестиций
          </h2>
          <BorderButton>Смотреть все</BorderButton>
        </div>
        <div class="main-articles__cards">
          <div
            class="main-articles__card"
            v-for="(item, i) in articles"
            :key="i"
          >
            <div class="img">
              <img
                v-if="item.img"
                :src="require(`../../../assets/images/${item.img}`)"
                alt=""
              />
            </div>
            <div class="wrap">
              <span>
                {{ item.date }}
              </span>
              <h3>
                {{ item.title }}
              </h3>
              <p>
                {{ item.description }}
              </p>
              <button>
                Подробнее
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.9603 11.1419C15.18 11.3615 15.18 11.7176 14.9603 11.9373L9.22541 17.6722C9.00573 17.8918 8.64963 17.8918 8.42996 17.6722L8.16476 17.407C7.94508 17.1873 7.94508 16.8312 8.16476 16.6115L13.2367 11.5396L8.16476 6.46763C7.94508 6.24795 7.94508 5.89185 8.16476 5.67218L8.42996 5.40698C8.64963 5.1873 9.00573 5.1873 9.22541 5.40698L14.9603 11.1419Z"
                    fill="#3D24F9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BorderButton from "@/components/UIKit/BorderButton.vue";
import { ref } from "vue";

export default {
  components: {
    BorderButton,
  },
  setup() {
    const articles = ref([
      {
        img: "article1.jpg",
        date: "01/10/2023",
        title: "Инновационные тренды 2023: что следует ожидать",
        description:
          "Наш аналитический отдел подготовил обзор самых горячих инновационных трендов на 2023 год",
      },
      {
        img: "article2.jpg",
        date: "01/10/2023",
        title: "Отчет о семинаре по стартап-финансированию",
        description:
          "Приглашаем всех стартап-основателей и инвесторов на наш семинар по финансированию стартапов. Узнайте секреты успешного привлечения инвестиций и развития вашего бизнеса.",
      },
      {
        img: "article3.jpg",
        date: "01/10/2023",
        title: "Наш последний успешный инвесторский раунд!",
        description:
          "Мы с гордостью объявляем о завершении нашего самого успешного инвестиционного раунда до сих пор. Узнайте больше о наших новых партнерах и проектах, в которые мы вложились",
      },
      {
        img: "article4.jpg",
        date: "01/10/2023",
        title: "Наш венчурный эксперт в эфире о финансах стартапов",
        description:
          "Наш главный эксперт по венчурным инвестициям будет гостем на радио/телевизионном шоу",
      },
    ]);

    return {
      articles,
    };
  },
};
</script>

<style></style>

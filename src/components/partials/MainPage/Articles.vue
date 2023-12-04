<template>
  <section class="main-articles">
    <div class="container">
      <div class="main-articles__inner">
        <div class="main-articles__header">
          <h2 class="title">
            Статьи, новости и анонсы в сфере венчурных инвестиций
          </h2>
          <BorderButton @click="redirect('/articles')"
            >Смотреть все</BorderButton
          >
        </div>

        <div class="main-articles__cards">
          <div
            class="main-articles__card"
            v-for="(item, i) in articles"
            :key="i"
          >
            <div class="img">
              <img v-if="item.banner" :src="item.banner" alt="" />
              <img v-else src="@/assets/images/articles-default.png" alt="" />
            </div>
            <div class="wrap">
              <span v-if="item.created">
                {{ formatDate(item.created) }}
              </span>
              <h3 v-if="item.title">
                {{ item.title }}
              </h3>
              <p v-if="item.content">
                {{ item.content }}
              </p>
              <button @click="redirect('/articles/' + item.id)">
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
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  props: ["articles"],
  components: {
    BorderButton,
  },
  setup(props) {
    const router = useRouter();

    const articles = computed(() => props.articles);

    const redirect = (event) => {
      router.push({ path: event });
    };

    const formatDate = (isoString) => {
      const date = new Date(isoString);
      return date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    };

    return {
      router,
      articles,
      redirect,
      formatDate,
    };
  },
};
</script>

<style></style>

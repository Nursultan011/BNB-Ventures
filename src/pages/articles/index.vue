<template>
  <Loader v-if="isLoading" />
  <section class="articles" v-else>
    <div class="container">
      <div class="articles__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Новости</li>
        </Breadcrumb>
        <h2 class="title">Статьи, новости и анонсы</h2>
        <div class="articles__cards">
          <div class="main-articles__card" v-for="(item, i) in articles" :key="i">
            <div class="img">
              <img v-if="item.banner" :src="item.banner" alt="" />
              <img v-else src="../../assets/images/articles-default.png" alt="" />
            </div>
            <div class="wrap">
              <span v-if="item.created">{{ formatDate(item.created) }}</span>
              <h3 v-if="item.title">{{ item.title }}</h3>
              <p v-if="item.content">{{ item.content }}</p>
              <button @click="details(item.id)">
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
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Loader from "@/components/global/Loader.vue";

export default {
  components: {
    Breadcrumb,
    Loader,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoading = ref(true);

    const articles = computed(() => store.state.articles.articles);

    const details = (event) => {
      if (event) {
        router.push({ path: `articles/${event}` });
      }
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

    onMounted(() => {
      store.dispatch("articles/getArticles").then((res) => {
        isLoading.value = false;
      });
    });

    return {
      router,
      store,
      articles,
      details,
      isLoading,
      formatDate,
    };
  },
};
</script>

<style></style>

import articles from '@/store/modules/articles';
<template>
  <Loader v-if="isLoading" />
  <section v-else class="articles">
    <div class="container">
      <div class="articles__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/articles">Новости</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page" v-if="article.title">
            {{ article.title }}
          </li>
        </Breadcrumb>
        <div class="articles__current">
          <h3 v-if="article.title">
            {{ article.title }}
          </h3>
          <span class="date" v-if="article.created">
            {{ formatDate(article.created) }}
          </span>
          <div class="img">
            <img v-if="article.banner" :src="article.banner" alt="" />
            <img v-else src="../../assets/images/articles-default.png" alt="" />
          </div>
          <p class="description" v-html="article.content ?? ''"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Loader from "@/components/global/Loader.vue";

export default {
  components: {
    Breadcrumb,
    Loader,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const isLoading = ref(true);

    const article = computed(() => store.state.articles.article);

    onMounted(async () => {
      await store.dispatch("articles/getArticle", route.params.id).then((res) => {
        isLoading.value = false;
      });
    });

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
      article,
      route,
      store,
      isLoading,
      formatDate,
    };
  },
};
</script>

<style></style>

<template>
  <Loader v-if="isLoading" />
  <main v-else class="main">
    <div class="container">
      <div class="main__inner">
        <div class="main__content">
          <h1>
            Площадка, где инновации находят
            <span>возможности</span>
          </h1>
          <p>
            Начните путь к инновационному будущему. Наша венчурная компания
            готова помочь вам воплотить ваши мечты в реальность
          </p>
          <Button @click="redirect('/registration')">Присоединиться</Button>
        </div>
        <img src="../../assets/images/main-bg.png" alt="" />
      </div>
    </div>
  </main>
  <MainCategory />
  <Partners />
  <Opportunity />
  <Requirement />
  <Members />
  <Articles :articles="articles" />
  <FAQ />
</template>

<script>
import Button from "@/components/UIKit/MainButton.vue";
import { ref, onMounted, watch, computed } from "vue";
import MainCategory from "@/components/partials/MainPage/MainCategory.vue";
import Partners from "@/components/partials/MainPage/Partners.vue";
import Members from "@/components/partials/MainPage/Members.vue";
import Articles from "@/components/partials/MainPage/Articles.vue";
import FAQ from "@/components/partials/MainPage/FAQ.vue";
import Requirement from "@/components/partials/MainPage/Requirement.vue";
import { useRouter, useRoute } from "vue-router";
import Opportunity from "@/components/partials/MainPage/Opportunity.vue";
import Loader from "@/components/global/Loader.vue";
import { useStore } from "vuex";

export default {
  components: {
    Button,
    MainCategory,
    Members,
    Articles,
    FAQ,
    Partners,
    Requirement,
    Opportunity,
    Loader,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const isLoading = ref(true);
    const articles = computed(() => store.state.articles.articlesMain);
    const roles = ref(["startup", "corporation", "investor", "specialist"]);

    const currentType = computed(() => route.params.type);

    onMounted(async () => {
      await store
        .dispatch("articles/getArticlesMain", "?page_size=4")
        .then((res) => {
          isLoading.value = false;
        });

      if (roles.value.includes(currentType.value)) {
        localStorage.setItem("mainPageType", JSON.stringify(route.params.type));
      }

      isLoading.value = false;
    });

    watch(currentType, (newType) => {
      if (roles.value.includes(newType)) {
        localStorage.setItem("mainPageType", JSON.stringify(newType));
      }
    });

    const redirect = (event) => {
      router.push({ path: event });
    };

    return {
      store,
      router,
      route,
      roles,
      currentType,
      isLoading,
      redirect,
      articles,
    };
  },
};
</script>

<style></style>

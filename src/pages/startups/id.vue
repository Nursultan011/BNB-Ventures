<template>
  <section class="inner-page">
    <div class="container">
      <div class="inner-page__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/startups">Найти стартап</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">стартап</li>
        </Breadcrumb>
        <p class="title">Ubex</p>
        <div class="inner-page__card">
          <div class="logo">
            <img src="../../assets/images/member1.png" alt="" />
          </div>
          <div class="inner-page__card-content">
            <div class="full">
              <label for="">Описание</label>
              <p>
                Стартап повышает эффективность рекламы за счёт современных технологий и
                качественного сервиса
              </p>
            </div>
            <div>
              <label for="">Год основания</label>
              <p>2023</p>
            </div>
            <div>
              <label for="">Количество сотрудников</label>
              <p>10</p>
            </div>
            <div class="full">
              <label> Технология и направления </label>
              <div class="item">
                <span> AdTech & MarTech </span>
              </div>
            </div>
          </div>
        </div>
        <RegistrationBanner v-if="!store.state.auth.user" />
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import RegistrationBanner from "@/components/global/RegistrationBanner.vue";

export default {
  components: {
    Breadcrumb,
    RegistrationBanner,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const isLoading = ref(true);

    const card = computed(() => store.state.search.startup);

    const InitData = () => {
      store.dispatch("search/getStartup", route.params.id).then((res) => {
        isLoading.value = false;
      });
    };

    onMounted(() => {
      InitData();
    });

    return {
      route,
      store,
      card,
      isLoading,
    };
  },
};
</script>

<style></style>

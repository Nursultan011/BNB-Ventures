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
          <li
            class="breadcrumb-item active"
            aria-current="page"
            v-if="card && card.startup_stage_name"
          >
            {{ card.startup_stage_name }}
          </li>
        </Breadcrumb>
        <p class="title" v-if="card && card.startup_stage_name">
          {{ card.startup_stage_name }}
        </p>
        <div class="inner-page__card">
          <div class="logo">
            <img v-if="card && card.logo" :src="card.logo" alt="" />
          </div>
          <div class="inner-page__card-content">
            <div class="full" v-if="card && card.description">
              <label for="">Описание</label>
              <p>
                {{ card.description }}
              </p>
            </div>
            <div v-if="card && card.organization_year">
              <label for="">Год основания</label>
              <p>
                {{ card.organization_year }}
              </p>
            </div>
            <div v-if="card && card.employees_count">
              <label for="">Количество сотрудников</label>
              <p>{{ card.employees_count }}</p>
            </div>
            <div class="full">
              <label> Направления </label>
              <div class="item" v-if="card && card.industries">
                <span v-for="(item, i) in card.industries" :key="i">
                  {{ item }}
                </span>
              </div>
            </div>
            <div class="full">
              <label> Технология </label>
              <div class="item" v-if="card && card.technologies">
                <span v-for="(item, i) in card.technologies" :key="i">
                  {{ item }}
                </span>
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

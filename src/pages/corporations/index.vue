<template>
  <section class="search">
    <div class="container">
      <div class="search__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Корпорации</li>
        </Breadcrumb>
        <p class="title">Корпорации</p>
        <div class="description" v-if="cards">Всего {{ cards.length }} корпорации</div>
        <div class="search__wrap">
          <div class="filters">Фильтр</div>
          <div class="search__content">
            <div class="search__input">
              <input type="text" placeholder="Поиск" />
            </div>
            <div class="search__empty" v-if="false">
              <img src="../../assets/images/empty.png" alt="" />
              <p>По вашим запросам ничего не найдено</p>
            </div>
            <div class="search__cards" v-if="cards">
              <div class="search__card" v-for="(item, i) in cards" :key="i">
                <div class="icon">
                  <img v-if="item.logo" :src="item.logo" alt="" />
                </div>
                <div class="content">
                  <h3 v-if="item.startup_name">{{ item.startup_name }}</h3>
                  <p v-if="item.description">
                    {{ item.description }}
                  </p>
                  <div class="category" v-if="item.technologies">
                    <span v-for="(technology, n) in item.technologies" :key="n">
                      {{ technology }}
                    </span>
                  </div>
                  <button @click="detailPage(item.id)">
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
                        fill="#5640FA"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <RegistrationBanner v-if="!store.state.auth.user" />
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
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import RegistrationBanner from "@/components/global/RegistrationBanner.vue";

export default {
  components: {
    Breadcrumb,
    RegistrationBanner,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoading = ref(true);

    const cards = computed(() => store.state.search.corporations);

    const InitData = () => {
      store.dispatch("search/getCorporations").then((res) => {
        isLoading.value = false;
      });
    };

    const detailPage = (id) => {
      router.push("/corporations/" + id);
    };

    onMounted(() => {
      InitData();
    });

    return {
      router,
      store,
      cards,
      isLoading,
      detailPage,
    };
  },
};
</script>

<style></style>

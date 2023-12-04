<template>
  <section class="search">
    <div class="container">
      <div class="search__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Инвесторы</li>
        </Breadcrumb>
        <p class="title">Инвесторы</p>
        <div class="description" v-if="cards">
          Всего {{ cards.length }} инвесторов
        </div>
        <div class="search__wrap">
          <div class="filters">
            <p class="filters__title">Фильтр</p>
            <div class="filters__items" v-if="filters && filters.industries">
              <p>Индустрии</p>
              <div v-for="(flt, i) in filters.industries" :key="i">
                <input
                  type="checkbox"
                  :value="flt.id"
                  @change="updateSelectedFilters(flt.id, 'industries')"
                />
                <span>{{ flt.name }}</span>
              </div>
            </div>
            <div class="filters__items" v-if="filters && filters.technologies">
              <p>Технологии</p>
              <div v-for="(flt, i) in filters.technologies" :key="i">
                <input
                  type="checkbox"
                  :value="flt.id"
                  @change="updateSelectedFilters(flt.id, 'technologies')"
                />
                <span>{{ flt.name }}</span>
              </div>
            </div>
          </div>
          <div class="search__content">
            <div class="search__input">
              <input type="text" placeholder="Поиск" />
            </div>
            <div class="search__cards" v-if="cards && cards.length > 0">
              <div class="search__card" v-for="(item, i) in cards" :key="i">
                <div class="icon">
                  <img
                    v-if="item.profile_image"
                    :src="item.profile_image"
                    alt=""
                  />
                </div>
                <div class="content">
                  <h3 v-if="item.contact_name">{{ item.contact_name }}</h3>
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
            <div class="search__empty" v-else>
              <img src="../../assets/images/empty.png" alt="" />
              <p>По вашим запросам ничего не найдено</p>
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
    const cards = computed(() => store.state.search.investors);
    const filters = computed(() => store.state.search.filters);
    const selectedFilters = ref({});

    const InitData = (event) => {
      store.dispatch("search/getInvestors", event).then((res) => {
        if (res && res.length === 0) {
        }
        isLoading.value = false;
      });
    };

    const GetFilters = async () => {
      await store.dispatch("search/getFilters").then((res) => {
        console.log(res);
      });
    };

    const detailPage = (id) => {
      router.push("/investors/" + id);
    };

    const updateSelectedFilters = (filterId, filterCategory) => {
      if (!selectedFilters.value[filterCategory]) {
        selectedFilters.value[filterCategory] = [];
      }

      const index = selectedFilters.value[filterCategory].indexOf(filterId);
      if (index > -1) {
        selectedFilters.value[filterCategory].splice(index, 1);
      } else {
        selectedFilters.value[filterCategory].push(filterId);
      }

      console.log(selectedFilters.value);
      InitData(selectedFilters.value);
    };

    onMounted(async () => {
      await GetFilters();
      InitData();
    });

    return {
      router,
      store,
      cards,
      isLoading,
      detailPage,
      filters,
      selectedFilters,
      updateSelectedFilters,
    };
  },
};
</script>

<style></style>

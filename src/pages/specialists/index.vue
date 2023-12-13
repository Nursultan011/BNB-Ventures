<template>
  <Loader v-if="isLoading" />
  <section v-else class="search">
    <div class="container">
      <div class="search__inner">
        <Breadcrumb>
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Специалисты
          </li>
        </Breadcrumb>
        <p class="title">Специалисты</p>
        <div class="description desktop" v-if="cards">
          Всего {{ cards.length }} специалистов
        </div>
        <div class="search__wrap">
          <div class="filters" v-show="isFiltersVisible">
            <span class="filters__mobile-close" @click="toggleFilters">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 7L17 17"
                  stroke="#181236"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 17L17 7"
                  stroke="#181236"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <p class="filters__title">Фильтр</p>
            <div class="filters__items" v-if="filters && filters.industries">
              <p>Индустрии</p>
              <div v-for="(flt, i) in filters.industries" :key="i">
                <input
                  type="checkbox"
                  :value="flt.id"
                  @change="updateSelectedFilters(flt.id, 'industries')"
                  id="checkbox-{{ i }}"
                />
                <div class="checkmark"></div>
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
                  id="checkbox-{{ i }}"
                />
                <div class="checkmark"></div>
                <span>{{ flt.name }}</span>
              </div>
            </div>
          </div>
          <div class="search__content">
            <div class="search__input desktop">
              <input
                v-model="search"
                @input="performSearch"
                type="text"
                placeholder="Поиск"
              />
            </div>

            <div class="search__input search__mobile">
              <div class="search__mobile-head">
                <input
                  v-model="search"
                  @input="performSearch"
                  type="text"
                  placeholder="Поиск"
                />
                <span class="filters__mobile" @click="toggleFilters">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 4L9 12V18L15 21V12L20 4H4Z"
                      stroke="#717171"
                      stroke-width="1.5"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div class="description" v-if="cards">
                Всего {{ cards.length }} специалистов
              </div>
            </div>
            <div
              class="search__cards specialists__cards"
              v-if="cards && cards.length > 0"
            >
              <div class="search__card" v-for="(item, i) in cards" :key="i">
                <div class="icon">
                  <img
                    v-if="item.profile_image"
                    :src="item.profile_image"
                    alt=""
                  />
                </div>
                <div class="content">
                  <h3 v-if="item.name">{{ item.name }}</h3>
                  <div class="category" v-if="item.technologies">
                    <span
                      v-for="(technology, n) in item.technologies.slice(0, 3)"
                      :key="n"
                    >
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
import Loader from "@/components/global/Loader.vue";
import Breadcrumb from "@/components/UIKit/Breadcrumb.vue";
import { computed, onMounted, ref, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import RegistrationBanner from "@/components/global/RegistrationBanner.vue";

export default {
  components: {
    Loader,
    Breadcrumb,
    RegistrationBanner,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoading = ref(true);
    const cards = computed(() => store.state.search.specialists);
    const filters = computed(() => store.state.search.filters);
    const selectedFilters = ref({});
    const search = ref("");

    const InitData = (event) => {
      store.dispatch("search/getSpecialists", event).then((res) => {
        isLoading.value = false;
      });
    };

    const GetFilters = async () => {
      await store.dispatch("search/getFilters").then((res) => {
        console.log(res);
      });
    };

    const performSearch = () => {
      const searchFilters = {
        search: [search.value],
      };

      InitData(searchFilters);
    };

    const detailPage = (id) => {
      router.push("/specialists/" + id);
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

    const isFiltersVisible = ref(false);

    const isDesktop = ref(window.innerWidth >= 580);

    const updateIsDesktop = () => {
      isDesktop.value = window.innerWidth >= 580;
    };

    const toggleFilters = () => {
      if (!isDesktop.value) {
        isFiltersVisible.value = !isFiltersVisible.value;
      }
    };

    onMounted(() => {
      window.addEventListener("resize", updateIsDesktop);
      isFiltersVisible.value = isDesktop.value;
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateIsDesktop);
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
      toggleFilters,
      updateIsDesktop,
      isFiltersVisible,
      isDesktop,
      search,
      performSearch,
    };
  },
};
</script>

<style></style>

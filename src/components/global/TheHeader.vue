<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <img
          @click="redirect('/')"
          class="header__logo"
          src="@/assets/images/logo.svg"
          alt=""
        />
        <nav :class="{ opened: mobileMenuOpened }">
          <ul>
            <li
              :class="route.path == item.path ? 'active' : ''"
              @click="toPage(item)"
              v-for="(item, i) in navList"
              :key="i"
            >
              {{ item.name }}
            </li>
          </ul>
        </nav>
        <div class="header__wrap">
          <div class="language">
            <div class="selected" @click="selectLang = !selectLang">
              <img
                :src="require(`@/assets/images/${currentFlag}`)"
                alt="Flag"
              />
              <span v-if="currentLanguage === 'en'"> Eng </span>
              <span v-else-if="currentLanguage === 'ru'"> Рус </span>
              <span v-else-if="currentLanguage === 'kk'"> Каз </span>
              <svg
                :class="{ 'selected-active': selectLang }"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
              >
                <path
                  d="M1 0.75L5.5 5.25L10 0.75"
                  stroke="#181236"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="langs" v-if="selectLang">
              <div
                class="langs-item"
                v-for="lang in availableLanguages"
                :key="lang"
                @click="changeLanguage(lang.value)"
                :class="{ 'langs-item-active': lang.value === currentLanguage }"
              >
                <img
                  :src="require(`@/assets/images/${flags[lang.value]}`)"
                  alt="lang"
                />
                {{ lang.name }}
              </div>
            </div>
          </div>
          <div class="header__account" v-if="user && user.user">
            <div
              class="selected"
              ref="menuRef"
              @click="toggleMenu()"
              v-if="user.user"
              :class="{ active: isMenuOpen }"
            >
              {{ user.user.email }}
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
                  d="M15.2929 9.88274C15.6834 9.49221 16.3166 9.49221 16.7071 9.88274C17.0976 10.2733 17.0976 10.9064 16.7071 11.297L12 16.0041L7.2929 11.297C6.9024 10.9064 6.9024 10.2733 7.2929 9.88274C7.6834 9.49221 8.3166 9.49221 8.7071 9.88274L12 13.1757L15.2929 9.88274Z"
                  fill="#060D13"
                />
              </svg>
            </div>
            <div class="menu" v-if="user && user.user && isMenuOpen">
              <div class="menu-header">
                <span> Вы вошли как </span>
                <p v-if="user.user">{{ user.user.email }}</p>
              </div>
              <button
                @click="redirect(item.path)"
                v-for="(item, i) in menuSettings"
                :key="i"
              >
                <div class="icon" v-html="item.icon"></div>
                <span v-if="item.name">
                  {{ item.name }}
                </span>
              </button>
            </div>
          </div>
          <div class="header__actions" v-else>
            <BorderButton @click="redirect('/registration')"
              >Регистрация</BorderButton
            >
            <Button @click="redirect('/login')">Войти</Button>
          </div>
          <div class="menu-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              v-if="mobileMenuOpened"
              @click="mobileMenuOpened = false"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              v-else
              @click="mobileMenuOpened = true"
            >
              <path
                d="M4 5.5H20"
                stroke="#181236"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#181236"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 18.5H20"
                stroke="#181236"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Button from "@/components/UIKit/MainButton.vue";
import BorderButton from "@/components/UIKit/BorderButton.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

export default {
  components: {
    Button,
    BorderButton,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const { locale } = useI18n();
    const selectLang = ref(false);
    const isMenuOpen = ref(false);
    const menuRef = ref(null);

    const flags = {
      en: "en-flag.svg",
      ru: "ru-flag.svg",
      kk: "kk-flag.svg",
    };

    const availableLanguages = [
      {
        value: "en",
        name: "Eng",
      },
      {
        value: "ru",
        name: "Рус",
      },
      {
        value: "kk",
        name: "Каз",
      },
    ];

    const user = computed(() => store.state.auth.user);

    const navList = ref([
      {
        name: "Стартап",
        path: "/startups",
      },
      {
        name: "Корпорации",
        path: "/corporations",
      },
      {
        name: "Инвесторы",
        path: "/investors",
      },
      {
        name: "Специалисты",
        path: "/specialists",
      },
      {
        name: "Новости",
        path: "/articles",
      },
    ]);

    const menuSettings = ref([
      {
        name: "Моя анкета",
        path: "/form",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 11.5V7L15.5 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22H10" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 22C21 19.7908 19.2092 18 17 18C14.7908 18 13 19.7908 13 22" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 2V7H20" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      },
      {
        name: "Профиль",
        path: "/profile",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 22C21 17.0294 16.9706 13 12 13C7.02945 13 3 17.0294 3 22" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      },
      {
        name: "Выйти",
        path: "logout",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9958 3H3V21H12" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.5 16.5L21 12L16.5 7.5" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 11.9961H21" stroke="#5640FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
      },
    ]);

    const handleOutsideClick = (event) => {
      if (menuRef.value && !menuRef.value.contains(event.target)) {
        isMenuOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleOutsideClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleOutsideClick);
    });

    const redirect = async (event) => {
      if (event === "logout") {
        await store.dispatch("auth/logout").then((res) => {
          router.push("/");
        });
      } else {
        await router.push({ path: event });
      }
    };

    const toPage = (event) => {
      if (event.path) {
        redirect(event.path);
        mobileMenuOpened.value = false;
      }
    };

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const mobileMenuOpened = ref(false);

    const changeLanguage = (lang) => {
      locale.value = lang;
      selectLang.value = false;
    };

    const currentLanguage = computed(() => locale.value);
    const currentFlag = computed(() => flags[locale.value]);

    return {
      router,
      route,
      navList,
      menuRef,
      redirect,
      toPage,
      store,
      user,
      menuSettings,
      isMenuOpen,
      toggleMenu,
      mobileMenuOpened,
      selectLang,
      changeLanguage,
      availableLanguages,
      currentLanguage,
      currentFlag,
      flags,
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/_variables";
</style>

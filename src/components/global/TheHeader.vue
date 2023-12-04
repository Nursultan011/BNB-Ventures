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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
              >
                <rect y="0.5" width="24" height="17" fill="white" />
                <mask
                  id="mask0_633_346"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="18"
                >
                  <rect
                    x="0.25"
                    y="0.75"
                    width="23.5"
                    height="16.5"
                    fill="white"
                    stroke="white"
                    stroke-width="0.5"
                  />
                </mask>
                <g mask="url(#mask0_633_346)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 11.8337H24V6.16699H0V11.8337Z"
                    fill="#0C47B7"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 17.4997H24V11.833H0V17.4997Z"
                    fill="#E53B35"
                  />
                </g>
              </svg>
              Рус
              <svg
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
              <div class="langs-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                >
                  <rect width="33.6" height="24" rx="2" fill="white" />
                  <mask
                    id="mask0_268_1862"
                    style="mask-type: luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="34"
                    height="24"
                  >
                    <rect width="33.6" height="24" rx="2" fill="white" />
                  </mask>
                  <g mask="url(#mask0_268_1862)">
                    <rect width="33.6" height="24" rx="2" fill="#0A17A7" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.00875 16L-3.32814 23.6468L-1.53872 26.2998L12.8 16.6282V25.6H20.8V16.6281L35.1389 26.2998L36.9283 23.6469L25.5914 16H33.6V8.00001H25.5918L36.9286 0.353206L35.1392 -2.29971L20.8 7.37221V-1.59999H12.8V7.37212L-1.53907 -2.2997L-3.32849 0.353225L8.00834 8.00001H-1.14441e-05V16H8.00875Z"
                      fill="white"
                    />
                    <path
                      d="M22.4023 7.59861L37.6008 -2.40002"
                      stroke="#DB1F35"
                      stroke-width="0.666667"
                      stroke-linecap="round"
                    />
                    <path
                      d="M24.0156 16.437L37.6402 25.6204"
                      stroke="#DB1F35"
                      stroke-width="0.666667"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.60615 7.57261L-4.60547 -2.00513"
                      stroke="#DB1F35"
                      stroke-width="0.666667"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.1476 16.3259L-4.60547 26.7726"
                      stroke="#DB1F35"
                      stroke-width="0.666667"
                      stroke-linecap="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 14.4H14.4V24H19.2V14.4H33.6V9.6H19.2V0H14.4V9.6H0V14.4Z"
                      fill="#E6273E"
                    />
                  </g>
                </svg>
                Eng
              </div>
              <div class="langs-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                >
                  <rect width="33.6" height="24" rx="8" fill="white" />
                  <mask
                    id="mask0_268_1835"
                    style="mask-type: luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="34"
                    height="24"
                  >
                    <rect width="33.6" height="24" rx="2" fill="white" />
                  </mask>
                  <g mask="url(#mask0_268_1835)">
                    <rect width="33.6" height="24" rx="2" fill="#30C6E0" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.8 16.8C19.451 16.8 21.6 14.651 21.6 12C21.6 9.34905 19.451 7.20001 16.8 7.20001C14.149 7.20001 12 9.34905 12 12C12 14.651 14.149 16.8 16.8 16.8Z"
                      fill="#FFCD4B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.8418 20.5794L16.8 17.6563L18.7582 20.5794L19.2542 17.0962L22.2867 18.8801L21.2223 15.5267L24.7285 15.8182L22.3145 13.2586L25.6 12L22.3145 10.7413L24.7285 8.18181L21.2223 8.47332L22.2867 5.11987L19.2542 6.90381L18.7582 3.42062L16.8 6.34365L14.8418 3.42062L14.3458 6.90381L11.3133 5.11987L12.3777 8.47332L8.87147 8.18181L11.2855 10.7413L8 12L11.2855 13.2586L8.87147 15.8182L12.3777 15.5267L11.3133 18.8801L14.3458 17.0962L14.8418 20.5794ZM22.3992 12C22.3992 15.0928 19.892 17.6 16.7992 17.6C13.7064 17.6 11.1992 15.0928 11.1992 12C11.1992 8.9072 13.7064 6.39999 16.7992 6.39999C19.892 6.39999 22.3992 8.9072 22.3992 12Z"
                      fill="#FFCD4B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.59961 1.93331C1.59961 1.74921 1.74885 1.59998 1.93294 1.59998H2.86628C3.05037 1.59998 3.19961 1.74921 3.19961 1.93331V2.86664C3.19961 3.05074 3.05037 3.19998 2.86628 3.19998H1.93294C1.74885 3.19998 1.59961 3.05074 1.59961 2.86664V1.93331ZM1.59961 5.13331C1.59961 4.94921 1.74885 4.79998 1.93294 4.79998H2.86628C3.05037 4.79998 3.19961 4.94921 3.19961 5.13331V6.06664C3.19961 6.25074 3.05037 6.39998 2.86628 6.39998H1.93294C1.74885 6.39998 1.59961 6.25074 1.59961 6.06664V5.13331ZM1.93294 7.99998C1.74885 7.99998 1.59961 8.14921 1.59961 8.33331V9.26664C1.59961 9.45074 1.74885 9.59998 1.93294 9.59998H2.86628C3.05037 9.59998 3.19961 9.45074 3.19961 9.26664V8.33331C3.19961 8.14921 3.05037 7.99998 2.86628 7.99998H1.93294ZM1.59961 11.5333C1.59961 11.3492 1.74885 11.2 1.93294 11.2H2.86628C3.05037 11.2 3.19961 11.3492 3.19961 11.5333V12.4666C3.19961 12.6507 3.05037 12.8 2.86628 12.8H1.93294C1.74885 12.8 1.59961 12.6507 1.59961 12.4666V11.5333ZM1.93294 14.4C1.74885 14.4 1.59961 14.5492 1.59961 14.7333V15.6666C1.59961 15.8507 1.74885 16 1.93294 16H2.86628C3.05037 16 3.19961 15.8507 3.19961 15.6666V14.7333C3.19961 14.5492 3.05037 14.4 2.86628 14.4H1.93294ZM1.59961 17.9333C1.59961 17.7492 1.74885 17.6 1.93294 17.6H2.86628C3.05037 17.6 3.19961 17.7492 3.19961 17.9333V18.8666C3.19961 19.0507 3.05037 19.2 2.86628 19.2H1.93294C1.74885 19.2 1.59961 19.0507 1.59961 18.8666V17.9333ZM1.93294 20.8C1.74885 20.8 1.59961 20.9492 1.59961 21.1333V22.0666C1.59961 22.2507 1.74885 22.4 1.93294 22.4H2.86628C3.05037 22.4 3.19961 22.2507 3.19961 22.0666V21.1333C3.19961 20.9492 3.05037 20.8 2.86628 20.8H1.93294ZM3.19922 19.5333C3.19922 19.3492 3.34846 19.2 3.53255 19.2H4.46589C4.64998 19.2 4.79922 19.3492 4.79922 19.5333V20.4666C4.79922 20.6507 4.64998 20.8 4.46589 20.8H3.53255C3.34846 20.8 3.19922 20.6507 3.19922 20.4666V19.5333ZM3.53255 16C3.34846 16 3.19922 16.1492 3.19922 16.3333V17.2667C3.19922 17.4508 3.34846 17.6 3.53255 17.6H4.46589C4.64998 17.6 4.79922 17.4508 4.79922 17.2667V16.3333C4.79922 16.1492 4.64998 16 4.46589 16H3.53255ZM3.19922 13.1333C3.19922 12.9492 3.34846 12.7999 3.53255 12.7999H4.46589C4.64998 12.7999 4.79922 12.9492 4.79922 13.1333V14.0666C4.79922 14.2507 4.64998 14.3999 4.46589 14.3999H3.53255C3.34846 14.3999 3.19922 14.2507 3.19922 14.0666V13.1333ZM3.53255 9.59998C3.34846 9.59998 3.19922 9.74921 3.19922 9.93331V10.8666C3.19922 11.0507 3.34846 11.2 3.53255 11.2H4.46589C4.64998 11.2 4.79922 11.0507 4.79922 10.8666V9.93331C4.79922 9.74921 4.64998 9.59998 4.46589 9.59998H3.53255ZM3.19922 6.73336C3.19922 6.54926 3.34846 6.40002 3.53255 6.40002H4.46589C4.64998 6.40002 4.79922 6.54926 4.79922 6.73336V7.66669C4.79922 7.85079 4.64998 8.00002 4.46589 8.00002H3.53255C3.34846 8.00002 3.19922 7.85079 3.19922 7.66669V6.73336ZM3.53255 3.19995C3.34846 3.19995 3.19922 3.34919 3.19922 3.53328V4.46662C3.19922 4.65071 3.34846 4.79995 3.53255 4.79995H4.46589C4.64998 4.79995 4.79922 4.65071 4.79922 4.46662V3.53328C4.79922 3.34919 4.64998 3.19995 4.46589 3.19995H3.53255Z"
                      fill="#FFCD4B"
                    />
                  </g>
                </svg>
                Kаз
              </div>
            </div>
          </div>
          <div class="header__account" v-if="user">
            <div
              class="selected"
              ref="menuRef"
              @click="toggleMenu()"
              v-if="user.user"
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
            <div class="menu" v-if="user.user && isMenuOpen">
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

export default {
  components: {
    Button,
    BorderButton,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const user = computed(() => store.state.auth.user);

    const isMenuOpen = ref(false);
    const menuRef = ref(null);

    const selectLang = ref(false);

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

    const redirect = (event) => {
      if (event === "logout") {
        store.dispatch("auth/logout").then((res) => {
          router.push("/");
        });
      } else {
        router.push({ path: event });
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
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/_variables";
</style>

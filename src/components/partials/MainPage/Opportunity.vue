<template>
  <section class="opportunity">
    <div class="container">
      <div class="opportunity__inner">
        <h2 class="title" v-if="currentPage.name">{{ currentPage.name }}</h2>
        <Splide
          v-if="currentPage.cards"
          :options="{
            type: 'loop',
            interval: 3000,
            speed: 700,
            Infinity: false,
            pagination: false,
            arrows: true,
            autoWidth: true,
            focus: 0,
            omitEnd: true,
            breakpoints: {
              580: {
                perPage: 1,
                swipe: true,
              },
            },
          }"
        >
          <SplideSlide v-for="(slide, index) in currentPage.cards" :key="index">
            <div class="slide-item">
              <img
                v-if="slide.icon"
                :src="require(`@/assets/images/${slide.icon}`)"
                alt=""
              />
              <p class="slide-title" v-if="slide.title">{{ slide.title }}</p>
              <p class="slide-description" v-if="slide.description">
                {{ slide.description }}
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { useRouter, useRoute } from "vue-router";

export default {
  components: { Splide, SplideSlide },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const types = ref([
      {
        name: "Возможности для стартапа",
        path: "startup",
        cards: [
          {
            icon: "opp-1.png",
            title: "Подайте заявку на пилот",
            description:
              "Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них",
          },
          {
            icon: "opp-2.png",
            title: "Найдите инвестора",
            description:
              "Связывайтесь с инвесторами и привлекайте венчурный капитал",
          },
          {
            icon: "opp-3.png",
            title: "Все на одной платформе",
            description:
              "Выбирайте инструменты для повышения эффективности бизнеса и партнеров",
          },
          {
            icon: "opp-4.png",
            title: "Станьте частью площадки",
            description:
              "Участвуйте в мероприятиях, подпишитесь на медиа-проекты и получайте полезный контент",
          },
        ],
      },
      {
        name: "Возможности для корпорации",
        path: "corporation",
        cards: [
          {
            icon: "opp-1.png",
            title: "Подайте заявку на пилот",
            description:
              "Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них",
          },
          {
            icon: "opp-2.png",
            title: "Найдите инвестора",
            description:
              "Связывайтесь с инвесторами и привлекайте венчурный капитал",
          },
          {
            icon: "opp-3.png",
            title: "Все на одной платформе",
            description:
              "Выбирайте инструменты для повышения эффективности бизнеса и партнеров",
          },
          {
            icon: "opp-4.png",
            title: "Станьте частью площадки",
            description:
              "Участвуйте в мероприятиях, подпишитесь на медиа-проекты и получайте полезный контент",
          },
        ],
      },
      {
        name: "Возможности для инвестора",
        path: "investor",
        cards: [
          {
            icon: "opp-1.png",
            title: "Подайте заявку на пилот",
            description:
              "Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них",
          },
          {
            icon: "opp-2.png",
            title: "Найдите инвестора",
            description:
              "Связывайтесь с инвесторами и привлекайте венчурный капитал",
          },
          {
            icon: "opp-3.png",
            title: "Все на одной платформе",
            description:
              "Выбирайте инструменты для повышения эффективности бизнеса и партнеров",
          },
          {
            icon: "opp-4.png",
            title: "Станьте частью площадки",
            description:
              "Участвуйте в мероприятиях, подпишитесь на медиа-проекты и получайте полезный контент",
          },
        ],
      },
      {
        name: "Возможности для специалиста",
        path: "specialist",
        cards: [
          {
            icon: "opp-1.png",
            title: "Подайте заявку на пилот",
            description:
              "Знакомьтесь с запросами компаний на технологии и сразу откликайтесь на них",
          },
          {
            icon: "opp-2.png",
            title: "Найдите инвестора",
            description:
              "Связывайтесь с инвесторами и привлекайте венчурный капитал",
          },
          {
            icon: "opp-3.png",
            title: "Все на одной платформе",
            description:
              "Выбирайте инструменты для повышения эффективности бизнеса и партнеров",
          },
          {
            icon: "opp-4.png",
            title: "Станьте частью площадки",
            description:
              "Участвуйте в мероприятиях, подпишитесь на медиа-проекты и получайте полезный контент",
          },
        ],
      },
    ]);

    const currentPage = computed(() => {
      return (
        types.value.find((tab) => tab.path === route.params.type) ||
        types.value[0]
      );
    });

    return { currentPage, route, router, types };
  },
};
</script>

<style></style>

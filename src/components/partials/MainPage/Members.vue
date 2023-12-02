<template>
  <section class="members">
    <div class="container">
      <div class="members__inner">
        <h2 class="title">Наши участники, которые уже работают с нами</h2>
        <div class="members__cards">
          <div class="members__card" v-for="(item, i) in members" :key="i">
            <div class="icon">
              <img
                v-if="item.icon"
                :src="require(`../../../assets/images/${item.icon}`)"
                alt=""
              />
            </div>
            <span>
              {{ item.title }}
            </span>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
        <RegistrationBanner v-if="!store.state.auth.user" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import RegistrationBanner from "../../global/RegistrationBanner.vue";
import { useStore } from "vuex";

export default {
  components: {
    RegistrationBanner,
  },
  setup() {
    const store = useStore();

    const members = ref([
      {
        icon: "member1.png",
        title: "Ubex",
        description:
          "Повышаем эффективность рекламы за счёт современных технологий и качественного сервиса",
      },
      {
        icon: "member2.png",
        title: "Medframe",
        description:
          "Мы помогаем предотвращать ошибки диагностики при работе с медицинской визуализацией (КТ, МРТ, рентген)",
      },
      {
        icon: "member3.png",
        title: "UMAP",
        description:
          "B2B2C SaaS решение для навигации, ориентирования и информирования людей в помещениях при помощи indoor-карт",
      },
    ]);

    return {
      store,
      members,
    };
  },
};
</script>

<style></style>

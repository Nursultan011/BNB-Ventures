<template>
  <section class="partners">
    <div class="container">
      <div class="partners__inner">
        <h2 class="title">Компании, с которыми мы работали</h2>
        <div class="partners__items">
          <div v-for="(img, i) in partners" :key="i">
            <img :src="require(`../../../assets/images/partners/${img}`)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const partners = ref([
      "forte.png",
      "halyk.png",
      "chevron.png",
      "samruk.png",
      "freedom.png",
      "kazatomprom.png",
    ]);

    return {
      partners,
    };
  },
};
</script>

<style></style>

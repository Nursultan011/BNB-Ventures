<template>
  <section class="page-404">
    <div class="container">
      <div class="page-404__inner">
        <img src="../../assets/images/404.png" alt="" />
        <p>К сожалению, запрашиваемая страница не найдена...</p>
        <Button>
          <router-link to="/">Вернуться на главную</router-link>
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../UIKit/MainButton.vue";

export default {
  components: {
    Button,
  },
};
</script>

<style></style>

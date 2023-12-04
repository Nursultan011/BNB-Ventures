<template>
  <div class="registration-banner">
    <div>
      <p>
        Полный список участников будет доступно после регистрации на площадке
      </p>
      <Button @click="redirect('/registration')">Присоединиться</Button>
    </div>
    <img src="../../assets/images/accessBanner.png" alt="" />
  </div>
</template>

<script>
import Button from "@/components/UIKit/MainButton.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    Button,
  },
  setup() {
    const router = useRouter();

    const redirect = (event) => {
      router.push({ path: event });
    };

    return {
      router,
      redirect,
    };
  },
};
</script>

<style></style>

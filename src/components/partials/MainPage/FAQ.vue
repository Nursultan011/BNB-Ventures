<template>
  <section class="faq">
    <div class="container">
      <div class="faq__inner">
        <div class="faq__wrap">
          <h2 class="title">Часто задаваемые вопросы</h2>
          <p>
            Если вы не нашли ответа на свой вопрос, то можете написать в нашу
            службу поддержки
          </p>
          <BorderButton @click="openModal"
            >Написать в службу поддержки</BorderButton
          >
        </div>
        <div class="faq__items">
          <div class="faq__item" v-for="(item, i) in faqs" :key="i">
            <div
              @click="toggleDescription(i)"
              :class="isOpen[i] ? 'active' : ''"
            >
              <p>{{ item.title }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M22.8358 22.365L22.3644 22.8364C22.1041 23.0968 21.682 23.0968 21.4217 22.8365L16.0005 17.4153L10.5793 22.8365C10.319 23.0968 9.89688 23.0968 9.63652 22.8364L9.16517 22.365C8.90481 22.1047 8.90481 21.6825 9.16509 21.4223L14.5863 16.0011L9.16512 10.5799C8.90477 10.3196 8.90479 9.89746 9.16514 9.6371L9.6365 9.16575C9.89686 8.90539 10.319 8.90537 10.5793 9.16572L16.0005 14.5869L21.4216 9.16571C21.682 8.90536 22.1041 8.90538 22.3645 9.16574L22.8358 9.6371C23.0962 9.89745 23.0962 10.3196 22.8359 10.5799L17.4147 16.0011L22.8359 21.4223C23.0962 21.6826 23.0962 22.1047 22.8358 22.365Z"
                  fill="#5640FA"
                />
              </svg>
            </div>
            <p v-show="isOpen[i]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <SupportModal ref="modalRef" />
  </section>
</template>

<script>
import BorderButton from "@/components/UIKit/BorderButton.vue";
import SupportModal from "@/components/global/SupportModal.vue";
import { ref } from "vue";

export default {
  components: {
    BorderButton,
    SupportModal,
  },
  setup() {
    const modalRef = ref(null);

    const faqs = ref([
      {
        title: "Каковы сроки получения ответа на инвестиционное предложение?",
        description:
          "Мы стараемся рассмотреть каждое предложение внимательно, но сроки ответа могут варьироваться в зависимости от загруженности. Обычно мы стараемся ответить в течение нескольких недель.",
      },
      {
        title: "Какие требования вы предъявляете к стартапам для инвестиций?",
        description:
          "Мы стараемся рассмотреть каждое предложение внимательно, но сроки ответа могут варьироваться в зависимости от загруженности. Обычно мы стараемся ответить в течение нескольких недель.",
      },
      {
        title: "Есть ли у вас минимальная или максимальная сумма инвестиций?",
        description:
          "Мы стараемся рассмотреть каждое предложение внимательно, но сроки ответа могут варьироваться в зависимости от загруженности. Обычно мы стараемся ответить в течение нескольких недель.",
      },
      {
        title:
          "Какие виды поддержки вы предоставляете стартапам после инвестиции?",
        description:
          "Мы стараемся рассмотреть каждое предложение внимательно, но сроки ответа могут варьироваться в зависимости от загруженности. Обычно мы стараемся ответить в течение нескольких недель.",
      },
      {
        title: "Как связаться с вашей компанией для дополнительных вопросов?",
        description:
          "Мы стараемся рассмотреть каждое предложение внимательно, но сроки ответа могут варьироваться в зависимости от загруженности. Обычно мы стараемся ответить в течение нескольких недель.",
      },
    ]);

    const isOpen = ref(Array(faqs.value.length).fill(false));
    isOpen.value[0] = true;

    const toggleDescription = (index) => {
      isOpen.value = isOpen.value.map((state, i) =>
        i === index ? !state : false
      );
    };

    const openModal = () => {
      if (modalRef.value) {
        modalRef.value.open();
      }
    };

    return {
      faqs,
      isOpen,
      toggleDescription,
      openModal,
      modalRef,
    };
  },
};
</script>

<style></style>

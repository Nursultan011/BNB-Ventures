<template>
  <section class="requirement">
    <div class="container">
      <div class="requirement__inner">
        <div class="left">
          <div class="requirement__tabs">
            <span
              v-for="(tab, i) in tabs"
              :key="i"
              :class="{ active: isActiveTab(tab) }"
              @click="changeTab(tab)"
            >
              {{ tab.name }}
            </span>
          </div>
          <p v-if="currentTab.title">
            Какие требования для
            <span>{{ currentTab.title }}</span>
          </p>
        </div>
        <div class="right">
          <div class="cards" v-if="currentTab.info">
            <div class="card" v-for="(card, i) in currentTab.info" :key="i">
              <div class="index">
                {{ i + 1 }}
              </div>
              <p class="title" v-if="card.title">{{ card.title }}</p>
              <p class="description" v-if="card.description">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const tabs = ref([
      {
        name: "Стартап",
        path: "startup",
        title: "cтартапа?",
        info: [
          {
            title: "Технологический уклон в инновации",
            description: "Обязательно наличие инновационной технологии",
          },
          {
            title: "Зарегистрированное юрлицо или ИП",
            description: "Бизнес должен быть оформлен юридически",
          },
          {
            title: "Бизнес-план и анализ рынка",
            description: "Иметь базовый бизнес-план с описанием идеи и цели",
          },
          {
            title: "Наличие MVP или готового продукта",
            description:
              "Проекты на стадии прототипа и идеи временно не публикуются",
          },
        ],
      },
      {
        name: "Корпорации",
        path: "corporation",
        title: "корпорации?",
        info: [
          {
            title: "Совместимость технологических стеков",
            description:
              "Для гарантии плавного внедрения технологий и обмен данных",
          },
          {
            title: "Безопасность Данных",
            description:
              "Высокие стандарты безопасности данных, соответствующие корпоративным требованиям и нормативам",
          },
          {
            title: "Стандарты интеграции",
            description:
              "Соответствие стандартам интеграции, используемым в корпоративной среде, для эффективного взаимодействия.",
          },
          {
            title: "Прозрачность и отчетность",
            description:
              "Быть прозрачным и регулярно делать отчет о ходе проектов",
          },
        ],
      },
      {
        name: "Инвесторы",
        path: "investor",
        title: "инвестора?",
        info: [
          {
            title: "Технологический уклон в инновации",
            description: "Обязательно наличие инновационной технологии",
          },
          {
            title: "Зарегистрированное юрлицо или ИП",
            description: "Бизнес должен быть оформлен юридически",
          },
          {
            title: "Бизнес-план и анализ рынка",
            description: "Иметь базовый бизнес-план с описанием идеи и цели",
          },
          {
            title: "Наличие MVP или готового продукта",
            description:
              "Проекты на стадии прототипа и идеи временно не публикуются",
          },
        ],
      },
      {
        name: "Специалисты",
        path: "specialist",
        title: "специалиста?",
        info: [
          {
            title: "Технологический уклон в инновации",
            description: "Обязательно наличие инновационной технологии",
          },
          {
            title: "Зарегистрированное юрлицо или ИП",
            description: "Бизнес должен быть оформлен юридически",
          },
          {
            title: "Бизнес-план и анализ рынка",
            description: "Иметь базовый бизнес-план с описанием идеи и цели",
          },
          {
            title: "Наличие MVP или готового продукта",
            description:
              "Проекты на стадии прототипа и идеи временно не публикуются",
          },
        ],
      },
    ]);

    const defaultTabPath = tabs.value[0].path;
    const storedTabPath = localStorage.getItem("mainPageType");
    const currentType = ref(
      storedTabPath ? JSON.parse(storedTabPath) : defaultTabPath
    );

    const currentTab = computed(() => {
      return (
        tabs.value.find((tab) => tab.path === currentType.value) ||
        tabs.value[0]
      );
    });

    const changeTab = (tab) => {
      localStorage.setItem("mainPageType", JSON.stringify(tab.path));
      currentType.value = tab.path; // Обновление реактивного значения
    };

    const isActiveTab = (tab) => {
      return tab.path === currentType.value;
    };

    return {
      tabs,
      currentTab,
      changeTab,
      isActiveTab,
    };
  },
};
</script>

<style></style>

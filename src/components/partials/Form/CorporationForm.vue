<template>
   <Loader v-if="isLoading" />
  <div v-else>
    <p class="questionnaire__title">Анкета корпорации</p>
    <form class="questionnaire auth__form">
      <h3>Основная информация</h3>
      <div class="text-field">
        <label for="">Публичное название</label>
        <input
          required
          v-model="form.public_name"
          type="text"
          placeholder="Например, BnB Ventures"
        />
        <div v-if="formErrors && formErrors.public_name" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.public_name"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Наименование организации</label>
        <input
          v-model="form.organization_name"
          required
          type="text"
          placeholder="Например, ООО “Компания”"
        />
        <div
          v-if="formErrors && formErrors.organization_name"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.organization_name"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Публичная электронная почта</label>
        <input
          v-model="form.email"
          required
          type="text"
          placeholder="name@example.kz"
        />
        <div v-if="formErrors && formErrors.email" class="error-message">
          <span class="hasError" v-for="(item, i) in formErrors.email" :key="i">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Идентификационный номер</label>
        <input
          v-model="form.organization_id"
          required
          type="text"
          placeholder="Укажите номер"
        />
        <div
          v-if="formErrors && formErrors.organization_id"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.organization_id"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters.countries">
        <label for="">Страна регистрации</label>
        <select v-model="form.country" required>
          <option
            v-for="(item, i) in filters.countries"
            :key="i"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <div v-if="formErrors && formErrors.country" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.country"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Сайт</label>
        <input
          required
          v-model="form.website"
          type="text"
          placeholder="https://"
        />
        <p>Будет виден другим участникам</p>
        <div v-if="formErrors && formErrors.website" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.website"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Описание</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Расскажите о вашем продукте"
          v-model="form.description"
          @input="checkLength"
        ></textarea>
        <p>{{ charCount }} / 500</p>
        <div v-if="formErrors && formErrors.description" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.description"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Логотип</label>
        <image-uploader v-model="form.logo" />
        <p>
          Размер логотипа: до 1200х1200. Вес файла - не более 5 МБ, формат png,
          jpg.
        </p>
        <div v-if="formErrors && formErrors.logo" class="error-message">
          <span class="hasError" v-for="(item, i) in formErrors.logo" :key="i">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Откуда вы узнали о BnB Ventures?</label>
        <select v-model="form.information_source" required>
          <option
            v-for="(item, i) in information_source"
            :key="i"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
        <div
          v-if="formErrors && formErrors.information_source"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.information_source"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </form>
    <form class="questionnaire auth__form">
      <h3>Работа со стартапами</h3>
      <div class="text-field" v-if="filters && filters['innovation-methods']">
        <label for="">Методы работы с инновациями</label>
        <select v-model="form.methods">
          <option value="">Выберите методы</option>
          <option
            v-for="(item, i) in filters['innovation-methods']"
            :key="i"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <div v-if="formErrors && formErrors.methods" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.methods"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters['startup-stages']">
        <label for="">Релевантные стадии развития стартапов</label>
        <select v-model="form.stage">
          <option value="">Выберите стадии</option>
          <option
            v-for="(item, i) in filters['startup-stages']"
            :key="i"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <div v-if="formErrors && formErrors.stage" class="error-message">
          <span class="hasError" v-for="(item, i) in formErrors.stage" :key="i">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters['technologies']">
        <label for="">Релевантные технологии стартапов</label>
        <select v-model="form.technologies">
          <option value="">Выберите технологии</option>
          <option
            v-for="(item, i) in filters['technologies']"
            :key="i"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <div v-if="formErrors && formErrors.technologies" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.technologies"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters['industries']">
        <label for="">Релевантные индустрии стартапов</label>
        <select v-model="form.industries">
          <option value="">Выберите индустрии</option>
          <option
            v-for="(item, i) in filters['industries']"
            :key="i"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <div v-if="formErrors && formErrors.industries" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.industries"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for=""
          >У вашей компании есть опыт пилотирования со стартапами?</label
        >
        <div class="radio-button">
          <div>
            <input
              type="radio"
              id="have_experience_yes"
              name="have_experience"
              v-model="form.have_experience"
              value="Да"
            />
            <label for="have_experience_yes">Да</label>
          </div>
          <div>
            <input
              type="radio"
              id="have_experience_no"
              name="have_experience"
              v-model="form.have_experience"
              value="Нет"
            />
            <label for="have_experience_no">Нет</label>
          </div>
        </div>
        <div
          v-if="formErrors && formErrors.have_experience"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.have_experience"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Инвестирует ли ваша компания в стартапы?</label>
        <div class="radio-button">
          <div>
            <input
              type="radio"
              id="is_investing_yes"
              name="is_investing"
              v-model="form.is_investing"
              value="Да"
            />
            <label for="is_investing_yes">Да</label>
          </div>
          <div>
            <input
              type="radio"
              id="is_investing_no"
              name="is_investing"
              v-model="form.is_investing"
              value="Нет"
            />
            <label for="is_investing_no">Нет</label>
          </div>
        </div>
        <div v-if="formErrors && formErrors.is_investing" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.is_investing"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <button class="main-button" type="submit" @click.prevent="createForm">
        Отправить анкету
      </button>
    </form>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import ImageUploader from "@/components/UIKit/ImageUploader.vue";
import { useStore } from "vuex";
import Loader from "@/components/global/Loader.vue";

export default {
  components: { ImageUploader, Loader },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const filters = computed(() => store.state.search.filters);

    const formErrors = ref({});

    const form = ref({
      public_name: "",
      email: "",
      organization_name: "",
      organization_id: "",
      country: 0,
      website: "",
      description: "",
      information_source: "",
      methods: [],
      stage: [],
      technologies: [],
      industries: [],
      have_experience: "",
      is_investing: "",
      invest_rounds: [],
      geography: [],
      user: 0,
      pilotprojects: [
        {
          title: "string",
          description: "string",
        },
      ],
    });

    const charCount = computed(() => {
      return form.value.description.length;
    });

    const checkLength = () => {
      if (form.value.description.length > 500) {
        form.value.description = form.value.description.substring(0, 500);
      }
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        form.value.photo = URL.createObjectURL(file);
      } else {
        alert("Выберите изображение");
        form.value.photo = null;
      }
    };

    const removeSelectedImage = () => {
      form.value.photo = null;
    };

    const GetFilters = async () => {
      await store.dispatch("search/getFilters").then((res) => {
        isLoading.value = false;
      });
    };

    onMounted(async () => {
      await GetFilters();
    });

    const createForm = async () => {
      isLoading.value = true;

      await store
        .dispatch("profile/createProfile", form.value)
        .then((res) => {
          isLoading.value = false;
        })
        .catch((err) => {
          isLoading.value = false;

          if (err) {
            formErrors.value = err;
          }
        });
    };

    const information_source = ref([
      'Друзья', 'Знакомые', 'Семья', 'Социальные сети', 'Реклама в интернете', 'Рассылка через почту'
    ])

    return {
      store,
      filters,
      form,
      charCount,
      checkLength,
      handleFileUpload,
      removeSelectedImage,
      isLoading,
      createForm,
      formErrors,
      information_source
    };
  },
};
</script>

<style></style>

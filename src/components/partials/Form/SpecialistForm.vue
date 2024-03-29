<template>
  <Loader v-if="isLoading" />
  <div v-else>
    <p class="questionnaire__title">Анкета специалиста</p>
    <form class="questionnaire auth__form">
      <h3>Основная информация</h3>
      <div class="text-field">
        <label for="">Описание</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Расскажите о себе и своем опыте работы"
          v-model="form.experience"
          @input="checkLength"
        ></textarea>
        <p>{{ charCount }} / 1000</p>
        <div v-if="formErrors && formErrors.experience" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.experience"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters.industries">
        <label for="">Индустрии</label>
        <CustomMultiselect
          :options="filters.industries"
          placeholder="Выберите индустрии"
          label="name"
          track-by="id"
          v-model="form.industries"
        />
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
      <div class="text-field" v-if="filters && filters.technologies">
        <label for="">Технологии</label>
        <CustomMultiselect
          :options="filters.technologies"
          placeholder="Выберите технологии"
          label="name"
          track-by="id"
          v-model="form.technologies"
        />
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
      <div class="text-field">
        <label for="">Опыт работы</label>
        <select v-model="form.experience_years" required>
          <option v-for="(item, i) in experience_years" :key="i" :value="item">
            {{ item }}
          </option>
        </select>
        <div
          v-if="formErrors && formErrors.experience_years"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.experience_years"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Фото для профиля</label>
        <image-uploader v-model="form.profile_image" />
        <p>
          Размер логотипа: до 1200х1200. Вес файла - не более 5 МБ, формат png,
          jpg.
        </p>
        <div
          v-if="formErrors && formErrors.profile_image"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.profile_image"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Резюме</label>
        <image-uploader v-model="form.resume" />
        <p>Вес файла - не более 20 МБ, формат pdf.</p>
        <div v-if="formErrors && formErrors.resume" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.resume"
            :key="i"
          >
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
import CustomMultiselect from "@/components/global/Select.vue";

export default {
  components: { ImageUploader, Loader, CustomMultiselect },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const filters = computed(() => store.state.search.filters);

    const formErrors = ref({});

    const form = ref({
      experience: "",
      technologies: [],
      industries: [],
      experience_years: "",
      information_source: "",
      resume: "",
      profile_image: "",
    });

    const charCount = computed(() => {
      return form.value.experience.length;
    });

    const checkLength = () => {
      if (form.value.experience.length > 1000) {
        form.value.experience = form.value.experience.substring(0, 1000);
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
        .then((res) => {})
        .catch((err) => {
          isLoading.value = false;

          if (err) {
            formErrors.value = err;
          }
        });
    };

    const information_source = ref([
      "Друзья",
      "Знакомые",
      "Семья",
      "Социальные сети",
      "Реклама в интернете",
      "Рассылка через почту",
    ]);

    const experience_years = ref([
      "Нет опыта",
      "1-3 года",
      "3-6 года",
      "6+ лет",
    ]);

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
      information_source,
      experience_years,
    };
  },
};
</script>

<style></style>

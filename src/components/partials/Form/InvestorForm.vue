<template>
  <Loader v-if="isLoading" />
  <div v-else>
    <p class="questionnaire__title">Анкета инвестора бизнес-ангела</p>
    <form class="questionnaire auth__form">
      <h3>Основная информация</h3>
      <div class="text-field">
        <label for="">Имя и фамилия контактного лица</label>
        <input
          required
          v-model="form.contact_name"
          type="text"
          placeholder="Иван Иванов"
        />
        <div v-if="formErrors && formErrors.contact_name" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.contact_name"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Публичная электронная почта</label>
        <input required v-model="form.email" type="text" placeholder="name@example.kz" />
        <div v-if="formErrors && formErrors.email" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.email"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Номер телефона</label>
        <input
          required
          v-model="form.phone"
          type="text"
          placeholder="+7 (777) 123 45 67"
        />
        <div v-if="formErrors && formErrors.phone" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.phone"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters['countries']">
        <label for="">Страна регистрации</label>
        <select required v-model="form.country" aria-placeholder="Выберите страну">
          <option value="">Выберите страну</option>
          <option
            v-for="(item, i) in filters['countries']"
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
        <div v-if="formErrors && formErrors.information_source" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.information_source"
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
        <div v-if="formErrors && formErrors.profile_image" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.profile_image"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </form>
    <form class="questionnaire auth__form">
      <h3>Работа со стартапами</h3>
      <div class="text-field">
        <label for="">Размер инвестиционных средств</label>
        <input v-model="form.invest_sum" type="text" placeholder="$"  @keypress="isNumber" />
        <div v-if="formErrors && formErrors.invest_sum" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.invest_sum"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
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
          <span
            class="hasError"
            v-for="(item, i) in formErrors.stage"
            :key="i"
          >
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
        <div v-if="formErrors && formErrors.have_experience" class="error-message">
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
      profile_image: "",
      contact_name: "",
      email: "",
      phone: "",
      country: 0,
      description: "",
      information_source: "",
      invest_sum: "",
      methods: [0],
      stage: [0],
      technologies: [0],
      industries: [0],
      have_experience: "",
      is_investing: "",
      invest_rounds: [0],
      geography: [0],
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
        form.value.profile_image = URL.createObjectURL(file);
      } else {
        alert("Выберите изображение");
        form.value.profile_image = null;
      }
    };

    const removeSelectedImage = () => {
      form.value.profile_image = null;
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

    const isNumber = (evt) => {
      evt = evt || window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
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
      isNumber,
      information_source
    };
  },
};
</script>

<style></style>

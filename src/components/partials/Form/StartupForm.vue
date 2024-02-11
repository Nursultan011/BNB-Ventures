<template>
  <Loader v-if="isLoading" />
  <div v-else>
    <p class="questionnaire__title">Анкета стартапа</p>
    <form class="questionnaire auth__form">
      <div class="text-field">
        <label for="">Публичное название</label>
        <input
          required
          v-model="form.startup_name"
          type="text"
          placeholder="Например, BnB Ventures"
        />
        <div v-if="formErrors && formErrors.startup_name" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.startup_name"
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
        <input
          required
          v-model="form.email"
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
        <label for="">Номер телефона</label>
        <input
          required
          v-model="form.phone"
          type="text"
          placeholder="+7 (777) 123 45 67"
        />
        <p>Будет виден другим участникам</p>
        <div v-if="formErrors && formErrors.phone" class="error-message">
          <span class="hasError" v-for="(item, i) in formErrors.phone" :key="i">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Наименование организации</label>
        <input
          required
          v-model="form.organization_name"
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
        <label for="">Идентификационный номер</label>
        <input
          required
          v-model="form.organization_id"
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
      <div class="text-field">
        <label for="">Год основания</label>
        <input
          required
          v-model="form.organization_year"
          type="text"
          placeholder="Укажите год"
          @keypress="isNumber"
        />
        <div
          v-if="formErrors && formErrors.organization_year"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.organization_year"
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
        <label for="">Количество сотрудников</label>
        <input
          required
          v-model="form.employees_count"
          type="text"
          placeholder="Укажите количество сотрудников"
          @keypress="isNumber"
        />
        <div
          v-if="formErrors && formErrors.employees_count"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.employees_count"
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
          required
          v-model="form.description"
        ></textarea>
        <p>{{ form.description.length }} / 500</p>
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
      <div class="text-field" v-if="filters && filters['startup-stages']">
        <label for="">Стадия развития стартапа</label>
        <select v-model="form.startup_stage" required>
          <option
            v-for="(item, i) in filters['startup-stages']"
            :key="i"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <div
          v-if="formErrors && formErrors.startup_stage"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.startup_stage"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters['invest-stages']">
        <label for="">Стадия инвестирования</label>
        <select v-model="form.invest_stage" required>
          <option
            v-for="(item, i) in filters['invest-stages']"
            :key="i"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
        <div v-if="formErrors && formErrors.invest_stage" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.invest_stage"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters.industries">
        <label for="">Индустрии вашего стартапа</label>
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
        <label for="">Технологии вашего стартапа</label>
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
      <div class="text-field" v-if="filters && filters['bussiness-models']">
        <label for="">Бизнес-модели</label>
        <CustomMultiselect
          :options="filters['bussiness-models']"
          placeholder="Выберите бизнес-модели"
          label="name"
          track-by="id"
          v-model="form.bussiness_models"
        />
        <div
          v-if="formErrors && formErrors.bussiness_models"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.bussiness_models"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters['selling-models']">
        <label for="">Модели продаж</label>
        <CustomMultiselect
          :options="filters['selling-models']"
          placeholder="Выберите модели"
          label="name"
          track-by="id"
          v-model="form.selling_models"
        />
        <p>Укажите модели взаимодействия с клиентами в вашем бизнесе</p>
        <div
          v-if="formErrors && formErrors.selling_models"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.selling_models"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field" v-if="filters && filters.countries">
        <label for="">Рынки, на которых вы работаете</label>
        <CustomMultiselect
          :options="filters.countries"
          placeholder="Выберите страны"
          label="name"
          track-by="id"
          v-model="form.countries"
        />
        <div v-if="formErrors && formErrors.countries" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.countries"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label>Есть продажи?</label>
        <div class="radio-button">
          <div>
            <input
              type="radio"
              id="have_selling_yes"
              name="have_selling"
              v-model="form.have_sellings"
              value="Да"
            />
            <label for="have_selling_yes">Да</label>
          </div>
          <div>
            <input
              type="radio"
              id="have_selling_no"
              name="have_selling"
              v-model="form.have_sellings"
              value="Нет"
            />
            <label for="have_selling_no">Нет</label>
          </div>
        </div>
        <div
          v-if="formErrors && formErrors.have_sellings"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.have_sellings"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Есть успешные пилоты и/или внедрения в корпорации?</label>
        <div class="radio-button">
          <div>
            <input
              type="radio"
              id="have_pilots_yes"
              name="have_pilots"
              v-model="form.have_pilots"
              value="Да"
            />
            <label for="have_pilots_yes">Да</label>
          </div>
          <div>
            <input
              type="radio"
              id="have_pilots_no"
              name="have_pilots"
              v-model="form.have_pilots"
              value="Нет"
            />
            <label for="have_pilots_no">Нет</label>
          </div>
        </div>
        <div v-if="formErrors && formErrors.have_pilots" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.have_pilots"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Находитесь ли вы в активном поиске инвестиций?</label>
        <div class="radio-button">
          <div>
            <input
              type="radio"
              id="active_search_yes"
              name="active_search"
              v-model="form.active_search"
              value="Да"
            />
            <label for="active_search_yes">Да</label>
          </div>
          <div>
            <input
              type="radio"
              id="active_search_no"
              name="active_search"
              v-model="form.active_search"
              value="Нет"
            />
            <label for="active_search_no">Нет</label>
          </div>
        </div>
        <div
          v-if="formErrors && formErrors.active_search"
          class="error-message"
        >
          <span
            class="hasError"
            v-for="(item, i) in formErrors.active_search"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Общий объем ранее привлеченных инвестиций</label>
        <input
          v-model="form.invested_sum"
          required
          type="text"
          placeholder="$"
          @keypress="isNumber"
        />
        <div v-if="formErrors && formErrors.invested_sum" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.invested_sum"
            :key="i"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <div class="text-field">
        <label for="">Список инвесторов</label>
        <textarea
          v-model="form.investors"
          required
          placeholder="Перечислите инвесторов, от которых получали инвестиции"
        ></textarea>
        <p>
          Информация об инвесторах будет видна только пользователям с ролью
          Инвестора
        </p>
        <div v-if="formErrors && formErrors.investors" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.investors"
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
        <label for="">Презентация</label>
        <image-uploader v-model="form.presentation" />
        <p>Вес файла - не более 20 МБ, формат pdf.</p>
        <div v-if="formErrors && formErrors.presentation" class="error-message">
          <span
            class="hasError"
            v-for="(item, i) in formErrors.presentation"
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

    const information_source = ref([
      "Друзья",
      "Знакомые",
      "Семья",
      "Социальные сети",
      "Реклама в интернете",
      "Рассылка через почту",
    ]);

    const formErrors = ref({});

    const form = ref({
      startup_name: "",
      website: "",
      contact_name: "",
      email: "",
      phone: "",
      organization_name: "",
      organization_id: "",
      organization_year: 0,
      country: 0,
      employees_count: 0,
      description: "",
      startup_stage: 0,
      invest_stage: 0,
      technologies: [],
      industries: [],
      bussiness_models: [],
      selling_models: [],
      countries: [],
      have_sellings: "",
      have_pilots: "",
      active_search: "",
      invested_sum: "",
      investors: "",
      information_source: "",
      logo: "",
      presentation: "",
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
        .then((res) => {})
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
      information_source,
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

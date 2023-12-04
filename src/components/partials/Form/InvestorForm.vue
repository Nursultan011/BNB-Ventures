<template>
  <div>
    <p class="questionnaire__title">Анкета инвестора бизнес-ангела</p>
    <form class="questionnaire auth__form">
      <h3>Основная информация</h3>
      <div class="text-field">
        <label for="">Имя и фамилия контактного лица</label>
        <input
          v-model="form.contact_name"
          type="text"
          placeholder="Иван Иванов"
        />
      </div>
      <div class="text-field">
        <label for="">Публичная электронная почта</label>
        <input v-model="form.email" type="text" placeholder="name@example.kz" />
      </div>
      <div class="text-field">
        <label for="">Номер телефона</label>
        <input
          v-model="form.phone"
          type="text"
          placeholder="+7 (777) 123 45 67"
        />
      </div>
      <div class="text-field">
        <label for="">Страна регистрации</label>
        <select>
          <option value="">Выберите страну</option>
          <option value="">Казахстан</option>
        </select>
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
      </div>
      <div class="text-field">
        <label for="">Откуда вы узнали о BnB Ventures?</label>
        <select>
          <option value="">Выберите вариант ответа</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Фото для профиля</label>
        <image-uploader v-model="form.photo" />
        <p>
          Размер логотипа: до 1200х1200. Вес файла - не более 5 МБ, формат png,
          jpg.
        </p>
      </div>
    </form>
    <form class="questionnaire auth__form">
      <h3>Работа со стартапами</h3>
      <div class="text-field">
        <label for="">Размер инвестиционных средств</label>
        <input v-model="form.invest_sum" type="text" placeholder="$" />
      </div>
      <div class="text-field">
        <label for="">Методы работы с инновациями</label>
        <select>
          <option value="">Выберите методы</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Релевантные стадии развития стартапов</label>
        <select>
          <option value="">Выберите стадии</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Релевантные технологии стартапов</label>
        <select>
          <option value="">Выберите технологии</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Релевантные индустрии стартапов</label>
        <select>
          <option value="">Выберите индустрии</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for=""
          >У вашей компании есть опыт пилотирования со стартапами?</label
        >
        <input type="checkbox" />
        Да
        <input type="checkbox" />
        Нет
      </div>
      <div class="text-field">
        <label for="">Инвестирует ли ваша компания в стартапы?</label>
        <input type="checkbox" />
        Да
        <input type="checkbox" />
        Нет
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import ImageUploader from "@/components/UIKit/ImageUploader.vue";
export default {
  components: { ImageUploader },
  setup() {
    const form = ref({
      photo: "",
      contact_name: "string",
      email: "user@example.com",
      phone: "string",
      country: 0,
      description: "string",
      information_source: "Друзья",
      invest_sum: "string",
      methods: [0],
      stage: [0],
      technologies: [0],
      industries: [0],
      have_experience: "Да",
      is_investing: "Да",
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
        form.value.photo = URL.createObjectURL(file);
      } else {
        alert("Выберите изображение");
        form.value.photo = null;
      }
    };

    const removeSelectedImage = () => {
      form.value.photo = null;
    };

    return {
      form,
      charCount,
      checkLength,
      handleFileUpload,
      removeSelectedImage,
    };
  },
};
</script>

<style></style>

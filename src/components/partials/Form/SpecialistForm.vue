<template>
  <div>
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
          placeholder="Расскажите о вашем продукте"
        ></textarea>
        <p>0 / 1000</p>
      </div>
      <div class="text-field">
        <label for="">Индустрии</label>
        <select>
          <option value="">Выберите индустрии</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Технологии</label>
        <select>
          <option value="">Выберите технологии</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Опыт работы</label>
        <select>
          <option value="">Выберите опыт работы</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Фото для профиля</label>
        <input type="text" placeholder="Выберите файл или перетащите его" />
        <p>
          Размер логотипа: до 1200х1200. Вес файла - не более 5 МБ, формат png,
          jpg.
        </p>
      </div>
      <div class="text-field">
        <label for="">Резюме</label>
        <input type="text" placeholder="Выберите файл или перетащите его" />
        <p>Вес файла - не более 20 МБ, формат pdf.</p>
      </div>
      <div class="text-field">
        <label for="">Откуда вы узнали о BnB Ventures?</label>
        <select>
          <option value="">Выберите вариант ответа</option>
          <option value="">Казахстан</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

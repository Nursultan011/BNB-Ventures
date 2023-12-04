<template>
  <div>
    <p class="questionnaire__title">Анкета корпорации</p>
    <form class="questionnaire auth__form">
      <h3>Основная информация</h3>
      <div class="text-field">
        <label for="">Публичное название</label>
        <input type="text" placeholder="Например, BnB Ventures" />
      </div>
      <div class="text-field">
        <label for="">Наименование организации</label>
        <input type="text" placeholder="Например, ООО “Компания”" />
      </div>
      <div class="text-field">
        <label for="">Публичная электронная почта</label>
        <input type="text" placeholder="name@example.kz" />
      </div>
      <div class="text-field">
        <label for="">Идентификационный номер</label>
        <input type="text" placeholder="Укажите номер" />
      </div>
      <div class="text-field">
        <label for="">Страна регистрации</label>
        <select>
          <option value="">Выберите страну</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Сайт</label>
        <input type="text" placeholder="https://" />
      </div>
      <div class="text-field">
        <label for="">Описание</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Расскажите о вашем продукте"
        ></textarea>
        <p>0 / 500</p>
      </div>
      <div class="text-field">
        <label for="">Логотип</label>
        <input type="text" placeholder="Выберите файл или перетащите его" />
        <p>
          Размер логотипа: до 1200х1200. Вес файла - не более 5 МБ, формат png,
          jpg.
        </p>
      </div>
      <div class="text-field">
        <label for="">Откуда вы узнали о BnB Ventures?</label>
        <select>
          <option value="">Выберите вариант ответа</option>
          <option value="">Казахстан</option>
        </select>
      </div>
    </form>
    <form class="questionnaire auth__form">
      <h3>Работа со стартапами</h3>
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
          >У вашей корпорации есть опыт пилотирования со стартапами?</label
        >
        <input type="checkbox" />
        Да
        <input type="checkbox" />
        Нет
      </div>
      <div class="text-field">
        <label for="">Инвестирует ли ваша корпорация в стартапы?</label>
        <input type="checkbox" />
        Да
        <input type="checkbox" />
        Нет
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

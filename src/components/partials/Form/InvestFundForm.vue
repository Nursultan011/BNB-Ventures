<template>
  <div>
    <p class="questionnaire__title">Анкета инвестиционного фонда</p>
    <form class="questionnaire auth__form">
      <h3>Основная информация</h3>
      <div class="text-field">
        <label for="">Имя и фамилия контактного лица</label>
        <input type="text" placeholder="Иван Иванов" />
      </div>
      <div class="text-field">
        <label for="">Публичная электронная почта</label>
        <input type="text" placeholder="name@example.kz" />
      </div>
      <div class="text-field">
        <label for="">Номер телефона</label>
        <input type="text" placeholder="+7 (777) 123 45 67" />
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
        ></textarea>
        <p>0 / 500</p>
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
        <input type="text" placeholder="Выберите файл или перетащите его" />
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
        <input type="text" placeholder="$" />
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
export default {};
</script>

<style></style>

<template>
  <div>
    <p class="questionnaire__title">Анкета стартапа</p>
    <form class="questionnaire auth__form">
      <div class="text-field">
        <label for="">Публичное название</label>
        <input type="text" placeholder="Например, BnB Ventures" />
      </div>

      <div class="text-field">
        <label for="">Сайт</label>
        <input type="text" placeholder="https://" />
        <p>Будет виден другим участникам</p>
      </div>
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
        <p>Будет виден другим участникам</p>
      </div>
      <div class="text-field">
        <label for="">Наименование организации</label>
        <input type="text" placeholder="Например, ООО “Компания”" />
      </div>
      <div class="text-field">
        <label for="">Идентификационный номер</label>
        <input type="text" placeholder="Укажите номер" />
      </div>
      <div class="text-field">
        <label for="">Год основания</label>
        <input type="text" placeholder="Укажите год" />
      </div>
      <div class="text-field">
        <label for="">Страна регистрации</label>
        <select>
          <option value="">Выберите страну</option>
          <option value="">Казахстан</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Количество сотрудников</label>
        <input type="text" placeholder="Укажите количество сотрудников" />
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
        <label for="">Стадия развития стартапа</label>
        <select>
          <option value="">Выберите стадию развития</option>
          <option value="">Прототип, продаж нет</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Стадия инвестирования</label>
        <select>
          <option value="">Выберите стадию инвестирования</option>
          <option value="">Ранний рост</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Индустрии вашего стартапа</label>
        <select>
          <option value="">Выберите индустрии</option>
          <option value="">Ранний рост</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Технологии вашего стартапа</label>
        <select>
          <option value="">Выберите технологии</option>
          <option value="">Ранний рост</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Бизнес-модели</label>
        <select>
          <option value="">Выберите бизнес-модели</option>
          <option value="">Ранний рост</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Модели продаж</label>
        <select>
          <option value="">Выберите модели</option>
          <option value="">Ранний рост</option>
        </select>
        <p>Укажите модели взаимодействия с клиентами в вашем бизнесе</p>
      </div>
      <div class="text-field">
        <label for="">Рынки, на которых вы работаете</label>
        <select>
          <option value="">Выберите страны</option>
          <option value="">Ранний рост</option>
        </select>
      </div>
      <div class="text-field">
        <label for="">Есть продажи?</label>
        <input type="checkbox" />
        Да
        <input type="checkbox" />
        Нет
      </div>
      <div class="text-field">
        <label for="">Есть успешные пилоты и/или внедрения в корпорации?</label>
        <input type="checkbox" />
        Да
        <input type="checkbox" />
        Нет
      </div>
      <div class="text-field">
        <label for="">Находитесь ли вы в активном поиске инвестиций?</label>
        <input type="checkbox" />
        Да
        <input type="checkbox" />
        Нет
      </div>
      <div class="text-field">
        <label for="">Общий объем ранее привлеченных инвестиций</label>
        <input type="text" placeholder="$" />
      </div>
      <div class="text-field">
        <label for="">Список инвесторов</label>
        <textarea
          placeholder="Перечислите инвесторов, от которых получали инвестиции"
        ></textarea>
        <p>
          Информация об инвесторах будет видна только пользователям с ролью
          Инвестора
        </p>
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
        <label for="">Презентация</label>
        <input type="text" placeholder="Выберите файл или перетащите его" />
        <p>Вес файла - не более 20 МБ, формат pdf.</p>
      </div>
      <div class="text-field">
        <label for="">Откуда вы узнали о BnB Ventures?</label>
        <select>
          <option value="">Выберите вариант ответа</option>
          <option value="">Ранний рост</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

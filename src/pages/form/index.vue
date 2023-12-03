<template>
	<Loader v-if="loading" />
	<section v-else class="form-page">
		<div class="container">
			<div class="form-page__inner" v-if="steps === 1">
				<form
					class="questionnaire auth__form"
					v-if="role.user.profile_type == roles[0]"
				>
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
						<input
							type="text"
							placeholder="Укажите количество сотрудников"
						/>
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
						<p>
							Укажите модели взаимодействия с клиентами в вашем бизнесе
						</p>
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
						<label for=""
							>Есть успешные пилоты и/или внедрения в корпорации?</label
						>
						<input type="checkbox" />
						Да
						<input type="checkbox" />
						Нет
					</div>
					<div class="text-field">
						<label for=""
							>Находитесь ли вы в активном поиске инвестиций?</label
						>
						<input type="checkbox" />
						Да
						<input type="checkbox" />
						Нет
					</div>
					<div class="text-field">
						<label for=""
							>Общий объем ранее привлеченных инвестиций</label
						>
						<input type="text" placeholder="$" />
					</div>
					<div class="text-field">
						<label for="">Список инвесторов</label>
						<textarea
							placeholder="Перечислите инвесторов, от которых получали инвестиции"
						></textarea>
						<p>
							Информация об инвесторах будет видна только пользователям с
							ролью Инвестора
						</p>
					</div>
					<div class="text-field">
						<label for="">Логотип</label>
						<input
							type="text"
							placeholder="Выберите файл или перетащите его"
						/>
						<p>
							Размер логотипа: до 1200х1200. Вес файла - не более 5 МБ,
							формат png, jpg.
						</p>
					</div>
					<div class="text-field">
						<label for="">Презентация</label>
						<input
							type="text"
							placeholder="Выберите файл или перетащите его"
						/>
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
				<div v-else-if="role.user.profile_type == roles[1]">
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
							<input
								type="text"
								placeholder="Выберите файл или перетащите его"
							/>
							<p>
								Размер логотипа: до 1200х1200. Вес файла - не более 5
								МБ, формат png, jpg.
							</p>
						</div>
					</form>
					<form class="questionnaire auth__form">
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
								>У вашей компании есть опыт пилотирования со
								стартапами?</label
							>
							<input type="checkbox" />
							Да
							<input type="checkbox" />
							Нет
						</div>
						<div class="text-field">
							<label for=""
								>Инвестирует ли ваша компания в стартапы?</label
							>
							<input type="checkbox" />
							Да
							<input type="checkbox" />
							Нет
						</div>
					</form>
				</div>
				<div v-else-if="role.user.profile_type == roles[2]">
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
							<input
								type="text"
								placeholder="Выберите файл или перетащите его"
							/>
							<p>
								Размер логотипа: до 1200х1200. Вес файла - не более 5
								МБ, формат png, jpg.
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
								>У вашей компании есть опыт пилотирования со
								стартапами?</label
							>
							<input type="checkbox" />
							Да
							<input type="checkbox" />
							Нет
						</div>
						<div class="text-field">
							<label for=""
								>Инвестирует ли ваша компания в стартапы?</label
							>
							<input type="checkbox" />
							Да
							<input type="checkbox" />
							Нет
						</div>
					</form>
				</div>
				<div v-else-if="role.user.profile_type == roles[3]">
					<form class="questionnaire auth__form">
						<h3>Основная информация</h3>
						<div class="text-field">
							<label for="">Публичное название</label>
							<input type="text" placeholder="Например, BnB Ventures" />
						</div>
						<div class="text-field">
							<label for="">Наименование организации</label>
							<input
								type="text"
								placeholder="Например, ООО “Компания”"
							/>
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
							<input
								type="text"
								placeholder="Выберите файл или перетащите его"
							/>
							<p>
								Размер логотипа: до 1200х1200. Вес файла - не более 5
								МБ, формат png, jpg.
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
								>У вашей корпорации есть опыт пилотирования со
								стартапами?</label
							>
							<input type="checkbox" />
							Да
							<input type="checkbox" />
							Нет
						</div>
						<div class="text-field">
							<label for=""
								>Инвестирует ли ваша корпорация в стартапы?</label
							>
							<input type="checkbox" />
							Да
							<input type="checkbox" />
							Нет
						</div>
					</form>
				</div>
				<div v-else-if="role.user.profile_type == roles[4]">
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
							<input
								type="text"
								placeholder="Выберите файл или перетащите его"
							/>
							<p>
								Размер логотипа: до 1200х1200. Вес файла - не более 5
								МБ, формат png, jpg.
							</p>
						</div>
						<div class="text-field">
							<label for="">Резюме</label>
							<input
								type="text"
								placeholder="Выберите файл или перетащите его"
							/>
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
				<button>Отправить анкету</button>
			</div>
			<div class="form-page__inner" v-else-if="steps === 2">
				<p class="title">Моя анкета</p>
				<div class="form-page__card form-page__header">
					<div class="logo">
						<img src="../../assets/images/member1.png" alt="" />
					</div>
					<div class="info">
						<p>SmartRemont</p>
						<span> 0 просмотров </span>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
									stroke="#181236"
									stroke-width="2"
									stroke-linejoin="round"
								/>
								<path
									d="M12.0043 6L12.0037 12.0044L16.2434 16.2441"
									stroke="#181236"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							На проверке
						</span>
					</div>
				</div>
				<div class="form-page__card form-page__info">
					<p class="form-page__card-title">О продукте</p>
					<div class="form-page__card-category">
						<div class="full">
							<label for="">Описание</label>
							<span> Прототип, продаж нет </span>
						</div>
						<div>
							<label for="">Стадия развития</label>
							<span> Прототип, продаж нет </span>
						</div>
						<div>
							<label for="">Бизнес модели</label>
							<span> B2B, B2C, C2C </span>
						</div>
						<div class="full">
							<label for="">Индустрии</label>
							<span>
								<div class="item">
									<span>AdTech & MarTech</span>
								</div>
							</span>
						</div>
						<div class="full">
							<label for="">Технологии</label>
							<span>
								<div class="item">
									<span>AdTech & MarTech</span>
								</div>
							</span>
						</div>
						<div>
							<label for="">Стадия развития</label>
							<span> Прототип, продаж нет </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { computed, onMounted, ref } from "vue";
	import { useStore } from "vuex";
	import Loader from "@/components/global/Loader.vue";

	export default {
		components: {
			Loader,
		},
		setup() {
			const store = useStore();
			const roles = ref([
				"StartUp",
				"Investor",
				"InvestFund",
				"Corporation",
				"Specialist",
			]);
			const loading = ref(true);
			const steps = ref(0);

			const form = computed(() => store.state.profile.form);

			const role = computed(() => store.state.auth.user);

			const getMe = () => {
				store.dispatch("profile/getForm").then((res) => {
					if (res) {
						steps.value = 2;
						loading.value = false;
					} else {
						steps.value = 1;
						loading.value = false;
					}
				});
			};

			onMounted(() => {
				getMe();
			});

			return {
				store,
				roles,
				loading,
				steps,
				form,
				role,
			};
		},
	};
</script>

<style></style>

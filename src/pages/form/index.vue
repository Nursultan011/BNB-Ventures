<template>
  <Loader v-if="loading" />
  <section v-else class="form-page">
    <div class="container">
      <div
        class="form-page__inner"
        v-if="role && role.user && role.user.profile_type && steps === 1"
      >
        <StartupForm v-if="role.user.profile_type == roles[0]" />
        <InvestorForm v-else-if="role.user.profile_type == roles[1]" />
        <InvestFundForm v-else-if="role.user.profile_type == roles[2]" />
        <CorporationForm v-else-if="role.user.profile_type == roles[3]" />
        <SpecialistForm v-else-if="role.user.profile_type == roles[4]" />
      </div>
      <div
        class="form-page__inner"
        v-else-if="
          role && role.user && role.user.profile_type && steps === 2 && form
        "
      >
        <p class="title">Моя анкета</p>
        <div
          class="form-page__wrapper"
        >
          <div class="form-page__cards" v-if="role.user.profile_type == roles[0]">
            <div class="form-page__card form-page__header">
              <div class="logo">
                <img v-if="form && form.logo" :src="form.logo" alt="" />
              </div>
              <div class="info">
                <p v-if="form && form.startup_name">
                  {{ form.startup_name }}
                </p>
                <span> {{ form?.views }} просмотров </span>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="edit-icon"
              >
                <path
                  d="M3.5 21H21.5"
                  stroke="#5640FA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z"
                  stroke="#5640FA"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="form-page__card form-page__info">
              <div class="form-page__card-title">
                <h4>О продукте</h4>
              </div>
              <div class="form-page__card-category">
                <div class="full" v-if="form && form.description">
                  <label for="">Описание</label>
                  <span> {{ form.description }} </span>
                </div>
                <div v-if="form && form.startup_stage">
                  <label for="">Стадия развития</label>
                  <span> {{ form.startup_stage }} </span>
                </div>
                <div
                  v-if="
                    form &&
                    form.selling_models &&
                    form.selling_models.length >= 1
                  "
                >
                  <label for="">Бизнес модели</label>
                  <span>
                    <span v-for="(item, i) in form.selling_models" :key="i">
                      {{ item }}
                      <span
                        style="margin-right: 6px"
                        v-if="i < form.selling_models.length - 1"
                        >,
                      </span>
                    </span>
                  </span>
                </div>
                <div class="full" v-if="form && form.industries">
                  <label for="">Индустрии</label>
                  <span>
                    <div
                      class="item"
                      v-for="(idn, idx) in form.industries"
                      :key="idx"
                    >
                      <span>{{ idn }}</span>
                    </div>
                  </span>
                </div>
                <div class="full" v-if="form && form.technologies">
                  <label for="">Технологии</label>
                  <span>
                    <div
                      class="item"
                      v-for="(idn, idx) in form.technologies"
                      :key="idx"
                    >
                      <span>{{ idn }}</span>
                    </div>
                  </span>
                </div>
                <div class="full" v-if="form && form.website">
                  <label for="">Ссылка на проект</label>
                  <span> {{ form.website }} </span>
                </div>
              </div>
            </div>
            <div class="form-page__card form-page__info">
              <div class="form-page__card-title">
                <h4>О компании</h4>
              </div>
              <div class="form-page__card-category">
                <div class="full" v-if="form && form.startup_name">
                  <label for="">Публичное название</label>
                  <span> {{ form.startup_name }} </span>
                </div>
                <div class="fulls">
                  <div class="full" v-if="form && form.organization_name">
                    <label for="">Наименование организации</label>
                    <span> {{ form.organization_name }} </span>
                  </div>
                  <div class="full" v-if="form && form.organization_id">
                    <label for="">Идентификационный номер</label>
                    <span> {{ form.organization_id }} </span>
                  </div>
                  <!-- <div class="full">
                    <label for="">Модели продаж</label>
                    <span> Прямые продажи, Лицензия </span>
                  </div> -->
                  <div class="full" v-if="form && form.country">
                    <label for="">Страна регистрации</label>
                    <span> {{ form.country }} </span>
                  </div>
                  <div class="full" v-if="form && form.organization_year">
                    <label for="">Год основания</label>
                    <span> {{ form.organization_year }} </span>
                  </div>
                  <div class="full" v-if="form && form.employees_count">
                    <label for="">Количество сотрудников</label>
                    <span> {{ form.employees_count }} </span>
                  </div>
                  <div class="full" v-if="form && form.contact_name">
                    <label for="">Контактное лицо</label>
                    <span> {{ form.contact_name }} </span>
                  </div>
                  <div class="full" v-if="form && form.phone">
                    <label for="">Номер телефона</label>
                    <span> {{ form.phone }} </span>
                  </div>
                  <div class="full" v-if="form && form.email">
                    <label for="">Электронная почта</label>
                    <span> {{ form.email }} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-page__cards" v-else-if="role.user.profile_type == roles[1]">
            <div class="form-page__card form-page__header">
              <div class="logo">
                <img v-if="form && form.logo" :src="form.logo" alt="" />
              </div>
              <div class="info">
                <p v-if="form && form.public_name">
                  {{ form.public_name }}
                </p>
                <span v-if="form && form.views">
                  {{ form.views }} просмотров
                </span>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="edit-icon"
              >
                <path
                  d="M3.5 21H21.5"
                  stroke="#5640FA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z"
                  stroke="#5640FA"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="form-page__card form-page__info">
              <div class="form-page__card-title">
                <h4>О продукте</h4>
              </div>
              <div class="form-page__card-category">
                <div class="full" v-if="form && form.description">
                  <label for="">Описание</label>
                  <span> {{ form.description }} </span>
                </div>
                <div v-if="form && form.stage">
                  <label for="">Стадия развития</label>
                  <span>
                    <span v-for="(item, i) in form.stage" :key="i">
                      {{ item }}
                      <span
                        style="margin-right: 6px"
                        v-if="i < form.stage.length - 1"
                        >,
                      </span>
                    </span>
                  </span>
                </div>
                <div>
                  <label for="">Бизнес модели</label>
                  <span> B2B, B2C, C2C </span>
                </div>
                <div class="full" v-if="form && form.industries">
                  <label for="">Индустрии</label>
                  <span>
                    <div
                      class="item"
                      v-for="(idn, idx) in form.industries"
                      :key="idx"
                    >
                      <span>{{ idn }}</span>
                    </div>
                  </span>
                </div>
                <div class="full" v-if="form && form.technologies">
                  <label for="">Технологии</label>
                  <span>
                    <div
                      class="item"
                      v-for="(idn, idx) in form.technologies"
                      :key="idx"
                    >
                      <span>{{ idn }}</span>
                    </div>
                  </span>
                </div>
                <div class="full" v-if="form && form.website">
                  <label for="">Ссылка на проект</label>
                  <span> {{ form.website }} </span>
                </div>
                <div class="full-item">
                  <!-- <div class="item">
                    <label for="">Лого</label>
                    <div class="item-content">
                      <img src="../../assets/images/member1.png" alt="" />
                      <div class="item-text">
                        <p>logo.png</p>
                        <p class="item-date">Добавлено в 23.10.2023</p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <label for="">Презентация</label>
                    <div class="item-content">
                      <img src="../../assets/images/member1.png" alt="" />
                      <div class="item-text">
                        <p>presentation.pdf</p>
                        <p class="item-date">Добавлено в 23.10.2023</p>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="form-page__card form-page__info">
              <div class="form-page__card-title">
                <h4>О компании</h4>
              </div>
              <div class="form-page__card-category">
                <div class="full" v-if="form && form.public_name">
                  <label for="">Публичное название</label>
                  <span> {{ form.public_name }} </span>
                </div>
                <div class="fulls">
                  <div class="full" v-if="form && form.organization_name">
                    <label for="">Наименование организации</label>
                    <span> {{ form.organization_name }} </span>
                  </div>
                  <div class="full" v-if="form && form.organization_id">
                    <label for="">Идентификационный номер</label>
                    <span> {{ form.organization_id }} </span>
                  </div>
                  <!-- <div class="full">
                    <label for="">Модели продаж</label>
                    <span> Прямые продажи, Лицензия </span>
                  </div> -->
                  <div class="full" v-if="form && form.country">
                    <label for="">Страна регистрации</label>
                    <span> {{ form.country }} </span>
                  </div>
                  <!-- <div class="full">
                    <label for="">Год основания</label>
                    <span> 2023 </span>
                  </div> -->
                  <!-- <div class="full">
                    <label for="">Количество сотрудников</label>
                    <span> 20 </span>
                  </div> -->
                  <div class="full" v-if="form && form.contact_name">
                    <label for="">Контактное лицо</label>
                    <span> {{ form.contact_name }} </span>
                  </div>
                  <div class="full" v-if="form && form.phone">
                    <label for="">Номер телефона</label>
                    <span> {{ form.phone }} </span>
                  </div>
                  <div class="full" v-if="form && form.email">
                    <label for="">Электронная почта</label>
                    <span> {{ form.email }} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-page__cards" v-else-if="role.user.profile_type == roles[4]">
            <div class="form-page__card form-page__header">
              <div class="logo">
                <img
                  v-if="form && form.profile_image"
                  :src="form.profile_image"
                  alt=""
                />
              </div>
              <div class="info">
                <p v-if="form && form.user && form.user.name">
                  {{ form.user.name }}
                </p>
                <span> {{ form?.views }} просмотров </span>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="edit-icon"
              >
                <path
                  d="M3.5 21H21.5"
                  stroke="#5640FA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z"
                  stroke="#5640FA"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="form-page__card form-page__info">
              <div class="form-page__card-title">
                <h4>Основная информация</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.5 21H21.5"
                    stroke="#5640FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z"
                    stroke="#5640FA"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="form-page__card-category">
                <div v-if="form && form.user && form.user.phone">
                  <label for="">Номер телефона</label>
                  <span> {{ form.user.phone }} </span>
                </div>
                <div v-if="form && form.user && form.user.email">
                  <label for="">Электронная почта</label>
                  <span> {{ form.user.email }} </span>
                </div>
                <div v-if="form && form.experience_years">
                  <label for="">Опыт работы</label>
                  <span> {{ form.experience_years }} </span>
                </div>
                <div class="full" v-if="form && form.experience">
                  <label for="">Описание</label>
                  <span> {{ form.experience }} </span>
                </div>
                <div class="full" v-if="form && form.description">
                  <label for="">Описание</label>
                  <span> {{ form.description }} </span>
                </div>
                <div class="full" v-if="form && form.industries">
                  <label for="">Индустрии</label>
                  <span>
                    <div
                      class="item"
                      v-for="(idn, idx) in form.industries"
                      :key="idx"
                    >
                      <span>{{ idn }}</span>
                    </div>
                  </span>
                </div>
                <div class="full" v-if="form && form.technologies">
                  <label for="">Технологии</label>
                  <span>
                    <div
                      class="item"
                      v-for="(idn, idx) in form.technologies"
                      :key="idx"
                    >
                      <span>{{ idn }}</span>
                    </div>
                  </span>
                </div>
                <div class="full-item">
                  <div class="item">
                    <label for="">Фото</label>
                    <div class="item-content">
                      <img
                        v-if="form && form.profile_image"
                        :src="form.profile_image"
                        alt=""
                      />
                      <div class="item-text">
                        <p>Profile-photo.png</p>
                        <p class="item-date">Добавлено в {{ form.updated }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <label for="">Презентация</label>
                    <div class="item-content">
                      <img src="../../assets/images/pdf.svg" alt="" />
                      <div class="item-text">
                        <p>presentation.pdf</p>
                        <p class="item-date">Добавлено в {{ form.updated }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="form-page__check"
            v-if="form.is_approved !== true && modalApprov === true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M12.0041 6L12.0035 12.0044L16.2432 16.2441"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="form__text-box">
              <p>Проверяем анкету</p>
              <span
                >Обычно проверка занимает 3-5 дней. Пришлём письмо на почту
                после проверки анкеты</span
              >
            </div>
            <svg
              @click="modalApprov = false"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 7L17 17"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 17L17 7"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
import InvestorForm from "@/components/partials/Form/InvestorForm.vue";
import StartupForm from "@/components/partials/Form/StartupForm.vue";
import InvestFundForm from "@/components/partials/Form/InvestFundForm.vue";
import CorporationForm from "@/components/partials/Form/CorporationForm.vue";
import SpecialistForm from "@/components/partials/Form/SpecialistForm.vue";

export default {
  components: {
    Loader,
    InvestorForm,
    StartupForm,
    InvestFundForm,
    CorporationForm,
    SpecialistForm,
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

    const modalApprov = ref(true);

    const getMe = async () => {
      await store
        .dispatch("profile/getForm")
        .then((res) => {
          console.log(res);
          if (res) {
            steps.value = 2;
            loading.value = false;
          } else {
            steps.value = 1;
            loading.value = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    onMounted(async () => {
      await getMe();
    });

    return {
      store,
      roles,
      loading,
      steps,
      form,
      role,
      modalApprov,
    };
  },
};
</script>

<style></style>

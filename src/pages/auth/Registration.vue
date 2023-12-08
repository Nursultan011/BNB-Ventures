<template>
  <section class="auth">
    <div class="container">
      <div class="auth__inner" v-if="steps === 0">
        <h2 class="auth__title">Регистрация {{ thisPage }}</h2>
        <form class="auth__form">
          <div
            class="text-field"
            :class="{
              'has-error': validation.name && validation.name !== true,
            }"
          >
            <label for="name">Имя и фамилия</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Введите имя и фамилию"
              autocomplete="name"
              required
              @input="validate('name')"
            />
            <span
              v-if="validation.name && validation.name !== true"
              class="error-message"
            >
              {{ validation.name }}
            </span>
          </div>
          <div
            class="text-field"
            :class="{
              'has-error': validation.email && validation.email !== true,
            }"
          >
            <label for="email">Электронная почта</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="name@example.com"
              autocomplete="email"
              required
              @input="validate('email')"
            />
            <span
              v-if="validation.email && validation.email !== true"
              class="error-message"
              >{{ validation.email }}</span
            >
          </div>
          <div
            class="text-field"
            :class="{
              'has-error': validation.phone && validation.phone !== true,
            }"
          >
            <label for="phone">Номер телефона</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              placeholder="+7(---) --- -- --"
              autocomplete="tel"
              required
              @input="validate('phone')"
            />
            <span
              v-if="validation.phone && validation.phone !== true"
              class="error-message"
              >{{ validation.phone }}</span
            >
          </div>
          <div
            class="text-field"
            :class="{
              'has-error': validation.password && validation.password !== true,
            }"
          >
            <label for="password">Пароль</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Введите пароль"
              autocomplete="new-password"
              required
              @input="validate('password')"
            />
            <span
              v-if="validation.password && validation.password !== true"
              class="error-message"
              >{{ validation.password }}</span
            >
          </div>
          <div
            class="text-field"
            :class="{
              'has-error':
                validation.password_repeat &&
                validation.password_repeat !== true,
            }"
          >
            <label for="password_repeat">Повторите пароль</label>
            <input
              id="password_repeat"
              v-model="form.password_repeat"
              type="password"
              placeholder="Повторите пароль"
              autocomplete="new-password"
              required
              @input="validate('password_repeat')"
            />
            <span
              v-if="
                validation.password_repeat &&
                validation.password_repeat !== true
              "
              class="error-message"
              >{{ validation.password_repeat }}</span
            >
          </div>
          <div class="auth__agreement">
            <input v-model="form.accepted" type="checkbox" />
            <p>
              Подтверждаю, что я ознакомился(ась) с
              <a href=""
                >Пользовательским соглашением и обработкой персональных
                данных</a
              >
            </p>
          </div>
          <div v-if="hasErrors" class="error-message">
            <div
              class="haserror"
              v-for="(errors, field) in errorMessages"
              :key="field"
            >
              {{ field }}: {{ errors.join(", ") }}
            </div>
          </div>
          <button @click.prevent="submit" class="main-button" type="submit">
            Зарегистрироваться
          </button>
          <div class="auth__registr">
            Уже зарегистрированы? <router-link to="/login">Войти</router-link>
          </div>
        </form>
      </div>
      <div class="auth__inner" v-else-if="steps === 1">
        <Pending />
      </div>
      <div class="auth__inner" v-else-if="steps === 2">
        <h2 class="auth__title">Подтвердите аккаунт</h2>
        <form class="auth__form">
          <div class="description">
            Мы отправили на почту
            <span v-if="form.email">{{ form.email }}</span> сообщение 6-ти
            значным кодом, введите его.
          </div>
          <div class="otp-input">
            <input
              v-for="(digit, index) in otp"
              :key="index"
              v-model="otp[index]"
              @keyup="handleKeyup($event, index)"
              maxlength="1"
              class="otp-digit"
              :autofocus="index === 0"
            />
          </div>
          <div class="otp-repeat">
            <span v-if="timer > 0">
              Отправить новый код через {{ timer }} сек
            </span>
            <span v-else>Отправить заново</span>
          </div>
          <button
            @click.prevent="confirmEmail"
            class="main-button otp-button"
            type="submit"
            :disabled="!isOtpComplete"
          >
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, watch, computed, nextTick, onMounted, toRaw } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Pending from "@/components/partials/Auth/Pending.vue";

export default {
  components: {
    Pending,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const steps = ref(0);

    const roles = ref([
      {
        path: "startup",
        value: "StartUp",
      },
      {
        path: "investor",
        value: "Investor",
      },
      {
        path: "invest-fund",
        value: "InvestFund",
      },
      {
        path: "corporation",
        value: "Corporation",
      },
      {
        path: "specialist",
        value: "Specialist",
      },
    ]);

    const form = ref({
      name: "",
      email: "",
      phone: "",
      password: "",
      password_repeat: "",
      accepted: false,
    });

    const validation = ref({
      name: "",
      email: "",
      phone: "",
      password: "",
      password_repeat: "",
    });

    const errorMessages = ref({});
    const otp = ref(["", "", "", "", "", ""]);
    const otpInputRefs = ref([]);

    const thisPage = computed(() => {
      const type = route.params.type;
      console.log(type);
      if (type == "startup") {
        return "Стартап";
      } else if (type == "investor") {
        return "Инвестор";
      } else if (type == "invest-fund") {
        return "Инвестиционный фонд";
      } else if (type == "corporation") {
        return "Корпорация";
      } else if (type == "specialist") {
        return "Специалист";
      } else {
        return null;
      }
    });

    const isOtpComplete = computed(() => {
      return otp.value.every((digit) => digit.trim() !== "");
    });

    const timer = ref(60);
    const timerInterval = ref(null);

    const otpString = computed({
      get: () => otp.value.join(""),
      set: (newValue) => {
        const newValues = newValue.split("");
        for (let i = 0; i < otp.value.length; i++) {
          otp.value[i] = newValues[i] || "";
        }
      },
    });

    const validateRequired = (value) =>
      !!value || "Поле обязательно для заполнения";
    const validateEmail = (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Введите корректный email";
    const validatePhone = (value) =>
      /^\+7\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/.test(value) ||
      "Введите корректный номер телефона";

    const validateForm = () => {
      validation.value.name = validateRequired(form.value.name);
      validation.value.email = validateEmail(form.value.email);
      validation.value.phone = validateRequired(form.value.phone);
      validation.value.password = validateRequired(form.value.password);
      validation.value.password_repeat = validateRequired(
        form.value.password_repeat
      );

      if (form.value.password !== form.value.password_repeat) {
        validation.value.password_repeat = "Пароли не совпадают";
      }

      errorMessages.value = {};
    };

    const validate = (field) => {
      switch (field) {
        case "name":
          validation.value.name = validateRequired(form.value.name);
          break;
        case "email":
          validation.value.email = validateEmail(form.value.email);
          break;
        case "phone":
          validation.value.phone = validateRequired(form.value.phone);
          break;
        case "password":
          validation.value.password = validateRequired(form.value.password);
          break;
        case "password_repeat":
          validation.value.password_repeat =
            form.value.password === form.value.password_repeat
              ? ""
              : "Пароли не совпадают";
          break;
        default:
          break;
      }
    };

    const type = (typePath) => {
      const selectedType = roles.value.find((item) => item.path == typePath);
      return selectedType ? selectedType.value : "None";
    };

    const submit = () => {
      validateForm();

      if (
        Object.values(validation.value).every((value) => value === true) &&
        form.value.accepted === true
      ) {
        store
          .dispatch("auth/registration", {
            name: form.value.name,
            email: form.value.email,
            phone: form.value.phone,
            password: form.value.password,
            type: type(route.params.type),
          })
          .then((res) => {
            steps.value = 1;

            store
              .dispatch("auth/sendCode", {
                email: form.value.email,
              })
              .then((resp) => {
                console.log(resp);

                steps.value = 2;
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((err) => {
            console.log(err, "templa");

            // Обработка ошибок
            if (err.response && err.response.data) {
              const errorData = err.response.data;

              for (const field in errorData) {
                if (Object.hasOwnProperty.call(errorData, field)) {
                  errorMessages.value[field] = errorData[field];
                }
              }
            }
          });
      }
    };

    const hasErrors = computed(
      () => Object.keys(errorMessages.value).length > 0
    );

    const startTimer = () => {
      timerInterval.value = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          clearInterval(timerInterval.value);
        }
      }, 1000);
    };

    const confirmEmail = () => {
      store.dispatch("auth/verification", {
        code: otpString.value.toUpperCase(),
      });
    };

    const handleKeyup = (event, index) => {
      const { value } = event.target;
      otpString.value = otp.value.join("");
      if (value.length > 0 && index < otp.value.length - 1) {
        const nextInput = event.target.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      } else if (value.length === 0 && index > 0) {
        const prevInput = event.target.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
        }
      }
    };

    onMounted(() => {
      startTimer();
    });

    return {
      route,
      store,
      form,
      roles,
      validation,
      validate,
      submit,
      errorMessages,
      hasErrors,
      steps,
      otp,
      otpInputRefs,
      timer,
      startTimer,
      confirmEmail,
      handleKeyup,
      otpString,
      isOtpComplete,
      thisPage,
    };
  },
};
</script>

<style></style>

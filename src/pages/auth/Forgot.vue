<template>
  <section class="auth auth__forgot">
    <div class="container">
      <div class="auth__inner" v-if="steps === 1">
        <router-link to="/login" class="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#3D24F9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >Вернуться назад
        </router-link>
        <h2 class="auth__title">Восстановить пароль</h2>
        <form @submit.prevent="submit" class="auth__form">
          <p class="forgot__title">
            Введите электронную почту которую вы указали при регистрации.
          </p>
          <div class="text-field">
            <label for="">Электронная почта</label>
            <input v-model="email" type="text" placeholder="name@example.com" />
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
          <Button type="submit" :disabled="!isFormValid">Отправить</Button>
        </form>
      </div>
      <div class="auth__inner" v-else-if="steps === 2">
        <h2 class="auth__title">Подтвердите аккаунт</h2>
        <form class="auth__form">
          <div class="description">
            Мы отправили на почту
            <span v-if="email">{{ email }}</span> сообщение 6-ти значным кодом,
            введите его.
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
import Button from "@/components/UIKit/MainButton.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    Button,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const steps = ref(1);
    const formErrors = ref({});
    const timer = ref(60);
    const timerInterval = ref(null);
    const otp = ref(["", "", "", "", "", ""]);
    const otpInputRefs = ref([]);
    const email = ref("");

    const isFormValid = computed(() => {
      return email.value !== "";
    });

    const submit = () => {
      formErrors.value = {};

      store
        .dispatch("auth/sendCode", {
          email: email.value,
        })
        .then((res) => {
          if (res) {
            steps.value = 2;
            startTimer();
          }
        })
        .catch((err) => {
          if (err && err.response && err.response.data) {
            formErrors.value = err.response.data;
          }
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

    const confirmEmail = () => {
      store
        .dispatch("auth/verification", {
          code: otpString.value.toUpperCase(),
        })
        .then((res) => {
          router.push("/login");
        });
    };

    const isOtpComplete = computed(() => {
      return otp.value.every((digit) => digit.trim() !== "");
    });

    const otpString = computed({
      get: () => otp.value.join(""),
      set: (newValue) => {
        const newValues = newValue.split("");
        for (let i = 0; i < otp.value.length; i++) {
          otp.value[i] = newValues[i] || "";
        }
      },
    });

    const startTimer = () => {
      timerInterval.value = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
        } else {
          clearInterval(timerInterval.value);
        }
      }, 1000);
    };

    return {
      router,
      store,
      email,
      submit,
      isFormValid,
      formErrors,
      steps,
      handleKeyup,
      timer,
      timerInterval,
      otp,
      otpInputRefs,
      confirmEmail,
      isOtpComplete,
      otpString,
      startTimer
    };
  },
};
</script>

<style></style>

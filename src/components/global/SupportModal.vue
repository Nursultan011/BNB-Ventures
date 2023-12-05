<template>
  <div class="modal" v-if="isVisible">
    <div class="modal__inner">
      <div class="modal__header">
        <p>Написать в службу поддержки</p>
        <button class="close-button" @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 7L17 17"
              stroke="#181236"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 17L17 7"
              stroke="#181236"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <form class="auth__form">
        <div class="text-field">
          <label for="">Ваше имя</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Ваше имя”"
            required
          />
        </div>
        <div class="text-field">
          <label for="">Электронная почта</label>
          <input
            v-model="form.email"
            type="text"
            placeholder="Электронная почта”"
            required
          />
        </div>
        <div class="text-field">
          <label for="">Сообщение</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Напишите о свое сообщение..."
            required
            v-model="form.comment"
          ></textarea>
        </div>
        <div v-if="hasErrors" class="error-message">
          <div
            class="haserror"
            v-for="(errors, field) in errorMessages"
            :key="field"
          >
            {{ field }}: {{ formatError(errors) }}
          </div>
        </div>
        <button
          class="main-button"
          type="submit"
          :disabled="!isFormValid"
          @click.prevent="send()"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup(props, { emit }) {
    const store = useStore();
    const isVisible = ref(false);
    const errorMessages = ref({});

    const form = ref({
      name: "",
      email: "",
      comment: "",
    });

    function open() {
      isVisible.value = true;
    }

    function close() {
      isVisible.value = false;
      emit("close");
    }

    const isFormValid = computed(() => {
      return form.value.email !== "" && form.value.password !== "";
    });

    const hasErrors = computed(
      () => Object.keys(errorMessages.value).length > 0
    );

    const formatErrorMessage = (error) => {
      if (Array.isArray(error)) {
        return error.join(" ");
      }
      return error;
    };

    const formatError = (errors) => {
      return Array.isArray(errors) ? errors.join(", ") : errors;
    };

    const send = async () => {
      await store
        .dispatch("articles/Support", form.value)
        .then((res) => {
          close();
          form.value = {};
        })
        .catch((err) => {
          if (err && err.data) {
            Object.keys(err.data).forEach((field) => {
              errorMessages.value[field] = formatErrorMessage(err.data[field]);
            });
          }
        });
    };

    return {
      store,
      open,
      close,
      isVisible,
      send,
      form,
      formatError,
      formatErrorMessage,
      hasErrors,
      isFormValid,
      errorMessages,
    };
  },
};
</script>

<style></style>

<template>
  <div class="upload-image">
    <input
      placeholder="Выберите файл или перетащите его"
      type="file"
      id="profile-photo"
      @change="handleFileUpload"
      accept="image/*"
      ref="fileInput"
      class="file-input"
    />
    <div class="upload-placeholder" @click="triggerFileInput">
      <span v-if="!selectedImage">Выберите файл или перетащите его</span>
      <div v-if="selectedImage" class="image-preview">
        <div>
          <img :src="selectedImage" alt="Preview" />
          <p class="image-name">{{ imageName }}</p>
        </div>
        <span class="remove-image" @click="removeSelectedImage">
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
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selectedImage = ref(null);
    const fileInput = ref(null);
    const imageName = ref("");

    const triggerFileInput = () => {
      fileInput.value.click();
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        selectedImage.value = URL.createObjectURL(file);
        imageName.value = file.name;
        emit("update:modelValue", file);
      }
    };

    const removeSelectedImage = () => {
      selectedImage.value = null;
      imageName.value = "";
      emit("update:modelValue", null);
    };

    return {
      selectedImage,
      fileInput,
      imageName,
      triggerFileInput,
      handleFileUpload,
      removeSelectedImage,
    };
  },
};
</script>

<style lang="scss">
.image-uploader {
  .file-input {
    display: none;
  }

  .upload-placeholder {
    cursor: pointer;
  }

  .image-preview {
    position: relative;
    display: inline-block;
  }

  .image-preview button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>

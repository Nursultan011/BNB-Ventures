<template>
  <div class="custom-multiselect">
    <div class="select-box" @click="dropdown = !dropdown">
      <div class="placeholder" v-if="!selected.length">{{ placeholder }}</div>
      <div class="selected-list" v-else>
        <div
          v-for="(item, index) in selected"
          :key="index"
          class="selected-item"
        >
          {{ item[label] }}
          <span class="delete-item" @click.stop="removeItem(index)">
            <img src="../../assets/images/close.svg" alt="" />
          </span>
        </div>
      </div>
      <div class="arrow">
        <img
          :class="{ active: dropdown }"
          src="../../assets/images/select-arrow.svg"
          alt=""
        />
      </div>
    </div>
    <div class="options" v-show="dropdown">
      <div
        class="option"
        v-for="option in options"
        :key="option[trackBy]"
        @click="selectOption(option)"
      >
        {{ option[label] }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, defineProps, defineEmits, onMounted } from "vue";

const props = defineProps({
  options: Array,
  placeholder: String,
  label: String,
  trackBy: String,
  modelValue: {
    type: Array,
    default: () => []
  }
});

const emits = defineEmits(["update:modelValue"]);

const dropdown = ref(false);
const selected = ref(
  []
);

onMounted(() => {
  if (Array.isArray(props.modelValue)) {  
    selected.value = props.options.filter(option => 
      props.modelValue.includes(option[props.trackBy])
    );
  }
});

const selectedIds = computed({
  get: () => selected.value.map((item) => item[props.trackBy]),
  set: (newIds) => {
    selected.value = props.options.filter((option) =>
      newIds.includes(option[props.trackBy])
    );
  },
});

watch(
  selectedIds,
  (newIds) => {
    emits("update:modelValue", newIds);
  },
  { deep: true }
);

const selectOption = (option) => {
  const index = selected.value.findIndex(
    (sel) => sel[props.trackBy] === option[props.trackBy]
  );
  if (index === -1) {
    selected.value.push(option);
  } else {
    selected.value.splice(index, 1);
  }
};

const removeItem = (index) => {
  selected.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
.custom-multiselect {
  border: 1px solid rgba(210, 212, 219, 1);
  padding: 11.5px 16px;
  width: 200px;
  position: relative;
  width: 100%;
  min-height: 48px;
}

.select-box {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  overflow: hidden;
  .placeholder {
    color: #767a87;
    font-size: 14px;
    line-height: normal;
  }
}

.options {
  position: absolute;
  width: 100%;
  border: 1px solid rgba(210, 212, 219, 1);
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background: white;
  z-index: 10;
  left: -1px;
  margin-top: 13px;
  right: -1px;
  width: calc(100% + 2px);
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.option {
  padding: 12px 16px;
  cursor: pointer;
  color: rgba(24, 18, 54, 1);
  font-size: 14px;
  line-height: normal;
}

.option:hover {
  background-color: #f0f0f0;
}

.arrow {
  user-select: none;
  width: 24px;
  height: 24px;
  img {
    transition: 0.2s;
  }
  .active {
    transform: rotate(180deg);
  }
}

.selected-item {
  background: rgba(231, 228, 255, 1);
  color: rgba(24, 18, 54, 1);
  font-size: 14px;
  line-height: normal;
  padding: 2px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  gap: 10px;
  span {
    width: 24px;
    height: 24px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.selected-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

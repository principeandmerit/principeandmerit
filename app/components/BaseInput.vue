<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  rule: {
    type: Array,
    required: false,
  },
  modelValue: [String, Number],
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  label: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const inputStatus = inject(BookingDialogFormInputStatusSetter, () => {})

/* simple error handling */
const error = ref('')

/* password toggle */
const showPassword = ref(false)

const computedType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})

const onModelValueChange = (textValue) => {
  emit('update:modelValue', textValue)

  if (props.rule) {
    for (const rule of props.rule) {
      const validationStatus = rule.validator(textValue)
      if (!validationStatus) {
        error.value = rule.message
        if (rule.forField) {
          inputStatus(rule.forField, false)
        }
        return
      }
      else {
        if (rule.forField) {
          inputStatus(rule.forField, validationStatus)
        }
        error.value = ''
      }
    }
  }
}
</script>

<template>
  <div class="base-input">
    <label
      v-if="label"
      :for="id"
      class="base-input__label"
    >
      {{ label }}
    </label>

    <div class="base-input__wrapper">
      <input
        :id="id"
        :type="computedType"
        :placeholder="placeholder"
        :value="modelValue"
        class="base-input__field"
        :class="{ 'has-error': error }"
        @input="onModelValueChange($event.target.value)"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
      >

      <button
        v-if="type === 'password'"
        type="button"
        class="base-input__toggle"
        @click="showPassword = !showPassword"
      >
        <Icon :name="showPassword ? 'mdi:eye-off' : 'mdi:eye'" />
      </button>
    </div>

    <div style="height: 20px;">
      <p
        v-if="error"
        class="base-input__error"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
}

.base-input__label {
  font-weight: 500;
  font-size: 0.875rem;
  color: #333;
}

.base-input__wrapper {
  position: relative;
  width: 100%;
}

.base-input__field {
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem; /* space for icon */
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.base-input__field:focus {
  border-color: black;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  outline: none;
}

/* error state */
.base-input__field.has-error {
  border-color: #dc2626;
}

.base-input__toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
  padding: 0;
}

.base-input__toggle:hover {
  color: #000;
}

.base-input__error {
  font-size: 0.75rem;
  color: #dc2626;
  margin-top: 0.125rem;
}
</style>

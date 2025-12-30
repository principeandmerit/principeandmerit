<script setup>
import { ref } from 'vue';
import { VueDatePicker, WeekStart } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const maxDate = computed(() => {
  const d = new Date();
  d.setMonth(d.getMonth() + 3);
  return d;
});

const date = ref();
</script>

<template>
  <VueDatePicker
    v-model="date"
    :min-date="new Date()"
    :max-date="maxDate"
    prevent-min-max-navigation
    :filters="{ weekDays: [0, 6] }"
    :time-config="{ enableTimePicker: false }"
    :week-start="WeekStart.Sunday"
    :formats="{ weekDay: 'EEEEE', input: 'MMM dd, yyyy - eee' }"
    :ui="{ input: 'form-input' }"
    inline
  />
</template>

<style scoped>
.form-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid black !important;
  border-radius: 4px;
  font-size: 1rem;
}
</style>

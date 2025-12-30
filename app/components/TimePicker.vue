<script setup>
const timeOptions = [
  { value: 800, label: '08:00 AM', enabled: true },
  { value: 830, label: '08:30 AM', enabled: true },
  { value: 900, label: '09:00 AM', enabled: true },
  { value: 930, label: '09:30 AM', enabled: true },
  { value: 1000, label: '10:00 AM', enabled: true },
  { value: 1030, label: '10:30 AM', enabled: true },
  { value: 1100, label: '11:00 AM', enabled: true },
  { value: 1130, label: '11:30 AM', enabled: true },
  { value: 1200, label: '12:00 PM', enabled: true },
  { value: 1230, label: '12:30 PM', enabled: true },
  { value: 1300, label: '01:00 PM', enabled: true },
  { value: 1330, label: '01:30 PM', enabled: true },
  { value: 1400, label: '02:00 PM', enabled: true },
  { value: 1430, label: '02:30 PM', enabled: true },
  { value: 1500, label: '03:00 PM', enabled: true },
  { value: 1530, label: '03:30 PM', enabled: true },
  { value: 1600, label: '04:00 PM', enabled: true },
  { value: 1630, label: '04:30 PM', enabled: true },
  { value: 1700, label: '05:00 PM', enabled: true },
];
</script>

<template>
  <BaseSelect
    :options="timeOptions"
    label="Time"
  />
</template>

<style lang="scss" scoped>

</style>

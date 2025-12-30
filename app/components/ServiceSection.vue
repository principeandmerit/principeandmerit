<script setup lang="ts">
const services: ('cardio' | 'ob' | 'pedia')[] = ['ob', 'pedia', 'cardio'];
</script>

<template>
  <div
    class="px-4 py-5"
    style="z-index: 0;"
  >
    <h1 class="primary mb-4">
      Services
    </h1>
    <div
      id="services-list"
      class="mt-4 pb-4"
    >
      <ServiceCard
        v-for="service in services"
        :key="service"
        class="mb-4"
        :type-of-service="service"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#services-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
</style>

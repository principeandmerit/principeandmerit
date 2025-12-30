<script setup lang="ts">
const emits = defineEmits<{
  (e: 'book-appointment'): void
}>();
</script>

<template>
  <div class="cta px-4 py-5">
    <div id="cta-image" />
    <div
      id="cta-info"
      class="py-4 mr-5"
    >
      <h1 class="primary mb-4">
        Welcome to Prestige Clinic
      </h1>
      <p>
        <small>Your health and wellness are our top priorities. At Prestige Clinic, we offer a range of services to help you look and feel your best.</small>
      </p>
      <div
        class="mt-4 mb-2 font-secondary"
        style="font-weight: bold;"
      >
        <span>Open every Monday to Friday </span> <span id="open-time">8:00 AM - 5:00 PM</span>
      </div>
      <button
        class="primary font-secondary px-4 py-2 mt-4"
        style="background-color: black; border-radius: 8px"
        @click="emits('book-appointment')"
      >
        Book an Appointment
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  #cta-image {
    min-width: 600px;
    flex: 1 1 600px;
    height: 33rem;
    background-image: url('../assets/images/prestige.jpg');
    background-size: cover;
    background-position: left top;
    border-radius: 8px;
  }
}

#cta-wrapper {
  overflow: hidden;
  z-index: 1;
  position: relative;
}

@keyframes slide {
  from {
    right: -25vw;
  }
  to {
    right: 125vw;
  }
}

.h {
  box-shadow: 0 0 50vh 40vh white;
  width: 100vw;
  height: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}
.v {
  box-shadow: 0 0 35vw 25vw white;
  width: 0;
  height: 100vh;
  bottom: 0;
  left: 0;
  position: absolute;
}

@media screen and (max-width: 1036px) {
  #open-time {
    display: block;
  }
}

@media screen and (max-width: 1112px) {
  .cta {
    flex-direction: column;
  }

  #cta-image {
    width: 100% !important;
    min-width: 100% !important;
  }

  #cta-info {
    text-align: center;
    margin-right: 0px !important;

    p {
      width: 100% !important;
    }
  }
}

@media screen and (max-width: 600px) {
  #cta-image {
    flex: 1 1 300px !important;
  }
}
</style>

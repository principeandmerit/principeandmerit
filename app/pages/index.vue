<script setup lang="ts">
const bookingModal = useTemplateRef('bookingModal');
const openBookingModal = () => {
  if (bookingModal.value) {
    bookingModal.value.open();
  }
}
</script>

<template>
  <div>
    <Cta @book-appointment="openBookingModal" />
    <ServiceSection />
    <ContactSection />
    <BookVisitModal ref="bookingModal" />
  </div>
</template>
